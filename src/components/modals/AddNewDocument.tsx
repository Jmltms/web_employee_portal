import React, { useState } from "react";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Modal,
  notification,
  Select,
  Space,
  Typography,
  Upload,
  UploadProps,
} from "antd";
import { FileAddOutlined, InboxOutlined } from "@ant-design/icons";
import { useFetchDepartmentQuery, useAddDocumentsMutation } from "../../store";
import { filterObjectValue } from "../../utils/dataValidation";

interface optionType {
  id: number;
  name: string;
}
type inputEvent =
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLInputElement>;

const AddNewDocument: React.FC = () => {
  const [postDocument] = useAddDocumentsMutation();
  const departmentApi = useFetchDepartmentQuery("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState<any[]>([]);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    department: 0,
  });

  console.log(departmentApi);

  // function for toggle modal
  const toggleModal = () => {
    isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  };
  // ant design props for typescript and obj also function
  const props: UploadProps = {
    name: "file",
    multiple: true,
    beforeUpload: () => false,
    showUploadList: true,
    onChange(info) {
      setFile(info.fileList);
    },
    onDrop(e) {
      setFile([e.dataTransfer.files]);
    },
  };
  // map the data from api to select option as props
  const departmentOption =
    departmentApi.data?.data.map((item: optionType) => ({
      value: item.id,
      label: item.name,
    })) || [];

  // handle change for title and description
  const handleInputChange = (e: inputEvent) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // function that validate if required field is empty
  const isEmptyObj = filterObjectValue(inputs);

  // handle submit of data to api
  const handleSubmit = async () => {
    const user_id: any = localStorage.getItem("user_info");
    const clientFromStorage: any = localStorage.getItem("employee_detail");
    const clientObj = JSON.parse(clientFromStorage);
    const client = clientObj?.client?.id;
    const user = JSON.parse(user_id);
    console.log(user.id);

    const formData = new FormData();
    file.forEach((fileItem) => {
      if (fileItem.originFileObj) {
        formData.append("files", fileItem.originFileObj);
      }
    });
    formData.append("title", inputs.title);
    formData.append("description", inputs.description);
    formData.append("department", inputs.department.toString());
    formData.append("user_id", user.id);
    formData.append("client_id", client);

    if (isEmptyObj || file.length === 0) {
      notification.warning({
        message: "Incomplete Required Fields",
        description: "Complete all the required fields to proceed.",
      });
    } else {
      const documentsToApi = await postDocument(formData).unwrap();
      if (documentsToApi.success === true) {
        notification.success({
          message: "Success",
          description: documentsToApi.message,
        });
      }
      setInputs({
        title: "",
        description: "",
        department: 0,
      });
      setFile([]);
      setIsModalOpen(!isModalOpen);
    }
  };

  return (
    <>
      {/* cfd413 */}
      <ConfigProvider theme={{ token: { colorPrimary: "#ea580c" } }}>
        <Button type="primary" onClick={toggleModal} icon={<FileAddOutlined />}>
          <Typography.Text className=" font-sans text-slate-100">
            Add New
          </Typography.Text>
        </Button>
      </ConfigProvider>
      <Modal
        title={
          <Typography.Paragraph className=" font-sans text-xl mx-1">
            Add Documents
          </Typography.Paragraph>
        }
        open={isModalOpen}
        okText="Submit"
        onOk={handleSubmit}
        cancelText="Close"
        onCancel={toggleModal}
      >
        <Form layout="vertical">
          <Space className=" flex items-center justify-between">
            <Form.Item
              label={
                <Typography.Text className="font-sans font-medium">
                  Title
                </Typography.Text>
              }
            >
              <Input
                name="title"
                className="custom-style-input w-56"
                placeholder="About your attachment."
                onChange={handleInputChange}
                value={inputs.title}
              />
            </Form.Item>
            <Form.Item
              label={
                <Typography.Text className=" font-sans font-medium">
                  Department
                </Typography.Text>
              }
            >
              <Select
                placeholder=" Select Department"
                onChange={(value: number) =>
                  setInputs({ ...inputs, department: value })
                }
                style={{ width: 225 }}
                loading={departmentApi.isLoading}
                className=" font-sans text-sm"
                options={departmentOption}
              />
            </Form.Item>
          </Space>
          <Form.Item
            label={
              <Typography.Text className=" font-sans font-medium">
                Description
              </Typography.Text>
            }
          >
            <Input.TextArea
              rows={4}
              value={inputs.description}
              onChange={handleInputChange}
              placeholder="Write a brief description."
              className="custom-style-input"
              name="description"
            />
          </Form.Item>
          <Form.Item
            label={
              <Typography.Text className=" font-sans font-medium">
                Files
              </Typography.Text>
            }
          >
            <Upload.Dragger {...props} listType="picture">
              <InboxOutlined className=" text-6xl text-[#cfd413]" />
              <Typography.Text className="block text-base font-sans">
                Click or drag file to this area to upload
              </Typography.Text>
              <Typography.Text className="block text-sm text-slate-500 font-sans">
                Upload your file by clicking here or dragging it into this area.
              </Typography.Text>
            </Upload.Dragger>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewDocument;
