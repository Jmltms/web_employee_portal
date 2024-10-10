import { MailOutlined } from "@ant-design/icons";
import { Card, Tag, Typography } from "antd";
import React from "react";
import { FaViber } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ViewMoreTeam from "../modals/ViewMoreTeam";

interface NameProps {
  name: string;
}

interface ProfileProps {
  source: string;
}

interface PositionProps {
  position: string;
}

interface DepartmentProps {
  department: string;
}
interface ContactInfoProps {
  viber: string;
  email: string;
}
interface MoreEmployeeModal extends DepartmentProps {
  id: number;
}

interface CardProps {
  Name: React.FC<NameProps>;
  Profile: React.FC<ProfileProps>;
  Position: React.FC<PositionProps>;
  Department: React.FC<DepartmentProps>;
  Social?: React.FC<ContactInfoProps>;
  Modal?: React.FC<MoreEmployeeModal>;
}

interface CardType {
  children: React.ReactNode;
}

const EmployeeMngmentCard: CardProps & React.FC<CardType> = ({ children }) => {
  return (
    <>
      <Card hoverable className=" border border-neutral-200">
        <div className="flex flex-col justify-center items-center mb-3">
          {children}
        </div>
      </Card>
    </>
  );
};

EmployeeMngmentCard.Name = ({ name }) => (
  <p className=" font-sans text-lg text-[#0056D2] font-bold leading-tight mt-8">
    <Link to="/index/my-detailed-profile" state={{ name }}>
      {name}
    </Link>
  </p>
);
EmployeeMngmentCard.Profile = ({ source }) => (
  <img
    src={source}
    alt="prof"
    className="aspect-square object-cover shadow-xl shadow-blue-300 w-28 rounded-full"
  />
);
EmployeeMngmentCard.Position = ({ position }) => (
  <p className=" font-sans text-sm leading-tight font-medium text-neutral-600 mt-1">
    {position}
  </p>
);
EmployeeMngmentCard.Department = ({ department }) => (
  <p className="font-sans text-xs text-neutral-500 mt-1">
    {department} Department
  </p>
);
EmployeeMngmentCard.Social = ({ viber, email }) => (
  <div className=" flex items-center justify-center space-x-3 mt-7">
    <Typography.Link href={viber}>
      <FaViber className=" text-xl text-[#0056D2]" />
    </Typography.Link>
    <Typography.Link href={email}>
      <MailOutlined className=" text-xl text-[#0056D2]" />
    </Typography.Link>
  </div>
);
EmployeeMngmentCard.Modal = ({ id, department }) => (
  <div className="absolute flex justify-center items-center left-0 right-0 bottom-[-15px]">
    <ViewMoreTeam id={id} department={department} />
  </div>
);
export default EmployeeMngmentCard;
