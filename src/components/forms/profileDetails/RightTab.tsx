import React from "react";

function RightTab() {
  return (
    <div className="px-5 py-2">
      <div className="bg-white py-5 px-2">
        <ul>
          <li className="text-cyan-600 text-md p-2 border-r-4 border-r-cyan-600 cursor-pointer">
            General Information
          </li>
          <li className="text-cyan-600 text-md p-2 cursor-pointer">Job</li>
          <li className="text-cyan-600 text-md p-2 cursor-pointer">Time Off</li>
        </ul>
      </div>
    </div>
  );
}

export default RightTab;
