import { Pagination, Table, TableColumnsType, Tag } from "antd";
import React, { useState } from "react";
import { statusList } from "../../utils/reuseableVariable";
import { ObjType } from "../pages/EmployeeManagement/AllEmployee";

interface EmployeeManagementTableViewProps {
  dataTables: ObjType[];
}

const EmployeeManagementTableView = ({
  dataTables,
}: EmployeeManagementTableViewProps) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const columns: TableColumnsType<ObjType> = [
    {
      key: "profile",
      dataIndex: "profile",
      width: 100,
      title: () => <p className="font-sans text-zinc-700"></p>,
      render: (profile) => {
        return (
          <div className=" flex justify-center items-center">
            <img
              src={profile}
              className="aspect-square object-fill w-14 rounded-full"
              alt={profile}
            />
          </div>
        );
      },
    },
    {
      key: "employee_id",
      dataIndex: "employee_id",
      width: 120,
      title: () => <p className="font-sans text-zinc-700">Employee Id</p>,
    },
    {
      key: "name",
      dataIndex: "name",
      title: () => <p className="font-sans text-zinc-700">Name</p>,
    },
    {
      key: "position",
      dataIndex: "position",
      title: () => <p className="font-sans text-zinc-700">Position</p>,
    },
    {
      key: "department",
      dataIndex: "department",
      title: () => <p className="font-sans text-zinc-700">Department</p>,
    },
    {
      key: "status",
      dataIndex: "status",
      width: 100,
      title: () => <p className="font-sans text-zinc-700">Status</p>,
      render: (status: number) => {
        const statusColor = statusList.find((entry) => entry.id === status);
        return <Tag className={statusColor?.color}>{statusColor?.label}</Tag>;
      },
    },
  ];
  return (
    <>
      <Table
        style={{ borderBlockColor: "#d4d4d8" }}
        bordered
        rowKey="id"
        pagination={false}
        columns={columns}
        dataSource={dataTables}
        rowClassName=" font-sans text-neutral-600"
      />
      <Pagination
        className=" flex justify-end"
        current={page}
        onChange={() => {}}
        total={dataTables.length}
        defaultPageSize={pageSize}
      />
    </>
  );
};

export default EmployeeManagementTableView;
