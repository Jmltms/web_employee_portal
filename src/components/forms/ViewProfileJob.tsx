import { EditFilled, ProfileFilled, ShoppingOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Descriptions,
  DescriptionsProps,
  Space,
  Typography,
} from "antd";
import React from "react";

const ViewProfileJob = () => {
  const { Text, Paragraph } = Typography;

  interface EmployeeInformationApi {
    key: string;
    label: string;
    value?: string;
    description?: string[];
  }

  const jobInformation: EmployeeInformationApi[] = [
    {
      key: "1",
      label: "Company",
      value: "OODC",
    },
    {
      key: "2",
      label: "Date Hired",
      value: "October 12, 2024",
    },
    {
      key: "3",
      label: "Position",
      value: "HR Specialist",
    },
    {
      key: "4",
      label: "Contract End Date",
      value: "October 12, 2024",
    },
    {
      key: "5",
      label: "Department",
      value: "HR",
    },
    {
      key: "6",
      label: "Line Manager",
      value: "Sofia Perez",
    },
    {
      key: "7",
      label: "Employment Status",
      value: "Regular",
    },
    {
      key: "8",
      label: "Level",
      value: "Team Member",
    },
    {
      key: "9",
      label: "Work Arrangement",
      value: "Hybrid",
    },
  ];

  const benefitsInformation: EmployeeInformationApi[] = [
    {
      key: "1",
      label: "Health Card",
      value: "Php 60,000",
    },
    {
      key: "2",
      label: "Rent Allowance",
      value: "Php 60,000",
    },
    {
      key: "3",
      label: "Health Card No.",
      value: "109-238-781",
    },
    {
      key: "4",
      label: "Telecommunication Allowance",
      value: "Php 20,000",
    },
    {
      key: "5",
      label: "Transportation Allowance",
      value: "Php 60,000",
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

  const jobInformations = returnEmployeeInformation(jobInformation);
  const benefitsInformations = returnEmployeeInformation(benefitsInformation);

  return (
    <>
      <Card
        title={
          <Space direction="horizontal" className="text-xl space-x-3 text">
            <ShoppingOutlined className="text-[#0056D2] text-2xl" />
            <Text className="font-sans text-xl text-neutral-600">Jobs</Text>
          </Space>
        }
        className=" mt-10"
      >
        <Space direction="vertical" className=" space-y-3">
          <Descriptions
            title={
              <p className="font-sans text-lg text-[#8F00A8FF] font-normal">
                Employment Information
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
            items={jobInformations}
            column={2}
            className=" border-b border-neutral-300 pb-5"
          />
          <Descriptions
            title={
              <p className="font-sans text-lg text-[#8F00A8FF] font-normal">
                Benefits
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
            items={benefitsInformations}
            column={2}
            className=" border-b border-neutral-300 pb-5"
          />
        </Space>
      </Card>
    </>
  );
};

export default ViewProfileJob;
