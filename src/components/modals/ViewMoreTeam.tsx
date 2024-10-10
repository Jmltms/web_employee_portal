import {
  DownCircleFilled,
  LinkedinFilled,
  MailFilled,
} from "@ant-design/icons";
import { Modal, Popover, Space, Typography } from "antd";
import React, { useState } from "react";
import { HiChevronDoubleDown } from "react-icons/hi";

interface ViewMoreTeamProps {
  department: string;
  id: number;
}

interface CardInfo {
  id: number;
  position: string;
  name: string;
  department: string;
}

const ViewMoreTeam = ({ department, id }: ViewMoreTeamProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const card: CardInfo[] = [
    {
      id: 1,
      position: "CEO",
      name: "Whitney Francis",
      department: "",
    },
    {
      id: 2,
      position: "COO",
      name: "John Doe",
      department: "",
    },
    {
      id: 3,
      position: "Head Of HR",
      name: "Anne Go",
      department: "HR",
    },
    {
      id: 4,
      position: "Head of Finance",
      name: "Sherry Sy",
      department: "Finance",
    },
    {
      id: 5,
      position: "Head of Director",
      name: "Albert Go",
      department: "Director",
    },
    {
      id: 6,
      position: "Head of Sales",
      name: "Abet Lou",
      department: "Sales",
    },
    {
      id: 7,
      position: "Head of Products",
      name: "Kevin Cruz",
      department: "Products",
    },
    {
      id: 8,
      position: "Content Marketing",
      name: "Pokoy Kie",
      department: "Marketing",
    },
  ];

  const { Text } = Typography;
  return (
    <>
      <HiChevronDoubleDown
        onClick={showModal}
        className=" text-[#0056D2] hover:text-[#0058d2c8] text-3xl cursor-pointer"
      />
      <Modal
        title={
          <Text className=" font-sans text-2xl">{department} Department</Text>
        }
        width={700}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        cancelText="Close"
      >
        <Space className="grid grid-cols-4 grid-flow-row items-center mt-4">
          {card.map(({ id, position, name }) => (
            <Space
              className="flex flex-col items-center justify-center my-4"
              key={id}
            >
              <img
                src="../images/prof.jpg"
                alt="prof"
                className="aspect-square object-cover shadow-xl shadow-blue-300 w-28 rounded-full"
              />
              <div className="flex flex-col justify-center items-center">
                <p className=" font-sans text-base text-[#0056D2] font-bold leading-tight mt-8">
                  {name}
                </p>
                <p className=" font-sans text-xs leading-tight font-medium text-neutral-600 mt-1">
                  {position}
                </p>
              </div>
            </Space>
          ))}
        </Space>
      </Modal>
    </>
  );
};

export default ViewMoreTeam;
