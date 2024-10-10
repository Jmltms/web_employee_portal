import {
  FileTextOutlined,
  FolderFilled,
  FolderOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  ConfigProvider,
  Descriptions,
  DescriptionsProps,
  Space,
  Typography,
} from "antd";
import React from "react";

const ViewProfileDocuments = () => {
  const { Text, Paragraph } = Typography;

  interface EmployeeInformationApi {
    key: string;
    label: string;
  }

  const document: EmployeeInformationApi[] = [
    {
      key: "1",
      label: "Government Files",
    },
    {
      key: "2",
      label: "Contract",
    },
    {
      key: "3",
      label: "Attachment1",
    },
  ];

  // function for rendering the description labels and value
  const returnEmployeeInformation = (
    arr: EmployeeInformationApi[]
  ): DescriptionsProps["items"] => {
    return arr.map((entry) => ({
      key: entry.key,
      children: (
        <div className=" flex items-center space-x-3  justify-center ">
          <FolderFilled className=" text-[#f6c445] text-lg" />
          <p className=" font-sans text-neutral-500">{entry.label}</p>
        </div>
      ),
    }));
  };

  const documents = returnEmployeeInformation(document);

  return (
    <>
      <Card
        title={
          <div className=" flex justify-between items-center">
            <Space direction="horizontal" className="text-xl space-x-3 text">
              <FileTextOutlined className="text-[#0056D2] text-2xl" />
              <Text className="font-sans text-xl text-neutral-600">
                Documents
              </Text>
            </Space>
            <Space>
              <ConfigProvider theme={{ token: { colorPrimary: "#ea580c" } }}>
                <Button
                  icon={<UploadOutlined />}
                  className=" font-sans"
                  type="primary"
                >
                  Upload
                </Button>
              </ConfigProvider>
            </Space>
          </div>
        }
        className=" mt-10"
      >
        <Descriptions
          items={documents}
          column={3}
          className=" border-b border-neutral-300 pb-5"
        />
      </Card>
    </>
  );
};

export default ViewProfileDocuments;
