import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

import { Alert, Button, ConfigProvider, Form, Input, Typography } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface credentialType {
  email: string;
  password: string;
}

const Login = () => {
  const [credential, setCredential] = useState<credentialType>({
    email: "",
    password: "",
  });
  const [errorAlert, setErrorAlert] = useState<String>("hidden");
  const apiDomain = process.env.REACT_APP_API_DOMAIN;
  let navigate = useNavigate();

  // handle change of the input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  // handle fetching of user credentil and sent to api
  const fetchEmployeeDetailed = async (id: number, token: string) => {
    await axios
      .get(`${apiDomain}/api/employee/${id}/employee_detailed/`, {
        headers: {
          Authorization: "token " + token,
        },
      })
      .then((result) => {
        localStorage.setItem(
          "employee_detail",
          JSON.stringify(result.data.data)
        );
        navigate("/index/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // handle login function
  const login = async () => {
    await axios
      .post(`${apiDomain}/api/user/login/`, {
        username: credential.email,
        password: credential.password,
      })
      .then(function (response) {
        localStorage.setItem("mytoken", response.data.token);
        localStorage.setItem("user_info", JSON.stringify(response.data.user));
        fetchEmployeeDetailed(response.data.user.id, response.data.token);
        navigate("/index/dashboard");
      })
      .catch(function (error) {
        errorAlert ? setErrorAlert("flex") : setErrorAlert("hidden");
      });
  };

  return (
    <>
      <div className="bg-white h-screen grid grid-cols-2">
        <img
          src="../images/loginImg1.svg"
          alt=""
          className="w-48 aspect-auto object-center mb-3 fixed bottom-10 left-5"
        />
        <div className="grid col-span-1 mt-5 ml-14">
          <Form layout="vertical" onFinish={login} className="mx-40">
            <img
              src="../images/OODC_logo.png"
              alt=""
              className="w-36 aspect-video object-contain mb-3"
            />
            <Typography.Paragraph className=" font-sans text-3xl font-bold text-slate-800">
              Welcome.
            </Typography.Paragraph>
            <Typography.Paragraph className=" font-sans mt-[-20px] pb-5 text-sm text-slate-500">
              Enter your registered email below to login.
            </Typography.Paragraph>
            <Alert
              message={
                <Typography.Text className=" font-sans text-slate-700">
                  Login failed!
                </Typography.Text>
              }
              description={
                <Typography.Text className=" font-sans text-xs text-slate-500">
                  Please double-check your email or password and try again.
                </Typography.Text>
              }
              type="error"
              closable
              showIcon
              className={`p-3 mb-5 ${errorAlert}`}
            />
            <Form.Item
              label={
                <Typography.Text className=" font-sans text-slate-700">
                  Email
                </Typography.Text>
              }
            >
              <Input
                placeholder="email@sample.com"
                size="large"
                onChange={handleChange}
                name="email"
                className="custom-style-input"
                value={credential.email}
                prefix={<MdOutlineMail className="mr-2" />}
              />
            </Form.Item>
            <Form.Item
              label={
                <Typography.Text className=" font-sans text-slate-700">
                  Password
                </Typography.Text>
              }
            >
              <Input.Password
                placeholder="Enter your password"
                size="large"
                onChange={handleChange}
                name="password"
                className="custom-style-input"
                value={credential.password}
                prefix={<RiLockPasswordLine className="mr-2" />}
              />
              <Typography.Link
                href="https://ant.design"
                target="_blank"
                className=" font-sans flex justify-end text-xs mt-3"
              >
                Forgot password
              </Typography.Link>
            </Form.Item>
            <Form.Item>
              <ConfigProvider theme={{ token: { colorPrimary: "#095BD6" } }}>
                <Button type="primary" htmlType="submit" block>
                  <Typography.Text className=" font-sans text-slate-100">
                    Sign in
                  </Typography.Text>
                </Button>
              </ConfigProvider>
            </Form.Item>
          </Form>
        </div>
        <img
          src="../images/Login1.jpg"
          alt="course_logo"
          className="aspect-square object-contain h-screen"
        />
      </div>
    </>
  );
};
export default Login;
