import {
  Input,
  Pagination,
  Popover,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import { BsSearch } from "react-icons/bs";
import "../../App.css";
import { FilterOutlined } from "@ant-design/icons";
import EmployeeMngmntImport from "../reuseables/EmployeeMngmntImport";
import EmployeeMngmentExport from "../reuseables/EmployeeMngmentExport";
import EmployeeMngmentCard from "../reuseables/EmployeeMngmentCard";

interface CardInfo {
  id: number;
  position: string;
  name: string;
  department: string;
  status: number;
}

function Directory() {
  const { Text, Paragraph } = Typography;
  const card: CardInfo[] = [
    {
      id: 1,
      position: "CEO",
      name: "Whitney Francis",
      department: "Heads",
      status: 1,
    },
    {
      id: 2,
      position: "COO",
      name: "John Doe",
      department: "Heads",
      status: 1,
    },
    {
      id: 3,
      position: "Head Of HR",
      name: "Anne Go",
      department: "HR",
      status: 1,
    },
    {
      id: 4,
      position: "Head of Finance",
      name: "Sherry Sy",
      department: "Finance",
      status: 1,
    },
    {
      id: 5,
      position: "Head of Director",
      name: "Albert Go",
      department: "Director",
      status: 1,
    },
    {
      id: 6,
      position: "Head of Sales",
      name: "Abet Lou",
      department: "Sales",
      status: 3,
    },
    {
      id: 7,
      position: "Head of Products",
      name: "Kevin Cruz",
      department: "Products",
      status: 1,
    },
    {
      id: 8,
      position: "Content Marketing",
      name: "Pokoy Kie",
      department: "Marketing",
      status: 1,
    },
    {
      id: 9,
      position: "Marketing Executive",
      name: "Alben Burja",
      department: "Marketing Executive",
      status: 3,
    },
    {
      id: 10,
      position: "Social Marketing",
      name: "Kokoy Bugoy",
      department: "Social Marketing",
      status: 2,
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10 mb-12 space-y-3">
        <Text className="font-sans text-3xl font-bold">Team Members</Text>
        <Paragraph className=" font-sans text-lg text-neutral-500">
          Hi, we are the Management Team! Here to drive innovation, growth, and
          success every step of the way.
        </Paragraph>
      </div>
      <div className=" flex flex-col my-5 space-y-6">
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
          </div>
        </div>
        <div className="grid grid-cols-4 grid-flow-row gap-7">
          {card.map(({ position, name, status, department }, index) => (
            <EmployeeMngmentCard key={index}>
              <EmployeeMngmentCard.Profile source="../images/prof.jpg" />
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
        <Pagination
          className=" flex justify-end"
          current={1}
          onChange={() => {}}
          defaultPageSize={10}
        />
      </div>
    </>
  );
}

export default Directory;
