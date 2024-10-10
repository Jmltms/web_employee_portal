import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Documents from "./components/pages/More/Documents";
import News from "./components/pages/More/News";
import ProfileDetails from "./components/pages/EmployeeManagement/ProfileDetails";
import Index from "./components/pages/index";
import EmployeeManagement from "./components/pages/EmployeeManagement";
import ViewProfile from "./components/pages/EmployeeManagement/ViewProfile";
import MyProfile from "./components/pages/MyProfile";
import WhatsNew from "./components/pages/WhatsNew";
import MyAccount from "./components/pages/MyAccount";
import Profile from "./components/pages/MyAccount/Profile";

const App: React.FC = () => {
  const token = localStorage.getItem("mytoken");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [token, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="index" element={<Index />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="employee-management" element={<EmployeeManagement />} />
          <Route path="whats-new" element={<WhatsNew />} />
          <Route path="profiledetails" element={<ProfileDetails />} />
          <Route path="documents" element={<Documents />} />
          <Route path="news" element={<News />} />
          <Route path="my-detailed-profile" element={<ViewProfile />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="my-account/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
