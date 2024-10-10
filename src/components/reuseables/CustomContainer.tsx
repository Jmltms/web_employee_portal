import React, { ReactNode } from "react";

interface ContainerType {
  children: ReactNode;
}

const CustomContainer: React.FC<ContainerType> = ({ children }) => {
  return (
    <>
      <div className="px-20 mb-5">{children}</div>
    </>
  );
};

export default CustomContainer;
