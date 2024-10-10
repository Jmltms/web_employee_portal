import React, { useState } from "react";
import InputText from "../inputs/InputText";
import InputText1 from "../inputs/inputText1";
import { Checkbox } from "antd";

const EmploymentInformation = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div className="gap-x-5 grid grid-cols-6 px-10">
        <InputText
          placeholder=""
          title="Job Title"
          type="text"
          divclassname="col-span-2 col-start-1"
        />
        <div className="col-span-4 row-span-4">
          <div className="grid grid-cols-5 gap-2">
            <div className="text-sm">Benefits</div>

            <div className="col-start-1 text-sm col-span-2">
              <Checkbox
                id="ripple-on"
                // label="Health Card"
                // onPointerEnterCapture={() => {}}
                // onPointerLeaveCapture={() => {}}
                // crossOrigin={() => {}}
              />
            </div>
            <div className="flex items-center justify-center">
              <InputText1 placeholder="Health Card Number" type={""} />
            </div>
            <div className="flex items-center justify-center">
              <InputText1 placeholder="Amount" type="number" />
            </div>
            <div className="flex items-center justify-center">
              <InputText1 type="date" placeholder="" />
            </div>

            <div className="col-start-1 text-sm col-span-2">
              <Checkbox
                id="ripple-on"
                // label="Transportation Allowance"
                // onPointerEnterCapture={() => {}}
                // onPointerLeaveCapture={() => {}}
                // crossOrigin={() => {}}
              />
            </div>
            <div className="flex items-center justify-center">
              <InputText1 placeholder="Amount" type="number" />
            </div>
            <div className="flex items-center justify-center">
              <span className="pr-3 text-sm">per</span>
              <select
                id="tallowance"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Month</option>
              </select>
            </div>

            <div className="col-start-1 text-sm col-span-2">
              <Checkbox
                id="ripple-on"
                // label="Rent Allowance"
                // onPointerEnterCapture={() => {}}
                // onPointerLeaveCapture={() => {}}
                // crossOrigin={() => {}}
              />
            </div>
            <div className="flex items-center justify-center">
              <InputText1 placeholder="Amount" type="number" />
            </div>
            <div className="flex items-center justify-center">
              <span className="pr-3 text-sm">per</span>
              <select
                id="tallowance"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Month</option>
              </select>
            </div>

            <div className="col-start-1 text-sm col-span-2">
              <Checkbox
                id="ripple-on"
                // label="Telecommunication"
                // onPointerEnterCapture={() => {}}
                // onPointerLeaveCapture={() => {}}
                // crossOrigin={() => {}}
              />
            </div>
            <div className="flex items-center justify-center">
              <InputText1 placeholder="Amount" type="number" />
            </div>
            <div className="flex items-center justify-center">
              <span className="pr-3 text-sm">per</span>
              <select
                id="tallowance"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Month</option>
              </select>
            </div>
          </div>
          {/* <table>
            <tr>
              <td className="p-2">Benefits</td>
            </tr>
            <tr>
              <td className="text-sm">
                <Checkbox id="ripple-on" label="Healthcard" />
              </td>
              <td className="col-span-3">
                <InputText1 placeholder="Health Card Number" />
              </td>
              <td>
                <InputText1 placeholder="Amount" />
              </td>
              <td>
                <InputText1 type="date" />
              </td>
            </tr>
            <tr>
              <td className="text-sm">
                <Checkbox id="ripple-on" label="Transportation Allowance" />
              </td>
              <td>
                <input
                  type="text"
                  id="input-group-1"
                  className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                />
              </td>
              <td colSpan={3} className="inline-block bg-red-200 w-full">
                <label for="tallowance">per</label>
                <select
                  id="tallowance"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your last name"
                >
                  <option>Month</option>
                </select>
                <a></a>
              </td>
            </tr>
            <tr>
              <td className="text-sm">
                <Checkbox id="ripple-on" label="Rent Allowance" />
              </td>
              <td>
                <input
                  type="text"
                  id="input-group-1"
                  className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                />
              </td>
              <td colSpan={2}>
                <label for="tallowance">per</label>
                <select
                  id="tallowance"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your last name"
                >
                  <option>Month</option>
                </select>
                <a></a>
              </td>
            </tr>
            <tr>
              <td className="text-sm">
                <Checkbox id="ripple-on" label="Telecommunication" />
              </td>
              <td>
                <input
                  type="text"
                  id="input-group-1"
                  className="w-32 bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Amount"
                />
              </td>
              <td colSpan={2}>
                <label for="tallowance">per</label>
                <select
                  id="tallowance"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your last name"
                >
                  <option>Month</option>
                </select>
                <a></a>
              </td>
            </tr>
          </table> */}
        </div>
        <InputText
          placeholder=""
          title="Department"
          type="text"
          divclassname="col-span-2 col-start-1"
        />
        <InputText
          placeholder=""
          title="Manager"
          type="text"
          divclassname="col-span-2 col-start-1"
        />
        <InputText
          title="Start Date"
          type="date"
          divclassname="col-start-1"
          placeholder=""
        />
        <InputText
          title="Contract End Date"
          type="date"
          divclassname=""
          placeholder=""
        />
      </div>
    </>
  );
};

export default EmploymentInformation;
