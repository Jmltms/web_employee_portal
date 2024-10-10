import React from "react";
import { Button, Result } from "antd";
const ErrorPage = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center mt-32 space-y-2">
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          extra={
            <Button type="primary" onClick={() => window.location.reload()}>
              Reload
            </Button>
          }
        />
      </div>
    </>
  );
};

export default ErrorPage;
