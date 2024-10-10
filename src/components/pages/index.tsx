import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar1 from "../Navbar";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className=" space-y-20">
        <div className=" fixed top-0 z-10 w-full">
          <Navbar1 />
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Index;
