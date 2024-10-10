import { InboxOutlined } from "@ant-design/icons";
import { Input, Space, Typography, Upload, UploadProps } from "antd";
import React, { useState } from "react";
import { InputLabelTypes } from "../Types";

const AddNewEmployeeGovernment = () => {
  const { Text } = Typography;

  const props: UploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: () => false,
    showUploadList: true,
    // onChange(info) {
    //   setFile(info.fileList);
    // },
    // onDrop(e) {
    //   setFile([e.dataTransfer.files]);
    // },
  };
  const inputLabel: InputLabelTypes[] = [
    {
      id: 1,
      name: "SSS",
      value: "",
    },
    {
      id: 2,
      name: "Philhealth",
      value: "",
    },
    {
      id: 1,
      name: "TIN",
      value: "",
    },
    {
      id: 1,
      name: "Pagibig",
      value: "",
    },
  ];

  return (
    <>
      <Space className="block mt-10 mb-8 space-y-5 mx-16">
        <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
          Employee Government ID`s
        </Text>
        <Space className="block mt-10 mb-8 space-y-5 ">
          <Space className=" grid grid-flow-row grid-cols-2 gap-16">
            {inputLabel.map((entry, index) => (
              <div className="flex flex-col" key={index}>
                <Text className="font-sans">{entry.name}</Text>
                <Input name={entry.name} className="custom-style-input mt-2" />
              </div>
            ))}
          </Space>
        </Space>

        <div>
          <Upload.Dragger {...props} listType="picture">
            <InboxOutlined className=" text-6xl text-[#cfd413]" />
            <Typography.Text className="block text-base font-sans">
              Click or drag file to this area to upload
            </Typography.Text>
            <Typography.Text className="block text-sm text-slate-500 font-sans">
              Upload your file by clicking here or dragging it into this area.
            </Typography.Text>
          </Upload.Dragger>
        </div>
      </Space>
    </>
  );
};

export default AddNewEmployeeGovernment;
