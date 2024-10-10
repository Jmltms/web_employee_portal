import { Button, Input, QRCode, Select, Space, Typography } from "antd";
import type { SelectProps } from "antd";
import React from "react";

const options: SelectProps["options"] = [
  {
    value: "Jimuel",
    label: "Jimuel",
  },
  {
    value: "Reyan",
    label: "Reyan",
  },
  {
    value: "Alexander",
    label: "Alexander",
  },
  {
    value: "Jao",
    label: "Jao",
  },
  {
    value: "Jonas",
    label: "Jonas",
  },
  {
    value: "Ian",
    label: "Ian",
  },
];
const AddNewEmployeeQR = () => {
  const { Text, Paragraph, Link } = Typography;
  // get user information
  const userInfoFromStorage = localStorage.getItem("user_info") as string;
  const parseUserInfo = JSON.parse(userInfoFromStorage);

  // get user id
  const employeeIdFromStorage = localStorage.getItem(
    "employee_detail"
  ) as string;
  const employeeIdInfo = JSON.parse(employeeIdFromStorage);
  console.log(employeeIdInfo.client.company_name);

  return (
    <>
      <Space direction="vertical" className="block mt-10 mb-8 space-y-5 mx-16">
        <Text className=" font-sans text-2xl font-bold text-[#0056D2]">
          Send Form through Email
        </Text>
        <div className=" grid grid-cols-2 grid-flow-row items-center gap-12">
          <div>
            <Text className="font-sans">Email Subject</Text>
            <Input placeholder="Subject" className="custom-style-input mt-2" />
          </div>
          <div>
            <Text className="font-sans mt-1">Send To</Text>
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Select Recipient"
              //   defaultValue={["Jimuel", "Jao", "Reyan", "Alexander"]}
              onChange={() => {}}
              options={options}
              className=" mt-2"
            />
          </div>
        </div>
        <div className="pt-5">
          <Text className="font-sans font-bold text-lg">Sample Email Body</Text>
          <div className=" bg-neutral-100 mt-2 p-5">
            <Paragraph className=" font-sans">Good day!</Paragraph>
            <Paragraph className=" font-sans">
              I hope this email finds you well.
            </Paragraph>
            <Paragraph className=" font-sans">
              As part of our ongoing efforts to keep our records accurate and
              up-to-date, we kindly request that you complete your Personal Data
              Sheet. To make the process more convenient, we’ve provided the
              form through visiting the link or scanning the QR code.
            </Paragraph>
            <br />
            <Paragraph className=" font-sans">
              Please follow the steps below to complete the form:
            </Paragraph>
            <Paragraph className=" font-sans">
              1. Scan the QR code or click the link attached to this email using
              your mobile phone or any QR code scanning app.
            </Paragraph>
            <div className=" flex items-center space-x-5">
              <QRCode type="svg" value="https://ant.design/" />
              <p className=" font-sans">Or visit this link:</p>
              <Link href="https://ant.design/" target="_">
                https://ant.design/
              </Link>
            </div>
            <br />
            <Paragraph className=" font-sans">
              2. Fill out the required details accurately and completely.
            </Paragraph>
            <Paragraph className=" font-sans">
              3. Submit the form once completed.
            </Paragraph>
            <br />
            <Paragraph className=" font-sans">
              Kindly complete and submit your Personal Data Sheet by [Due Date].
              Your timely response helps us ensure that your information is
              properly recorded for internal purposes.
            </Paragraph>
            <Paragraph className=" font-sans">
              If you have any questions or need assistance with the process,
              please don't hesitate to reach out.
            </Paragraph>
            <Paragraph className=" font-sans">
              Thank you for your cooperation.
            </Paragraph>
            <br />
            <Paragraph className=" font-sans">Best regards,</Paragraph>
            <p className=" font-sans">
              {parseUserInfo.first_name + " " + parseUserInfo.last_name}
            </p>
            <p className="font-sans">{employeeIdInfo.client.company_name}</p>
            <p className="font-sans">{employeeIdInfo.client.mobile_number}</p>
          </div>
        </div>
        <div>
          <Button>Send</Button>
        </div>
      </Space>
    </>
  );
};

export default AddNewEmployeeQR;
