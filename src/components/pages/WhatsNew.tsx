import React, { useState } from "react";
import Header from "../reuseables/Header";
import {
  Collapse,
  PaginationProps,
  Input,
  Pagination,
  Typography,
  Empty,
  Space,
} from "antd";
import { BsSearch } from "react-icons/bs";
import AddNews from "../modals/AddNews";
import { useFetchNewsPageQuery } from "../../store";
import LoadingPage from "../reuseables/LoadingPage";
import ErrorPage from "../reuseables/ErrorPage";
import {
  CaretDownFilled,
  FileExcelFilled,
  FileFilled,
  FileImageFilled,
  FilePdfFilled,
  FilePptFilled,
  FileWordFilled,
} from "@ant-design/icons";
import CustomContainer from "../reuseables/CustomContainer";
import { GlobalType } from "../Types";

interface FileType {
  file: string;
  id: number;
}

interface objType extends GlobalType<string> {
  title: string;
  description: string;
  date_uploaded: string;
  ftp: FileType[];
}

const WhatsNew = () => {
  const [pageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const newApi = useFetchNewsPageQuery({
    page,
    pageSize,
    search,
  });

  const apiDomain = process.env.REACT_APP_API_DOMAIN;

  // search function
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
    setPage(1);
  };

  // function for change the page
  const onChangePage: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };

  // return a file name
  const detectFileName = (fileName: string) => {
    return fileName.split("/").pop();
  };

  // return file type
  const detectFileType = (fileName: string) => {
    const extension = fileName.split(".").pop();

    const iconMap: { [key: string]: JSX.Element } = {
      docx: <FileWordFilled className="text-blue-500" />,
      ppt: <FilePptFilled className="text-orange-600" />,
      pdf: <FilePdfFilled className="text-red-600" />,
      xlsx: <FileExcelFilled className="text-green-700" />,
      xls: <FileExcelFilled className="text-green-700" />,
    };
    return (
      iconMap[extension as keyof typeof iconMap] || (
        <FileFilled className="text-neutral-800" />
      )
    );
  };

  const dataAccordion = newApi.data?.results.map(
    ({ id, title, description, date_uploaded, ftp }: objType) => ({
      key: id,
      showArrow: false,
      label: (
        <Space className=" flex justify-between items-center">
          <Space className="space-x-5">
            <FileImageFilled className="text-[#cfd413] text-2xl" />
            <Space className=" block">
              <Typography.Text className=" font-sans font-semibold">
                {title}
              </Typography.Text>
              <Typography.Text className=" font-sans text-xs text-neutral-600">
                {date_uploaded}
              </Typography.Text>
            </Space>
            <Typography.Text className="text-neutral-800 font-sans border-l-2 ml-10 pl-8 border-neutral-600">
              {description}
            </Typography.Text>
          </Space>

          <CaretDownFilled className=" text-orange-600" />
        </Space>
      ),
      children: ftp.map(({ file, id }) => {
        const fileName = detectFileName(file);
        const fileType = detectFileType(file);
        return (
          <>
            <Space className="ml-10">
              <Space key={id} className=" flex items-center">
                {fileType}
                <Typography.Link
                  className="font-sans"
                  href={apiDomain?.concat("", file)}
                  target="_blank"
                  download={apiDomain?.concat("", file)}
                >
                  {fileName}
                </Typography.Link>
              </Space>
            </Space>
          </>
        );
      }),
    })
  );

  return (
    <>
      {newApi.isLoading && <LoadingPage />}
      {newApi.error && <ErrorPage />}
      {newApi.data && (
        <>
          <Header>
            <div className=" flex items-center space-x-5">
              <Header.Title title="What`s New!" />
              <Header.Image src="../images/NewsImg.svg" />
            </div>
          </Header>
          <CustomContainer>
            <div className=" mt-10 space-y-5">
              <div className=" flex items-center justify-between">
                <Input
                  placeholder="Search.."
                  defaultValue={search}
                  onKeyUp={handleSearchChange}
                  className="custom-style-input w-72"
                  suffix={<BsSearch />}
                />
                <AddNews />
              </div>
              {dataAccordion.length === 0 ? (
                <Empty className=" border-t border-b border-neutral-200 py-10" />
              ) : (
                <>
                  <Collapse accordion items={dataAccordion}></Collapse>
                </>
              )}
              <Pagination
                className=" flex justify-end"
                current={page}
                onChange={onChangePage}
                total={newApi.data?.count}
                defaultPageSize={pageSize}
              />
            </div>
          </CustomContainer>
        </>
      )}
    </>
  );
};

export default WhatsNew;
