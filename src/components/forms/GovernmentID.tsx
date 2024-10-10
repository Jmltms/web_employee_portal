import React from "react";
import InputText from "../inputs/InputText";

const GovernmentID = () => {
  return (
    <>
      <div className="gap-x-5 grid grid-cols-3 px-10">
        <InputText
          placeholder=""
          divclassname=""
          title="SSS"
          type="text"
        />
        <InputText
          placeholder=""
          divclassname=""
          title="Philhealth"
          type="text"
        />
        <InputText
          placeholder=""
          divclassname=""
          title="TIN"
          type="text"
        />
        <InputText
          placeholder=""
          divclassname=""
          title="Pag-Ibig ID"
          type="text"
        />

        <div className="col-start-1">
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

export default GovernmentID;
