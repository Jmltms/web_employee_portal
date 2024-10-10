import React from "react";
import Header from "../reuseables/Header";
import CustomContainer from "../reuseables/CustomContainer";
import { TbHandClick } from "react-icons/tb";
import { Card, Typography } from "antd";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const { Paragraph } = Typography;

  const CardArr = [
    {
      id: 1,
      label: "Profile",
      link: "profile",
      content: ["Employee Information", "Email Address", "Mobile Numbers"],
    },
    {
      id: 2,
      label: "Privacy and Security",
      link: "",
      content: ["Password", "Log in Session"],
    },
    {
      id: 3,
      label: "System Preferences",
      link: "",
      content: ["Email Notification"],
    },
    {
      id: 4,
      label: "Billing  and Payment",
      link: "",
      content: ["Billing", "Invoice"],
    },
    {
      id: 5,
      label: "User Management",
      link: "",
      content: ["Roles", "Clients", "User", "History"],
    },
  ];
  return (
    <>
      <Header>
        <div className=" flex items-center space-x-5">
          <Header.Title title="My Account" />
          <Header.Image src="../images/MyAccount.svg" />
        </div>
      </Header>
      <CustomContainer>
        <div className="grid grid-cols-3 grid-flow-row mt-3 gap-5">
          {CardArr.map((entry, id) => (
            <Card
              key={id}
              hoverable
              title={
                <div className=" flex items-center space-x-3">
                  <Link
                    to={entry.link}
                    className="font-sans text-[#0056d2] text-lg"
                  >
                    {entry.label}
                  </Link>
                  <TbHandClick />
                </div>
              }
            >
              {entry.content.map((item, index) => (
                <Paragraph key={index} className=" font-sans">
                  {item}
                </Paragraph>
              ))}
            </Card>
          ))}
        </div>
      </CustomContainer>
    </>
  );
};

export default MyAccount;
