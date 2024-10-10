import React, { useEffect, useState } from "react";
// Import useLocation hook
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

import CardInput from "../inputs/CardInput";

function OrgChart() {
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <>
      <div className="w-full grid grid-cols-3 border-solid border-y border-gray-300">
        <h1 className="text-2xl pl-10 pt-3">Employee Management</h1>
        <ul className="list-none text-center pt-2 justify-center">
          <li
            className={
              "inline-block mx-4 py-3 text-sm cursor-pointer" +
              (url === "/directory" ? " activenavbar" : "")
            }
          >
            <Link to="/directory">Directory</Link>
          </li>
          <li
            className={
              "inline-block mx-4 py-3 text-sm cursor-pointer" +
              (url === "/orgchart" ? " activenavbar" : "")
            }
          >
            <Link to="/orgchart">Org Chart</Link>
          </li>
        </ul>
      </div>

      <div className="w-full grid grid-cols-1 border-solid">
        <div className="flex align-center justify-center border-r py-1">
          <table className="w-full">
            <tr>
              <td className=" px-10">
                <div className="relative rounded-md shadow-sm w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">
                      <img
                        src="../images/search-b.png"
                        alt=""
                        className="w-3 cursor-pointer"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-0 sm:text-sm sm:leading-5 bg-gray-100"
                    placeholder="Search..."
                  />
                </div>
              </td>
              <td className="w-24">
                <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400ZM280-540v-80h200v80H280Z" />
                  </svg>
                  <span className="text-sm"></span>
                </button>
              </td>
              <td className=" w-24">
                <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded inline-flex items-center ml-9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#5f6368"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400ZM280-540v-80h200v80H280Z" />
                  </svg>
                  <span className="text-sm"></span>
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div className="flex justify-center">
        <CardInput
        // src="../images/avatar.jpg"
        // name="Brian Harris"
        // position="CEO"
        />
      </div>

      <div className="flex justify-center gap-10 py-5">
        <CardInput
        // imgsrc="../images/avatar.jpg"
        // name="Brian Harris"
        // position="CEO"
        />
        <CardInput
        // imgsrc="../images/avatar.jpg"
        // name="Brian Harris"
        // position="CEO"
        />
        <CardInput
        // imgsrc="../images/avatar.jpg"
        // name="Brian Harris"
        // position="CEO"
        />
        <CardInput
        // imgsrc="../images/avatar.jpg"
        // name="Brian Harris"
        // position="CEO"
        />
      </div>
    </>
  );
}

export default OrgChart;
