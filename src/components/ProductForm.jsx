import { Form, Input, Button } from "antd";

const ProductForm = ({ onSubmit, initialValues = {} }) => {
  return (
    <Form layout="vertical" initialValues={initialValues} onFinish={onSubmit}>
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      
      <Form.Item name="category" label="Category">
        <Input />
      </Form.Item>

      <Form.Item name="price" label="Price" rules={[{ required: true }]}>
        <Input type="number" />
      </Form.Item>

      <Form.Item name="rating" label="Rating">
        <Input />
      </Form.Item>

      <Form.Item name="stock" label="Stock">
        <Input />
      </Form.Item>

      <Form.Item name="brand" label="Brand">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">Save Product</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
