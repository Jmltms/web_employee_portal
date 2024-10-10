import React from "react";
import InputText from "../inputs/InputText";

const Education = () => {
  return (
    <>
      <div className="gap-x-5 grid grid-cols-6 px-10">
        <InputText
          title="School Name"
          type="text"
          placeholder="School Name"
          divclassname="col-span-2"
        />

        <InputText
          title="School Address"
          type="text"
          placeholder="School Address"
          divclassname="col-span-4"
        />

        <div className="col-span-2">
          <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            State / Province
          </label>
          <div className="relative mb-6">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>State / Province</option>
            </select>
          </div>
        </div>

        <div className="col-span-2">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            City
          </label>
          <div className="relative mb-6">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>City</option>
            </select>
          </div>
        </div>

        <div className="col-span-2">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Country / Region
          </label>
          <div className="relative mb-6">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Country / Region</option>
            </select>
          </div>
        </div>

        <div className="col-span-2">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Degree
          </label>
          <div className="relative mb-6">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Bachelors</option>
            </select>
          </div>
        </div>

        <InputText
          placeholder={""}
          type="text"
          title="Field of Study"
          divclassname="col-span-2"
        />

        <InputText
          placeholder={""}
          type="date"
          title="From"
          divclassname="col-span-2"
        />

        <InputText
          placeholder={""}
          type="date"
          title="To"
          divclassname="col-span-2"
        />

        <div className="col-span-2">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Files
          </label>
          <div className="relative mb-6">
            <input
              type="file"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Street"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
