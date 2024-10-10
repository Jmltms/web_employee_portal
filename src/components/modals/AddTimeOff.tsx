import React from "react";
import TimeOffForm from "../forms/TimeOffForm";

function AddTimeOff() {
  const [size, setSize] = React.useState("");

  const handleOpen = (value: string) => setSize(value);

  return (
    <>
      {/* <Button onClick={() => handleOpen("lg")} variant="gradient">
        Open Dialog LG
      </Button> */}
      {/* 
      <button
        onClick={() => handleOpen("md")}
        className="bg-cyan-300 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded inline-flex items-center mt-10"
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
        <span className="text-sm">New Request</span>
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
        // size={size || "md"}
      >
        <DialogHeader
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          New Request
        </DialogHeader>
        <DialogBody
          className="overflow-y-auto min-h-[60vh] max-h-[60vh]"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          placeholder={""}
        >
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-800 col-span-8"></hr>
          <TimeOffForm />
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

export default AddTimeOff;
