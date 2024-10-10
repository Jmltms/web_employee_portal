import { Typography } from "antd";
import React from "react";
import { SyncLoader } from "react-spinners";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center mt-52 space-y-2">
        <SyncLoader color="#cfd413" />
        <Typography.Text className=" text-sm">Loading</Typography.Text>
      </div>
    </>
  );
};

export default LoadingPage;
