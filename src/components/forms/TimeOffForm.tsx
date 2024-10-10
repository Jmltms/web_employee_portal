import React from "react";
import InputText from "../inputs/InputText";
import { Button } from "antd";

function TimeOffForm() {
  return (
    <>
      <div className="gap-x-5 grid grid-cols-4 pt-5">
        {/* <div className="col-span-4 text-blue-800 pb-5 pt-5">
          Employment Information
        </div> */}

        <div className="col-span-2">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Leave Type
          </label>
          <div className="relative mb-6 bg-green-100">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select leave type</option>
            </select>
          </div>
        </div>

        <InputText
          placeholder=""
          divclassname=""
          type="date"
          title="Date From"
        />
        <InputText placeholder="" divclassname="" type="date" title="Date To" />

        <div className="col-span-4">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Remarks
          </label>
          <div className="relative mb-6 bg-green-100">
            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 min-h-[100px]"></textarea>
          </div>
        </div>

        {/* <div className="col-span-3">
          <label
            for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Attach File
          </label>
          <div className="relative">
            <input
              type="file"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Street"
            />
          </div>
        </div> */}

        <div className="max-w-xl col-span-2">
          <label className="flex justify-center w-full h-20 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <span className="font-medium text-gray-600 text-sm">
                Drag and drop your files here or
                {/* <button className="text-white bg-cyan-700 p-2"></button> */}
                <Button className="">Browse</Button>
              </span>
            </span>
            <input type="file" name="file_upload" className="hidden" />
          </label>
        </div>
      </div>
    </>
  );
}

export default TimeOffForm;
