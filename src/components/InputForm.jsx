import { Form, Input } from "antd";

const InputForm = ({ label, title, reqd, ...rest }) => {
  return (
    <Form.Item 
      label={label} 
      title={title} 
      rules={reqd ? [{ required: true, message: `${label} is required!` }] : []}
    >
      <Input {...rest} />
    </Form.Item>
  );
};

export default InputForm;
