import React, { useState } from "react";
import { Table, Typography, Input, Pagination } from "antd";
import type { PaginationProps, TableColumnsType } from "antd";
import Header from "../../reuseables/Header";
import { BsSearch } from "react-icons/bs";
import { FileTextFilled } from "@ant-design/icons";
import AddNewDocument from "../../modals/AddNewDocument";
import { useFetchDocumentsPageQuery } from "../../../store";
import moment from "moment";
import ErrorPage from "../../reuseables/ErrorPage";
import LoadingPage from "../../reuseables/LoadingPage";
import FileModal from "../../reuseables/FileModal";
import CustomContainer from "../../reuseables/CustomContainer";

interface objType {
  id: number;
  title: string;
  date_uploaded: string;
  uploaded_by: string;
  files: string;
  description: string;
}

type eventTypes = React.KeyboardEventHandler<HTMLInputElement> | any;
const Documents = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const [pageSize] = useState(2);

  const documentFromApi = useFetchDocumentsPageQuery({
    page,
    pageSize,
    search,
  });

  // search function
  const handleSearchChange = (event: eventTypes) => {
    setSearch(event.target.value);
    setPage(1);
  };

  // function for change the page
  const onChangePage: PaginationProps["onChange"] = (page) => {
    setPage(page);
  };

  const dataTable =
    documentFromApi.data?.results.map(
      ({
        id,
        title,
        description,
        uploaded_by,
        files,
        date_uploaded,
      }: objType) => ({
        id,
        title,
        date_uploaded: moment(date_uploaded).format("M-D-YYYY hA"),
        uploaded_by,
        files: files.length,
        description,
      })
    ) || [];

  const columns: TableColumnsType<objType> = [
    {
      key: "title",
      dataIndex: "title",
      title: () => <p className="font-sans text-zinc-700">Documents</p>,
      render: (title) => (
        <div className=" flex items-center space-x-2">
          <FileTextFilled className=" text-[#cfd413] text-xl" />
          <Typography.Text className=" font-sans">{title}</Typography.Text>
        </div>
      ),
    },
    {
      key: "date_uploaded",
      dataIndex: "date_uploaded",
      title: () => <p className="font-sans text-zinc-700">Created Date</p>,
    },
    {
      key: "uploaded_by",
      dataIndex: "uploaded_by",
      title: () => <p className="font-sans text-zinc-700">Created By</p>,
    },
    {
      key: "files",
      dataIndex: "files",
      title: () => <p className="font-sans text-zinc-700">Files</p>,
      render: (file: number) => (
        <Typography.Text className=" font-sans">
          {file > 1 ? file + " files" : file + " file"}
        </Typography.Text>
      ),
    },
    {
      key: "description",
      dataIndex: "description",
      title: () => <p className="font-sans text-zinc-700">Description</p>,
    },
    {
      title: "",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <div className=" flex justify-center">
          {/* <GoKebabHorizontal className=" text-2xl" /> */}
          <FileModal file_id={id} />
        </div>
      ),
    },
  ];

  return (
    <>
      {documentFromApi.isLoading && <LoadingPage />}
      {documentFromApi.isError && <ErrorPage />}
      {documentFromApi.data && (
        <>
          <Header>
            <div className=" flex items-center space-x-5">
              <Header.Title title="Documents" />
              <Header.Image src="../images/DocumentsImg.svg" />
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
                <AddNewDocument />
              </div>
              <Table
                style={{ borderBlockColor: "#d4d4d8" }}
                bordered
                rowKey="id"
                pagination={false}
                columns={columns}
                dataSource={dataTable}
                rowClassName=" font-sans text-neutral-600"
              />
              <Pagination
                className=" flex justify-end"
                current={page}
                onChange={onChangePage}
                total={documentFromApi.data?.count}
                defaultPageSize={pageSize}
              />
            </div>
          </CustomContainer>
        </>
      )}
    </>
  );
};

export default Documents;
