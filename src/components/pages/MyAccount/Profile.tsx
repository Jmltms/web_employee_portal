import { Space, Tabs, Typography } from "antd";
import React from "react";
import CustomContainer from "../../reuseables/CustomContainer";
import Header from "../../reuseables/Header";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface EmployeeInformationApi {
  key: string;
  label: string;
  value?: string;
  description?: string[];
}

const Profile = () => {
  const { Text } = Typography;

  // get user information
  const userInfoFromStorage = localStorage.getItem("user_info") as string;
  const parseUserInfo = JSON.parse(userInfoFromStorage);

  // get user id
  const employeeIdFromStorage = localStorage.getItem(
    "employee_detail"
  ) as string;
  const employeeIdInfo = JSON.parse(employeeIdFromStorage);

  const personalInformations: EmployeeInformationApi[] = [
    {
      key: "1",
      label: " Employee Id",
      value: "Zhou Maomao",
    },
    {
      key: "2",
      label: "Birthday",
      value: "1810000000",
    },
    {
      key: "3",
      label: "Gender",
      value: "Hangzhou, Zhejiang",
    },
    {
      key: "4",
      label: "Age",
      value: "empty",
    },
    {
      key: "5",
      label: "Phone",
      value: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
    },
    {
      key: "6",
      label: "Marital Status",
      value: "empty",
    },
    {
      key: "7",
      label: "Email",
      value: "empty",
    },
    {
      key: "8",
      label: "Nationality",
      value: "empty",
    },
  ];

  return (
    <>
      <Header>
        <div className=" flex items-center space-x-5">
          <Header.Title title="My Profile" />
          <Header.Image src="../../images/MyAccount.svg" />
        </div>
      </Header>
      <CustomContainer>
        <div className="grid grid-cols-3 grid-flow-row mt-5">
          <div className=" col-span-1">
            <Link to="/index/employee-management">
              <LeftOutlined className=" text-2xl text-[#0056D2]" />
            </Link>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center space-y-2">
            <img
              src="../../images/prof.jpg"
              alt="img"
              className="aspect-square object-fill rounded-full w-28"
            />
            <div className=" flex flex-col items-center justify-center">
              <Text className=" font-sans text-2xl font-bold">
                {parseUserInfo.first_name + " " + parseUserInfo.last_name}
              </Text>
              <p className="font-sans text-sm text-neutral-700">
                Employee ID:
                {employeeIdInfo.employee_id}
              </p>
              <p className="font-sans text-xs mt-1 text-neutral-500">
                {parseUserInfo.email}
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </CustomContainer>
    </>
  );
};

export default Profile;
