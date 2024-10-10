import { Input, Select, Space, Typography } from "antd";
import React from "react";

const AddNewEmployeeCompensation = () => {
  const { Text } = Typography;

  interface InputTypes {
    id: number;
    name: string;
    amount: string;
  }

  const leaveTypes: InputTypes[] = [
    {
      id: 2,
      name: "Transportation Allowance",
      amount: "",
    },
    {
      id: 3,
      name: "Rent Allowance",
      amount: "",
    },
    {
      id: 4,
      name: "Telecommunication",
      amount: "",
    },
  ];

  return (
    <>
      <Space className="block mt-10 mb-8 space-y-5 mx-16">
        <div className=" pb-3">
          <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
            Benefits
          </Text>
        </div>
        <div className=" flex flex-col">
          <Text className="font-sans">HMO</Text>
          <div className=" flex items-center space-x-10">
            <Input
              name="age"
              placeholder="Health Card Number"
              className="custom-style-input mt-2 w-full"
            />
            <Input
              name="age"
              placeholder="Maximum Benefit Limit"
              className="custom-style-input mt-2 w-full"
            />
          </div>
        </div>
        {leaveTypes.map((entry) => (
          <div className=" flex flex-col" key={entry.id}>
            <Text className="font-sans">{entry.name}</Text>
            <Space className="grid grid-cols-2 grid-flow-row gap-10">
              <Input
                name="age"
                placeholder="Amount"
                className="custom-style-input mt-2 w-full"
              />
              <Select
                placeholder="Availability"
                className="font-sans text-sm mt-2 w-full"
                options={[
                  { value: 1, label: "Month" },
                  { value: 2, label: "Year" },
                ]}
              />
            </Space>
          </div>
        ))}
      </Space>
    </>
  );
};

export default AddNewEmployeeCompensation;
