import { ExportOutlined } from "@ant-design/icons";
import { Popover, Typography } from "antd";
import React from "react";

const EmployeeMngmentExport = () => {
  const { Text } = Typography;
  return (
    <>
      <div className=" flex items-center space-x-4">
        <Popover content={<Text className=" font-sans">Export files</Text>}>
          <ExportOutlined className="text-base cursor-pointer text-[#0056d2] shadow hover:ring-1 hover:ring-[#0056d2] shadow-neutral-300 rounded-full p-2" />
        </Popover>
      </div>
    </>
  );
};

export default EmployeeMngmentExport;
