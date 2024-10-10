import React from "react";
import CustomContainer from "../reuseables/CustomContainer";
import Header from "../reuseables/Header";

const MyProfile = () => {
  return (
    <>
      <Header>
        <div className=" flex items-center space-x-5">
          <Header.Title title="My Profile" />
          <Header.Image src="../images/myProfileImgs.svg" />
        </div>
      </Header>
      {/* <CustomContainer></CustomContainer> */}
    </>
  );
};

export default MyProfile;
