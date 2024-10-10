import React from "react";

function EmploymentInformation1() {
  return (
    <div className="pl-5 py-2">
      <div className="bg-white w-full grid grid-cols-8 p-3">
        <div className="col-span-8 text-cyan-600 font-bold py-2">Job</div>

        <div className="col-span-7 text-blue-800 pb-5">
          Employment Information
        </div>
        <div className="col-span-1 text-xs text-cyan-300 flex justify-end">
          Edit
        </div>

        <div className="text-xs text-gray-600 col-start-1 py-1">Company</div>
        <div className="text-xs text-gray-900 col-span-2 py-1">OODC</div>

        <div className="text-xs text-gray-600 col-start-1 py-1">Job Title</div>
        <div className="text-xs text-gray-900 col-span-2 py-1">UX Leader</div>
        <div className="text-xs text-gray-600 col-start-5 py-1">Date Hired</div>
        <div className="text-xs text-gray-900 col-span-2 py-1">
          October 12, 2022
        </div>

        <div className="text-xs text-gray-600 col-start-1 py-1">Department</div>
        <div className="text-xs text-gray-900 col-span-2 py-1">
          CI Department
        </div>
        <div className="text-xs text-gray-600 col-start-5 py-1">
          Contract end date
        </div>
        <div className="text-xs text-gray-900 col-span-2 py-1">
          October 10, 2023
        </div>

        <div className="text-xs text-gray-600 col-start-1 py-1">
          Employment Status
        </div>
        <div className="text-xs text-gray-900 col-span-2 py-1">
          Project Based
        </div>
        <div className="text-xs text-blue-600 cursor-pointer">
          Labor Contract.pdf
        </div>
        <div className="text-xs text-gray-600 col-start-5 py-1">
          Line Manager
        </div>
        <div className="text-xs text-gray-900 col-span-2 py-1">Sofia Perez</div>

        <div className="text-xs text-gray-600 col-start-1 py-1">Level</div>
        <div className="text-xs text-gray-900 col-span-2 py-1">ManCom2</div>

        <div className="text-xs text-gray-600 col-start-1 py-1">
          Work Arrangement
        </div>
        <div className="text-xs text-gray-900 col-span-2 py-1">Hybrid</div>

        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-800 col-span-8"></hr>

        <div className="col-span-7 text-blue-800 pb-5">Benefits</div>
        <div className="col-span-1 text-xs text-cyan-300 flex justify-end">
          Edit
        </div>

        <div className="text-xs text-gray-600 col-start-1 py-1">
          Health Card
        </div>
        <div className="text-xs text-gray-900 col-span-2 py-1">
          PHP 60,000.00
        </div>

        <div className="text-xs text-gray-600 col-start-1 py-1">
          Health Card No.
        </div>
        <div className="text-xs text-gray-900 col-span-2 py-1">00007789557</div>
        <div className="text-xs text-gray-600 col-start-5 col-span-2 py-1">
          Rent Allowance
        </div>
        <div className="text-xs text-gray-900 col-span-1 py-1">
          PHP 60,000.00
        </div>

        <div className="text-xs text-gray-600 col-start-1 colspan py-1">
          Transportation Allowance
        </div>
        <div className="text-xs text-gray-900 col-span-2 py-1">
          PHP 60,000.00
        </div>
        <div className="text-xs text-gray-600 col-start-5 col-span-2 py-1">
          Telecommunication Allowance
        </div>
        <div className="text-xs text-gray-900 col-span-1 py-1">
          PHP 2,000.00
        </div>
      </div>
    </div>
  );
}

export default EmploymentInformation1;
