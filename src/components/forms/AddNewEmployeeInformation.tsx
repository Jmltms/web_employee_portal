import {
  Input,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  Typography,
} from "antd";
import { useState } from "react";

type OptionsType = {
  value: number;
  label: string;
};

type InputArr = {
  id: number;
  label: string;
  options: OptionsType[];
  placeholder: string;
};

const AddNewEmployeeInformation = () => {
  const [employementStatus, setEmploymentStatus] = useState(0);
  const { Text } = Typography;

  const SelectInputArr: InputArr[] = [
    {
      id: 1,
      options: [
        { value: 1, label: "Probationary" },
        { value: 2, label: "Regular" },
        { value: 3, label: "Project Based" },
        { value: 4, label: "Inactive" },
      ],
      label: "Employment Status",
      placeholder: "Select Employement Option",
    },
    {
      id: 2,
      options: [
        { value: 1, label: "Management" },
        { value: 2, label: "Team Member" },
      ],
      label: "Level",
      placeholder: "Select Level",
    },
    {
      id: 3,
      options: [
        { value: 1, label: "Jr Programmer" },
        { value: 2, label: "Sr. Programmer" },
      ],
      label: "Position",

      placeholder: "Select Employee Position",
    },
    {
      id: 4,
      options: [
        { value: 1, label: "CI" },
        { value: 2, label: "IT" },
      ],
      label: "Department",
      placeholder: "Select Department",
    },
    {
      id: 5,
      options: [
        { value: 1, label: "Hybrid" },
        { value: 2, label: "Onsite" },
        { value: 3, label: "Work From Home" },
      ],
      label: "Work Arrangement",
      placeholder: "Choose Work Arrangement",
    },
  ];

  // handle change the radio input
  const handleRadioChange = (e: RadioChangeEvent) => {
    setEmploymentStatus(e.target.value);
  };

  return (
    <>
      <Space className="block mt-10 mb-8 space-y-5 mx-16">
        <Radio.Group
          onChange={handleRadioChange}
          value={employementStatus}
          className=" flex justify-center items-center space-x-28 py-5"
        >
          <Radio className=" font-sans" value={1}>
            Full-Time
          </Radio>
          <Radio className=" font-sans" value={2}>
            Part-Time
          </Radio>
          <Radio className=" font-sans" value={3}>
            Project-Based
          </Radio>
          <Radio className=" font-sans" value={4}>
            Contractual
          </Radio>
        </Radio.Group>
        <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
          Employment Details
        </Text>
        <Space className=" grid grid-flow-row grid-cols-3 gap-10 pb-5">
          <div className="flex flex-col">
            <Text className="font-sans">Employee ID</Text>
            <Input placeholder="Ex. 123" className="custom-style-input mt-2" />
          </div>
          {SelectInputArr.map((entry) => {
            return (
              <div className="flex flex-col" key={entry.id}>
                <Text className="font-sans">{entry.label}</Text>
                <Select
                  className=" font-sans text-sm mt-2"
                  placeholder={entry.placeholder}
                  options={entry.options}
                />
              </div>
            );
          })}
          <div className="flex flex-col">
            <Text className="font-sans">Manager</Text>
            <Input
              placeholder="Employee Manager"
              className="custom-style-input mt-2"
            />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Supervisor</Text>
            <Input
              placeholder="Employee Supervisor"
              className="custom-style-input mt-2"
            />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Date Hired</Text>
            <Input type="date" className="custom-style-input mt-2" />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Contract Start Date</Text>
            <Input type="date" className="custom-style-input mt-2" />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Contract End Date</Text>
            <Input type="date" className="custom-style-input mt-2" />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Regularization</Text>
            <Input type="date" className="custom-style-input mt-2" />
          </div>
        </Space>
        <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
          Salary Details
        </Text>
        <Space className=" grid grid-flow-row grid-cols-3 gap-10">
          <div className="flex flex-col">
            <Text className="font-sans">Basic Salary</Text>
            <Input className="custom-style-input mt-2" />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Allowance</Text>
            <Input className="custom-style-input mt-2" />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Total Salary</Text>
            <Input type="date" className="custom-style-input mt-2" />
          </div>
        </Space>
      </Space>
    </>
  );
};

export default AddNewEmployeeInformation;
