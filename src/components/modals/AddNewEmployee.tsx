import React, { useState } from "react";
import {
  Button,
  Modal,
  Steps,
  Typography,
  ConfigProvider,
  Radio,
  RadioChangeEvent,
} from "antd";
import AddEmployeeGeneral from "../forms/AddEmployeeGeneral";
import AddNewEmployeeEducation from "../forms/AddNewEmployeeEducation";
import AddNewEmployeeGovernment from "../forms/AddNewEmployeeGovernment";
import AddNewEmployeeInformation from "../forms/AddNewEmployeeInformation";
import AddNewEmployeeCompensation from "../forms/AddNewEmployeeCompensation";
import AddNewEmployeeQR from "../pages/EmployeeManagement/AddNewEmployeeQR";

interface StepsTypes {
  title: JSX.Element;
  content: JSX.Element;
}

const AddNewEmployee: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const { Text, Paragraph } = Typography;
  const [radioValue, setRadioValue] = useState(1);

  // toggle modal
  const showModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // handle next step
  const handleNext = () => {
    setCurrent(current + 1);
  };

  // handle previous step
  const handlePrevious = () => {
    setCurrent(current - 1);
  };

  // handle change for radio btn
  const handleChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  // array of step
  const steps: StepsTypes[] = [
    {
      title: <Text className=" font-sans text-sm font-bold">General</Text>,
      content: (
        <div className="mt-10">
          <Radio.Group
            onChange={handleChange}
            value={radioValue}
            className=" flex justify-center items-center space-x-28"
          >
            <div>
              <Radio className=" font-sans text-lg font-bold" value={1}>
                Fill-out information
              </Radio>
              <Paragraph className=" ml-6 text-neutral-500 font-sans">
                I will fill out the necessary details of the employee's personal
                data sheet.
              </Paragraph>
            </div>
            <div>
              <Radio className=" font-sans text-lg font-bold" value={2}>
                Generate form and QR code
              </Radio>
              <Paragraph className=" ml-6 text-neutral-500 font-sans">
                The employee will fill out the personal data sheet through an
                online form.
              </Paragraph>
            </div>
          </Radio.Group>
          {radioValue === 1 && <AddEmployeeGeneral />}
          {radioValue === 2 && <AddNewEmployeeQR />}
        </div>
      ),
    },
    {
      title: <Text className=" font-sans text-sm font-bold">Education</Text>,
      content: <AddNewEmployeeEducation />,
    },
    {
      title: (
        <Text className=" font-sans text-sm font-bold">
          Government ID Numbers
        </Text>
      ),
      content: <AddNewEmployeeGovernment />,
    },
    {
      title: (
        <Text className=" font-sans text-sm font-bold">
          Employment Information
        </Text>
      ),
      content: <AddNewEmployeeInformation />,
    },
    {
      title: <Text className=" font-sans text-sm font-bold">Compensation</Text>,
      content: <AddNewEmployeeCompensation />,
    },
  ];

  // map the jsx component
  const contentData = steps.map((entry, index) => ({
    key: index,
    title: entry.title,
    content: entry.content,
  }));

  return (
    <>
      <Button type="primary" className="font-sans" onClick={showModal}>
        Add Employee
      </Button>
      <Modal
        title={
          <Text className="font-sans text-3xl font-bold">Create Profile</Text>
        }
        width={1350}
        open={isModalOpen}
        onCancel={showModal}
        footer={[
          <Button
            key="close"
            type="text"
            className="font-sans"
            onClick={showModal}
          >
            Close
          </Button>,
          <ConfigProvider
            key="save-close"
            theme={{ token: { colorPrimary: "#ea580c" } }}
          >
            <Button type="text" className="font-sans bgo" onClick={showModal}>
              Save and Close
            </Button>
          </ConfigProvider>,
          // conditional rendering based on step progress
          current > 0 && (
            <Button
              key="previous"
              type="default"
              className="font-sans"
              onClick={handlePrevious}
            >
              Previous
            </Button>
          ),
          current < steps.length - 1 && (
            <Button
              key="continue"
              type="primary"
              className="font-sans"
              onClick={handleNext}
            >
              Continue
            </Button>
          ),
          current === steps.length - 1 && (
            <Button key="submit" type="primary" className="font-sans">
              Submit
            </Button>
          ),
        ]}
      >
        <div>
          <Steps
            current={current}
            items={contentData.map((item) => ({
              key: item.key,
              title: item.title,
            }))}
            className="mt-5"
          />

          <div>{contentData[current].content}</div>
        </div>
      </Modal>
    </>
  );
};

export default AddNewEmployee;
