import React from "react";
import CustomContainer from "../../reuseables/CustomContainer";
import Header from "../../reuseables/Header";
import { LeftOutlined, SignatureOutlined } from "@ant-design/icons";
import { Space, Switch, Tabs, Tag, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ViewprofileEmployeeInformation from "../../forms/ViewprofileEmployeeInformation";
import ViewProfileJob from "../../forms/ViewProfileJob";
import ViewProfileDocuments from "../../forms/ViewProfileDocuments";

// text-[#8F00A8FF]
const ViewProfile = () => {
  const location = useLocation();
  const { Text } = Typography;
  const { name } = location.state || {};

  // array for tab
  const tabs = [
    {
      key: "1",
      label: <p className=" font-sans">General Information</p>,
      children: (
        <div className=" mt-[-50px] pb-10">
          <ViewprofileEmployeeInformation />
        </div>
      ),
    },
    {
      key: "2",
      label: <p className=" font-sans">Job</p>,
      children: (
        <div className=" mt-[-50px] pb-10">
          <ViewProfileJob />
        </div>
      ),
    },
    {
      key: "3",
      label: <p className=" font-sans">Documents</p>,
      children: (
        <div className=" mt-[-50px]">
          <ViewProfileDocuments />
        </div>
      ),
    },
  ];

  return (
    <>
      <Header>
        <div className=" flex items-center space-x-5">
          <Header.Title title="Profile Details" />
          <Header.Image src="../images/Profile.svg" />
        </div>
      </Header>
      <CustomContainer>
        <Space className=" flex justify-between mr-8">
          <Space direction="horizontal" className="space-x-5 mt-5">
            <Link to="/index/employee-management">
              <LeftOutlined className=" text-2xl text-[#0056D2]" />
            </Link>
            <img
              src="../images/prof.jpg"
              alt="prof"
              className="aspect-square object-cover shadow-xl shadow-blue-300 w-24 rounded-full"
            />
            <Space direction="vertical">
              <div className=" flex items-center space-x-3">
                <Text className=" font-sans text-2xl font-bold">{name}</Text>
                <Tag color="green" style={{ backgroundColor: "white" }}>
                  Regular
                </Tag>
              </div>
              <div className=" flex items-center space-x-3">
                <SignatureOutlined className=" text-[#0056D2] text-base" />
                <p className=" font-sans text-sm text-neutral-600">
                  Jr. Programmer
                </p>
              </div>
            </Space>
          </Space>
          <Space direction="vertical" className="">
            <div className="flex items-center space-x-5">
              <Text className=" font-sans">Status</Text>
              <Switch defaultChecked />
            </div>
            <Tag color="green" style={{ backgroundColor: "white" }}>
              Active
            </Tag>
          </Space>
        </Space>
        <Tabs
          defaultActiveKey="1"
          tabPosition="right"
          style={{ height: 200 }}
          className=" mt-10"
          items={tabs}
        />
      </CustomContainer>
    </>
  );
};

export default ViewProfile;
