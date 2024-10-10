import React from "react";
import AddTimeOff from "../../modals/AddTimeOff";
import InputText1 from "../../inputs/inputText1";
import InputText from "../../inputs/InputText";
import { Alert, Typography } from "antd";

const TABLE_HEAD = [
  "",
  "DATE FROM",
  "DATE TO",
  "DURATION",
  "LEAVE TYPE",
  "STATUS",
  "ATTACHMENT",
  "",
];

const TABLE_ROWS = [
  {
    dateFrom: "30/12/2023",
    dateTo: "30/12/2023",
    duration: "1",
    leaveType: "Annual Leave",
    status: "Rejected",
    attachment: "",
  },
  {
    dateFrom: "20/12/2023",
    dateTo: "23/12/2023",
    duration: "3",
    leaveType: "Sick Leave",
    status: "Approved",
    attachment: "",
  },
];

function TimeOff1() {
  return (
    <>
      <div className="pl-5 py-2">
        <div className="bg-white w-full grid grid-cols-8 p-3">
          <div className="col-span-8 text-cyan-600 font-bold py-2">
            TIme Off
          </div>

          <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-800 col-span-8"></hr>
          <div className="flex w-full flex-col col-span-8 gap-2 pb-14">
            <Alert className="text-center bg-purple-50"></Alert>
          </div>

          <div className="col-span-7 text-blue-800 pb-5">Benefits</div>
          <div className="col-span-1 text-xs text-cyan-300 flex justify-end">
            Clear filters
          </div>

          <InputText
            title={""}
            placeholder={""}
            type="date"
            divclassname="col-span-2 px-2"
          />

          <InputText
            title={""}
            placeholder={""}
            type="date"
            divclassname="col-span-2 px-2"
          />

          <div className="col-span-2 px-2 pt-1">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>All Leave Types</option>
            </select>
          </div>

          <div className="col-span-2 px-2 pt-1">
            <select
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>All Status</option>
            </select>
          </div>

          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-800 col-span-8 "></hr>

          {/* <Card className="h-full w-full overflow- col-span-8"> */}
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography.Paragraph>{head}</Typography.Paragraph>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                ({ dateFrom, dateTo, duration, leaveType, status }, index) => (
                  <tr key={leaveType} className="even:bg-blue-gray-50/50">
                    <td className="p-4">{/* <Checkbox /> */}</td>
                    <td className="p-4">
                      <Typography>{dateFrom}</Typography>
                    </td>
                    <td className="p-4">
                      <Typography>{dateTo}</Typography>
                    </td>
                    <td className="p-4">
                      <Typography>{duration}</Typography>
                    </td>
                    <td className="p-4">
                      <Typography>{leaveType}</Typography>
                    </td>
                    <td className="p-4">
                      <Typography>{status}</Typography>
                    </td>
                    <td className="p-4">
                      <Typography>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#5f6368"
                        >
                          <path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z" />
                        </svg>
                      </Typography>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          {/* </Card> */}

          <AddTimeOff />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default TimeOff1;
