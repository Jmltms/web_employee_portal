import React from "react";
import { EditFilled, ProfileOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Space,
  Typography,
} from "antd";

interface EmployeeInformationApi {
  key: string;
  label: string;
  value?: string;
  description?: string[];
}

// text-[#8F00A8FF]
const ViewprofileEmployeeInformation = () => {
  const { Text, Paragraph } = Typography;

  // expected response from api
  //   {
  //     id: 1,
  //     label: Employee Id,
  //     vaue: 101
  //   }

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

  const addressInformations: EmployeeInformationApi[] = [
    {
      key: "1",
      label: "Region",
      value: "Calabarzon",
    },
    {
      key: "2",
      label: "Provice",
      value: "Cavite",
    },
    {
      key: "3",
      label: "Municipality/City",
      value: "Dasmarinas City",
    },
    {
      key: "4",
      label: "Street Information",
      value: "Purok 2",
    },
  ];

  const educationInformations: EmployeeInformationApi[] = [
    {
      key: "1",
      label: "Primary",
      description: ["Kabanding Elementary School", "09-10-1990"],
    },
    {
      key: "2",
      label: "Secondary",
      description: ["Kabakalan National HighSchool", "09-10-1950"],
    },
    {
      key: "1",
      label: "Tertiary",
      description: ["Lolo State University", "09-10-1980"],
    },
  ];

  const contactInformations: EmployeeInformationApi[] = [
    {
      key: "1",
      label: "Name",
      value: "Khamot Sing-it",
    },
    {
      key: "2",
      label: "Number",
      value: "09147264523",
    },
    {
      key: "3",
      label: "Relationship",
      value: "Mother",
    },
  ];

  const governmentIdInformations: EmployeeInformationApi[] = [
    {
      key: "1",
      label: "SSS No.",
      value: "1233-1232-12",
    },
    {
      key: "2",
      label: "Pagibig HDMF No.",
      value: "3435-234-234",
    },
    {
      key: "3",
      label: "Philhealth No.",
      value: "12-1233-1232",
    },
    {
      key: "4",
      label: "Tin No.",
      value: "02349-234-34",
    },
  ];

  // function for rendering the description labels and value
  const returnEmployeeInformation = (
    arr: EmployeeInformationApi[]
  ): DescriptionsProps["items"] => {
    return arr.map((entry) => ({
      key: entry.key,
      label: (
        <Paragraph className=" font-sans text-neutral-500">
          {entry.label}
        </Paragraph>
      ),
      children: entry.value ? (
        <Paragraph className=" font-sans text-neutral-500">
          {entry.value}
        </Paragraph>
      ) : (
        <div>
          {entry.description && entry.description.length > 1 ? (
            <>
              <Text className="font-sans">{entry.description[0]}</Text>
              <Paragraph className="font-sans">
                {entry.description[1]}
              </Paragraph>
            </>
          ) : (
            ""
          )}
        </div>
      ),
    }));
  };

  const personalInformation = returnEmployeeInformation(personalInformations);
  const addressInformation = returnEmployeeInformation(addressInformations);
  const educationInformation = returnEmployeeInformation(educationInformations);
  const contactInformation = returnEmployeeInformation(contactInformations);
  const governmentIdInformation = returnEmployeeInformation(
    governmentIdInformations
  );

  return (
    <>
      <Card
        title={
          <Space direction="horizontal" className="text-xl space-x-3 text">
            <ProfileOutlined className="text-[#0056D2] text-2xl" />
            <Text className="font-sans text-xl text-neutral-600">
              General Information
            </Text>
          </Space>
        }
        className=" mt-10"
      >
        <Space direction="vertical" className=" space-y-3">
          <Descriptions
            title={
              <p className="font-sans text-lg text-[#8F00A8FF] font-normal">
                Personal Information
              </p>
            }
            extra={
              <Button
                type="text"
                color="green"
                icon={<EditFilled className="text-[#0056D2]" />}
                className="text-[#0056D2]"
              >
                Edit
              </Button>
            }
            items={personalInformation}
            column={2}
            className=" border-b border-neutral-300 pb-5"
          />
          <Descriptions
            title={
              <p className="font-sans text-lg text-[#8F00A8FF] font-normal">
                Address Information
              </p>
            }
            extra={
              <Button
                type="text"
                color="green"
                icon={<EditFilled className="text-[#0056D2]" />}
                className="text-[#0056D2]"
              >
                Edit
              </Button>
            }
            items={addressInformation}
            column={2}
            className=" border-b border-neutral-300 pb-5"
          />
          <Descriptions
            title={
              <p className="font-sans text-lg text-[#8F00A8FF] font-normal">
                Education
              </p>
            }
            extra={
              <Button
                type="text"
                color="green"
                icon={<EditFilled className="text-[#0056D2]" />}
                className="text-[#0056D2]"
              >
                Edit
              </Button>
            }
            items={educationInformation}
            column={2}
            className=" border-b border-neutral-300 pb-5"
          />
          <Descriptions
            title={
              <p className="font-sans text-lg text-[#8F00A8FF] font-normal">
                Contact Person In Case Of Emergency
              </p>
            }
            extra={
              <Button
                type="text"
                color="green"
                icon={<EditFilled className="text-[#0056D2]" />}
                className="text-[#0056D2]"
              >
                Edit
              </Button>
            }
            items={contactInformation}
            column={2}
            className=" border-b border-neutral-300 pb-5"
          />
          <Descriptions
            title={
              <p className="font-sans text-lg text-[#8F00A8FF] font-normal">
                Government Id Numbers
              </p>
            }
            extra={
              <Button
                type="text"
                color="green"
                icon={<EditFilled className="text-[#0056D2]" />}
                className="text-[#0056D2]"
              >
                Edit
              </Button>
            }
            items={governmentIdInformation}
            column={2}
            className=" border-b border-neutral-300 pb-5"
          />
        </Space>
      </Card>
    </>
  );
};

export default ViewprofileEmployeeInformation;
