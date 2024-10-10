import React from "react";
import GeneralInformation from "../../forms/profileDetails/GeneralInformation";
import EmploymentInformation1 from "../../forms/profileDetails/EmploymentInformation1";
import TimeOff1 from "../../forms/profileDetails/TImeOff1";
import RightTab from "../../forms/profileDetails/RightTab";

function ProfileDetails() {
  return (
    <>
      <div className="bg-white w-full grid grid-cols-3 border-solid border-y border-gray-300 py-3">
        <h1 className="text-2xl pl-10 pt-3">Profile Details</h1>
      </div>

      {/* <Details_General_Information /> */}
      <div className="flex">
        <div className="w-5/6">
          <GeneralInformation />
          <EmploymentInformation1 />
          <TimeOff1 />
        </div>
        <div className="w-1/6">
          <RightTab />
        </div>
      </div>

      {/*  */}
    </>
  );
}

export default ProfileDetails;
