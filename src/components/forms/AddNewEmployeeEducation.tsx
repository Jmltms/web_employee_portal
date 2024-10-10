import { InboxOutlined } from "@ant-design/icons";
import { Input, Select, Space, Typography, Upload, UploadProps } from "antd";
import React from "react";

const AddNewEmployeeEducation = () => {
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
  return (
    <>
      <Space className="block mt-10 mb-8 space-y-5 mx-16">
        <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
          Educational Attainment
        </Text>
        <Space className="block mt-10 mb-8 space-y-5">
          <Space className=" grid grid-flow-row grid-cols-3 gap-16">
            <div className="flex flex-col">
              <Text className="font-sans">Institution Name</Text>
              <Input name="age" className="custom-style-input mt-2" />
            </div>
            <div className="flex flex-col">
              <Text className="font-sans">Field of Study</Text>
              <Input name="age" className="custom-style-input mt-2" />
            </div>
            <div className="flex flex-col">
              <Text className="font-sans">Date Graduated</Text>
              <Input
                name="age"
                type="date"
                className="custom-style-input mt-2"
              />
            </div>
          </Space>
          <Text className="font-sans">Institution Address</Text>
          <Input.TextArea
            rows={4}
            placeholder="Enter your location"
            className="custom-style-input"
          />
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

export default AddNewEmployeeEducation;
