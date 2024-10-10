import React, { useState } from "react";
import { Modal, Space, Typography } from "antd";
import { GoKebabHorizontal } from "react-icons/go";
import { CopyFilled } from "@ant-design/icons";
import { useGetDocumentFilesQuery } from "../../store";
import moment from "moment";

interface fileModalProps {
  file_id: number;
}

interface fileType {
  id: number;
  ftp: string;
  date_uploaded: string;
}

function FileModal({ file_id }: fileModalProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const filesFromApi = useGetDocumentFilesQuery({ file_id });
  const apiDomain = process.env.REACT_APP_API_DOMAIN;

  console.log(filesFromApi);

  // function for opening modal
  const showModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <GoKebabHorizontal
        className=" text-2xl cursor-pointer text-orange-600 hover:text-orange-300"
        onClick={showModal}
      />
      <Modal
        title={
          <Typography.Paragraph className=" font-sans text-xl mx-1">
            Attached Files
          </Typography.Paragraph>
        }
        onCancel={showModal}
        open={isModalOpen}
        footer={null}
        cancelText="Close"
      >
        <Space className="block pb-5">
          {filesFromApi.data?.data.map((entry: fileType) => {
            const apiFileLink = apiDomain?.concat("", entry.ftp);
            return (
              <Space
                className="container pr-7 flex space-x-3 mt-5 border-b border-neutral-300 pb-2"
                key={entry.id}
              >
                <CopyFilled className=" text-2xl text-yellow-600" />
                <Space className=" block items-center">
                  <Space className=" block">
                    <Typography.Text className=" text-neutral-600 font-sans font-semibold">
                      {moment(entry.date_uploaded).format("M-D-YYYY hA")}
                    </Typography.Text>
                    <Typography.Link
                      className=" font-sans"
                      href={apiFileLink}
                      target="_blank"
                    >
                      {apiFileLink}
                    </Typography.Link>
                  </Space>
                </Space>
              </Space>
            );
          })}
        </Space>
      </Modal>
    </>
  );
}

export default FileModal;
