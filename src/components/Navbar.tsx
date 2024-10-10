import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Avatar, Input, Popover } from "antd";
import "../App.css";
import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";

interface navigationType {
  id: number;
  path: string;
  label: string;
}

function Navbar1() {
  const location = useLocation();
  const navigate = useNavigate();
  const userFromStorage: any = localStorage.getItem("user_info");
  const userObj = JSON.parse(userFromStorage);
  console.log(userObj);

  console.log(location);

  const navigation: navigationType[] = [
    {
      id: 1,
      path: "/index/dashboard",
      label: "Dashboard",
    },
    {
      id: 2,
      path: "/index/my-profile",
      label: "My Profile",
    },
    {
      id: 3,
      path: "/index/employee-management",
      label: "Employee Management",
    },
    {
      id: 4,
      path: "/index/whats-new",
      label: "What`s New!",
    },
    {
      id: 7,
      path: "/index/documents",
      label: "Documents",
    },
  ];
  const userInitial = userObj.first_name.charAt(0);

  // logout function
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // function to decide the classname based on path
  const detectClass = (path: string, index: number) => {
    if (location.pathname === path) {
      return " font-sans text-sm text-[#0056D2] border-b-2 border-[#0056D2] pb-4 mt-4";
    }
    if (location.pathname === "/index/my-detailed-profile" && index === 2) {
      return " font-sans text-sm text-[#0056D2] border-b-2 border-[#0056D2] pb-4 mt-4";
    }
    return "font-sans text-sm text-slate-500 hover:text-[#0056D2] pb-4 mt-4";
  };

  return (
    <>
      <div className="backdrop-blur-md flex justify-between items-center pl-5 pr-12 py-4">
        <div className=" flex items-center space-x-6">
          <img
            src="../images/OODC_logo.png"
            alt=""
            className="w-28 aspect-auto object-contain cursor-pointer"
          />
          <ul className="flex space-x-6">
            {navigation.map((entry, index) => {
              const classStyle = detectClass(entry.path, index);
              return (
                <li key={entry.id} className={classStyle}>
                  <Link to={entry.path}>{entry.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center space-x-5">
          <Input
            placeholder="Search..."
            className="custom-style-input"
            suffix={<BsSearch />}
          />
          <BellOutlined className=" text-xl" />
          <div>
            <Popover
              content={
                <div className=" mx-2">
                  <div className="flex flex-col items-center justify-center border-b border-neutral-300 pb-2">
                    <p className="font-sans text-neutral-800">
                      {userObj.first_name + " " + userObj.last_name}
                    </p>
                    <p className="font-sans text-xs text-neutral-500">
                      {userObj.email}
                    </p>
                  </div>
                  <div className=" mt-4 space-y-3">
                    <Link to="my-account">
                      <div className=" flex items-center space-x-3 cursor-pointer  hover:text-[#0056D2]">
                        <UserOutlined className=" text-lg" />
                        <p className=" font-sans">My account</p>
                      </div>
                    </Link>
                    <div
                      className=" flex items-center space-x-3 cursor-pointer hover:text-[#0056D2]"
                      onClick={handleLogout}
                    >
                      <LogoutOutlined className=" text-lg" />
                      <p className=" font-sans">Sign out</p>
                    </div>
                  </div>
                </div>
              }
            >
              <Avatar className="bg-[#0056D2] font-sans hover:cursor-pointer">
                {userInitial.toUpperCase()}
              </Avatar>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar1;
