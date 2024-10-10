import { Radio } from "antd";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-full w-full scale-105"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ProfileDetail() {
  return (
    <>
      <div className="gap-10 grid grid-cols-4 px-10">
        <div className="border-solid border-2 border-gray-300 py-1">
          <Radio
            name="type"
            className="border-gray-900/10 bg-gray-900/5 p-0 transition-all hover:before:opacity-0"
          />
        </div>
        <div className="border-solid border-2 border-gray-300 py-1">
          <Radio name="type" defaultChecked />
        </div>
        <div className="border-solid border-2 border-gray-300 py-1">
          <Radio name="type" defaultChecked />
        </div>
        <div className="border-solid border-2 border-gray-300 py-1">
          <Radio name="type" defaultChecked />
        </div>
      </div>

      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="grid grid-cols-3 gap-x-5">
        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your first name"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Middle Name (optional)
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your middle name"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sex
          </label>
          <div className="relative mb-6 pl-10">
            <Radio name="type" defaultChecked />
            <Radio name="type" defaultChecked />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Birthday
          </label>
          <div className="relative mb-6">
            <input
              type="date"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <div className="relative mb-6">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Employee ID
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ID number"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Phone
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Street
          </label>
          <div className="relative mb-6">
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Street"
            />
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            State / Province
          </label>
          <div className="relative mb-6">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select State / Province</option>
            </select>
          </div>
        </div>

        <div className="">
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
              <option>Select City</option>
            </select>
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            Postal Code
          </label>
          <div className="relative mb-6">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select Postal Code</option>
            </select>
          </div>
        </div>

        <div className="">
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
              <option>Select Country / Region</option>
            </select>
          </div>
        </div>

        <div className="">
          <label
            // for="input-group-1"
            className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
          >
            ID Image
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
}
export default ProfileDetail;
