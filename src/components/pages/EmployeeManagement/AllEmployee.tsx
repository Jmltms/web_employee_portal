import { useState } from "react";

import { Input, Popover, Select, Typography } from "antd";
import { BsSearch } from "react-icons/bs";
import {
  BlockOutlined,
  FilterOutlined,
  InsertRowBelowOutlined,
} from "@ant-design/icons";
import EmployeeManagementTableView from "../../table/EmployeeManagementTableView";
import EmployeeMngmntImport from "../../reuseables/EmployeeMngmntImport";
import EmployeeMngmentExport from "../../reuseables/EmployeeMngmentExport";
import EmployeeMngmentCard from "../../reuseables/EmployeeMngmentCard";

// when theres a data from api the dev can replace it on the component where you need to destruct the obj
export interface ObjType {
  profile: string;
  id: number;
  employee_id: string;
  name: string;
  position: string;
  department: string;
  status: number;
}

const AllEmployee = () => {
  const { Text } = Typography;
  const [toggleView, setToggleView] = useState("ListType");

  const data: ObjType[] = [
    {
      id: 1,
      profile: "../images/prof.jpg",
      employee_id: "123",
      name: "Reyan Dela Cruz",
      position: "Lead Programmer",
      department: "CI",
      status: 1,
    },
    {
      id: 2,
      profile: "../images/prof.jpg",
      employee_id: "246",
      name: "Jimuel Tomas",
      position: "Jr. Programmer",
      department: "CI",
      status: 2,
    },
    {
      id: 3,
      profile: "../images/prof.jpg",
      employee_id: "357",
      name: "Jao Bandin",
      position: "Jr. Programmer",
      department: "CI",
      status: 3,
    },
  ];

  //toggle view to card or list type
  const changeView = () => {
    toggleView === "ListType"
      ? setToggleView("CardType")
      : setToggleView("ListType");
  };

  return (
    <>
      <div className=" mt-10 space-y-5">
        <div className=" flex justify-between items-center mt-7 space-x-5 mr-4">
          <div className=" space-x-5 ">
            <Input
              placeholder="Search.."
              className="custom-style-input w-72 bgcy"
              suffix={<BsSearch />}
            />
            <Select
              defaultValue="All position"
              className=" font-sans w-40"
              options={[
                { value: "jack", label: "Jack" },
                { value: "All Office", label: "All Office", disabled: true },
              ]}
            />
            <Select
              defaultValue="All department"
              className=" font-sans w-40"
              options={[
                { value: "jack", label: "Jack" },
                { value: "All Office", label: "All Office", disabled: true },
              ]}
            />
            <Select
              defaultValue="All Status"
              className=" font-sans w-40"
              options={[
                { value: "jack", label: "Jack" },
                {
                  value: "All Status",
                  label: "All Status",
                  disabled: true,
                },
              ]}
            />
          </div>
          <div className=" flex items-center space-x-4">
            <EmployeeMngmntImport />
            <Popover content={<Text className=" font-sans">Clear filter</Text>}>
              <FilterOutlined className="text-base cursor-pointer text-[#0056d2] shadow hover:ring-1 hover:ring-[#0056d2] shadow-neutral-300 rounded-full p-2" />
            </Popover>
            <EmployeeMngmentExport />
            {toggleView === "CardType" && (
              <Popover content={<Text className=" font-sans">List view</Text>}>
                <InsertRowBelowOutlined
                  className="text-base cursor-pointer text-[#0056d2] shadow hover:ring-1 hover:ring-[#0056d2] shadow-neutral-300 rounded-full p-2"
                  onClick={changeView}
                />
              </Popover>
            )}
            {toggleView === "ListType" && (
              <Popover content={<Text className=" font-sans">Card view</Text>}>
                <BlockOutlined
                  className="text-base cursor-pointer text-[#0056d2] shadow hover:ring-1 hover:ring-[#0056d2] shadow-neutral-300 rounded-full p-2"
                  onClick={changeView}
                />
              </Popover>
            )}
          </div>
        </div>
        {toggleView === "ListType" && (
          <EmployeeManagementTableView dataTables={data} />
        )}
        {toggleView === "CardType" && (
          <div className="grid grid-flow-row grid-cols-4 mt-12 gap-10">
            {data.map(({ position, name, profile, department }, index) => (
              <EmployeeMngmentCard key={index}>
                <EmployeeMngmentCard.Profile source={profile} />
                <div className=" flex flex-col justify-center items-center">
                  <EmployeeMngmentCard.Name name={name} />
                  <EmployeeMngmentCard.Position position={position} />
                  <EmployeeMngmentCard.Department department={department} />
                </div>
                {EmployeeMngmentCard.Social && (
                  <EmployeeMngmentCard.Social viber="#" email="#" />
                )}
              </EmployeeMngmentCard>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllEmployee;
