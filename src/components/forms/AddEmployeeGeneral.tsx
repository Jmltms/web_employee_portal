import {
  PlusCircleOutlined,
  UndoOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Checkbox,
  Input,
  Radio,
  Select,
  Space,
  Typography,
  Upload,
} from "antd";
import { useState } from "react";
import { InputLabelTypes } from "../Types";

type ChildrenDataInput = {
  name: string;
  age: string;
};

const AddEmployeeGeneral = () => {
  const { Text, Paragraph } = Typography;
  // const [input, setInput] = useState({
  //   firstName: "",
  //   lastName: "",
  //   employeeId: "",
  //   phoneNumber: "",
  // });
  const [isTheSame, setIsTheSame] = useState(true);
  const [childrenInput, setChildrenInput] = useState<ChildrenDataInput[]>([]);

  const InputLabel: InputLabelTypes[] = [
    {
      id: 1,
      name: "First Name",
      value: "",
    },
    {
      id: 2,
      name: "Middle Name",
      value: "",
    },
    {
      id: 3,
      name: "Last Name",
      value: "",
    },
    {
      id: 4,
      name: "Employee Id",
      value: "",
    },
    {
      id: 5,
      name: "Phone Number",
      value: "",
    },
    {
      id: 6,
      name: "Email",
      value: "",
    },
    {
      id: 7,
      name: "Address Line 1",
      value: "",
    },
    {
      id: 8,
      name: "Address Line 2",
      value: "",
    },

    {
      id: 9,
      name: "Name",
      value: "",
    },
    {
      id: 10,
      name: "Relationship",
      value: "",
    },
    {
      id: 11,
      name: "Contact Number",
      value: "",
    },
  ];

  const permanentAddressDropdown = [
    {
      id: 1,
      value: "",
      label: "Region",
      options: [
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
        { value: "disabled", label: "Disabled", disabled: true },
      ],
    },
    {
      id: 2,
      value: "",
      label: "Province",
      options: [],
    },
    {
      id: 3,
      value: "",
      label: "Municipality",
      options: [],
    },
    {
      id: 4,
      value: "",
      label: "Barangay",
      options: [],
    },
  ];

  const currentAddressDropdown = [
    {
      id: 1,
      value: "",
      label: "Region",
      options: [
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
        { value: "disabled", label: "Disabled", disabled: true },
      ],
    },
    {
      id: 2,
      value: "",
      label: "Province",
      options: [],
    },
    {
      id: 3,
      value: "",
      label: "Municipality",
      options: [],
    },
    {
      id: 4,
      value: "",
      label: "Barangay",
      options: [],
    },
  ];

  const arrayOne = InputLabel.filter((_, index) => index <= 5);
  const arrayThree = InputLabel.filter((_, index) => index > 7);
  const addRow = () => {
    setChildrenInput([...childrenInput, { name: "", age: "" }]);
  };
  return (
    <>
      <Space direction="vertical" className="block mt-10 mb-8 space-y-5 mx-16">
        <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
          Personal Information
        </Text>
        <div className="grid grid-flow-row grid-cols-3 gap-8 mt-5">
          <div className="flex flex-col space-y-3">
            <Text className=" font-sans">Gender</Text>
            <Radio.Group>
              <Radio value={1} className=" font-sans">
                Male
              </Radio>
              <Radio value={2} className=" font-sans">
                Female
              </Radio>
            </Radio.Group>
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Age</Text>
            <Input
              name="age"
              style={{ width: 200 }}
              className="custom-style-input mt-2"
            />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Birthday</Text>
            <Input
              placeholder="email@sample.com"
              name="birthday"
              type="date"
              style={{ width: 200 }}
              className="custom-style-input mt-2"
            />
          </div>
          {arrayOne.map((entry) => (
            <div key={entry.id}>
              <Text className="font-sans">{entry.name}</Text>
              <Input
                placeholder="email@sample.com"
                name={entry.name}
                className="custom-style-input mt-2"
              />
            </div>
          ))}
          <div className="flex flex-col">
            <Text className="font-sans">Blood Type</Text>
            <Select
              placeholder=" Select Civil Status"
              style={{ width: 230 }}
              className=" font-sans text-sm mt-2"
              options={[
                { value: 1, label: "Single" },
                { value: 2, label: "Married" },
              ]}
            />
          </div>
          <div className="flex flex-col">
            <Text className="font-sans">Civil Status</Text>
            <Select
              placeholder=" Select Civil Status"
              style={{ width: 230 }}
              className=" font-sans text-sm mt-2"
              options={[
                { value: 1, label: "Single" },
                { value: 2, label: "Married" },
              ]}
            />
          </div>
          <div>
            <Text className="font-sans">Id Image</Text>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
            >
              <UploadOutlined className=" text-xl" />
            </Upload>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Text className="font-sans text-neutral-500">
            Do you have children?
          </Text>
          <PlusCircleOutlined
            onClick={addRow}
            className=" text-xl cursor-pointer text-[#68b046] hover:text-[#46842a]"
          />
          <UndoOutlined
            onClick={() => setChildrenInput([])}
            className=" text-xl cursor-pointer text-neutral-500 hover:text-neutral-800"
          />
        </div>
        {childrenInput.map((entry, index) => (
          <div className=" grid grid-cols-2 gap-5" key={index}>
            <div>
              <Text className="font-sans">Full name</Text>
              <Input name={entry.name} className="custom-style-input mt-2" />
            </div>
            <div style={{ width: 230 }}>
              <Text className="font-sans">Age</Text>
              <Input
                name={entry.age}
                className="custom-style-input mt-2 pr-28"
              />
            </div>
          </div>
        ))}
        <Space className="block mt-10 mb-5 space-y-5">
          <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
            Contact Person In Case Of Emergency
          </Text>
          <div className="grid grid-flow-row grid-cols-3 gap-8 mt-8">
            {arrayThree.map((entry) => (
              <div key={entry.id}>
                <Text className="font-sans">{entry.name}</Text>
                <Input name={entry.name} className="custom-style-input mt-2" />
              </div>
            ))}
          </div>
        </Space>
        <Space className="block mt-10 mb-5 space-y-5">
          <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
            Permanent Address
          </Text>
          <div className="grid grid-cols-3 grid-flow-row gap-5 items-center">
            {permanentAddressDropdown.map(({ options, label }, index) => {
              return (
                <Space direction="vertical" key={index}>
                  <Text className=" font-sans">{label}</Text>
                  <Select
                    defaultValue="lucy"
                    className=" w-full"
                    options={options}
                  />
                </Space>
              );
            })}
            <div className="mb-2">
              <Text className="font-sans">Nationality</Text>
              <Input
                placeholder="email@sample.com"
                name="nationality"
                className="custom-style-input mt-2"
              />
            </div>
          </div>
          <Space className="space-x-1 mt-5">
            <Text className="font-sans text-2xl font-bold text-[#0056D2]">
              Current Address
            </Text>
            <div className=" space-x-3">
              <Text className="font-sans text-xs text-neutral-500">
                Same as Permanent Address
              </Text>
              <Checkbox
                onChange={() => setIsTheSame(!isTheSame)}
                defaultChecked={isTheSame}
              />
            </div>
          </Space>
          {!isTheSame && (
            <div className="grid grid-cols-3 grid-flow-row gap-5 items-center">
              {currentAddressDropdown.map(({ options, label }, index) => {
                return (
                  <Space direction="vertical" key={index}>
                    <Text className=" font-sans">{label}</Text>
                    <Select
                      defaultValue="lucy"
                      className=" w-full"
                      options={options}
                    />
                  </Space>
                );
              })}
              <div className="mb-2">
                <Text className="font-sans">Nationality</Text>
                <Input
                  placeholder="email@sample.com"
                  name="nationality"
                  className="custom-style-input mt-2"
                />
              </div>
            </div>
          )}
        </Space>
      </Space>
    </>
  );
};

export default AddEmployeeGeneral;
