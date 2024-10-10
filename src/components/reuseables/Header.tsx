import { ConfigProvider, Segmented, Typography } from "antd";
import React from "react";
import { TabType } from "../pages/EmployeeManagement";
import AddNewEmployee from "../modals/AddNewEmployee";

// props that will be came from parent
interface ImgProps {
  src: string;
}
interface TitleProps {
  title: string;
}
interface TabOptionProps {
  tabOptions: TabType[];
  defaultTab: number;
  onChanges: any;
}

// for component itself
interface HeaderType {
  children: React.ReactNode;
}
// for component object
interface HeaderComponents {
  Image: React.FC<ImgProps>;
  Title: React.FC<TitleProps>;
  TabOption?: React.FC<TabOptionProps>;
  Button?: React.FC;
}

const Header: HeaderComponents & React.FC<HeaderType> = ({ children }) => {
  return (
    <>
      <div className="mt-28 mx-10 flex justify-between items-center border-b border-b-zinc-300 px-10">
        {children}
      </div>
    </>
  );
};

Header.Title = ({ title }: TitleProps) => (
  <Typography.Title className="font-bold font-sans">{title}</Typography.Title>
);

Header.Image = ({ src }: ImgProps) => (
  <img src={src} alt={src} className="w-24 aspect-auto object-contain" />
);

Header.TabOption = ({ tabOptions, defaultTab, onChanges }: TabOptionProps) => (
  <Segmented
    defaultValue={defaultTab}
    options={tabOptions}
    onChange={(e) => onChanges(e)}
    className=" font-sans p-1 font-medium bg-zinc-100 text-slate-500"
  />
);

Header.Button = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#16a34a",
      },
    }}
  >
    <AddNewEmployee />
  </ConfigProvider>
);
export default Header;
