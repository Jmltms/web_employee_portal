import React from "react";

import ProfileDetail from "./ProfileDetail";
import Education from "./Education";
import GovernmentID from "./GovernmentID";
import EmploymentInformation from "./EmploymentInformation";
import TimeOff from "./TimeOff";

function UserForm() {
  const [activeTab, setActiveTab] = React.useState("ProfileDetail");
  const data = [
    {
      label: "Profile Detail",
      value: "ProfileDetail",
      desc: <ProfileDetail />,
    },
    {
      label: "Education",
      value: "Education",
      desc: <Education />,
    },
    {
      label: "Government ID Numbers",
      value: "GovernmentIDNumbers",
      desc: <GovernmentID />,
    },
    {
      label: "Employment Information",
      value: "EmploymentInformation",
      desc: <EmploymentInformation />,
    },
    {
      label: "Time Off",
      value: "TimeOff",
      desc: <TimeOff />,
    },
  ];

  return <></>;
}
//   <Tabs value={activeTab}>
//     <TabsHeader
//       className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
//       indicatorProps={{
//         className:
//           "bg-transparent border-b-2 border-cyan-400 shadow-none rounded-none",
//       }}
//       onPointerEnterCapture={() => {}}
//       onPointerLeaveCapture={() => {}}
//       placeholder={""}
//     >
//       {data.map(({ label, value }) => (
//         <Tab
//           key={value}
//           value={value}
//           onClick={() => setActiveTab(value)}
//           className={activeTab === value ? "text-cyan-400 text-md" : ""}
//           onPointerEnterCapture={() => {}}
//           onPointerLeaveCapture={() => {}}
//           placeholder={""}
//         >
//           {label}
//         </Tab>
//       ))}
//     </TabsHeader>
//     <TabsBody
//       onPointerEnterCapture={() => {}}
//       onPointerLeaveCapture={() => {}}
//       placeholder={""}
//     >
//       {data.map(({ value, desc }) => (
//         <TabPanel key={value} value={value}>
//           {desc}
//         </TabPanel>
//       ))}
//     </TabsBody>
//   </Tabs>
// );

export default UserForm;
