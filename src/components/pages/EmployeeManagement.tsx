import React, { useState } from "react";
import CustomContainer from "../reuseables/CustomContainer";
import Header from "../reuseables/Header";
import type { SegmentedValue } from "antd/es/segmented";
import Directory from "../forms/Directory";
import Documents from "./More/Documents";
import Management from "./EmployeeManagement/Management";
import { Input } from "antd";
import AllEmployee from "./EmployeeManagement/AllEmployee";

export interface TabType {
  label: string;
  value: number;
  component?: JSX.Element;
}

const EmployeeManagement = () => {
  const [activeTab, setActiveTab] = useState<TabType>({
    label: "All",
    value: 1,
    component: <AllEmployee />,
  });

  const tabs: TabType[] = [
    {
      label: "All",
      value: 1,
      component: <AllEmployee />,
    },
    {
      label: "Management",
      value: 2,
      component: <Management />,
    },
    {
      label: "Team members",
      value: 3,
      component: <Directory />,
    },
    {
      label: "Compliance",
      value: 4,
    },
  ];

  // handle change for tabs
  const handleChange = (selected: number) => {
    const selectedTabs = tabs.find(
      ({ value }) => value === selected
    ) as TabType;

    setActiveTab(selectedTabs);
  };
  return (
    <>
      <Header>
        <div className=" flex items-center space-x-5">
          <Header.Title title="Employee Management" />
          <Header.Image src="../images/empManagement.svg" />
        </div>
        <div className="flex items-center space-x-5">
          {Header.TabOption && (
            <Header.TabOption
              tabOptions={tabs}
              defaultTab={1}
              onChanges={handleChange}
            />
          )}
          <div className=" border-l-2 pl-5 border-neutral-400">
            {Header.Button && <Header.Button />}
          </div>
        </div>
      </Header>
      <CustomContainer>
        <div>{activeTab?.component}</div>
      </CustomContainer>
    </>
  );
};

export default EmployeeManagement;
