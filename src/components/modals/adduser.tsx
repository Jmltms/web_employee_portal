import React from "react";

import UserForm from "../forms/UserForm";

function AddUser() {
  const [size, setSize] = React.useState("");
  const handleOpen = (value: string) => setSize(value);

  return (
    <>
      {/* <Button onClick={() => handleOpen("lg")} variant="gradient">
        Open Dialog LG
      </Button> */}
      {/* 
      <button
        onClick={() => handleOpen("xl")}
        className="bg-cyan-300 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-9"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#FFFFFF"
        >
          <path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z" />
        </svg>
        <span className="text-sm">Add New</span>
      </button>

      <Dialog
        open={
          size === "xs" ||
          size === "sm" ||
          size === "md" ||
          size === "lg" ||
          size === "xl" ||
          size === "xxl"
        }
        handler={handleOpen}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        placeholder={""}
      >
        <DialogHeader
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          Create Profile
        </DialogHeader>
        <DialogBody
          className="overflow-y-auto min-h-[70vh] max-h-[70vh]"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          <UserForm />
        </DialogBody>
        <DialogFooter
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen("")}
            className="mr-1"
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen("")}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            placeholder={""}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
    </>
  );
}
export default AddUser;
