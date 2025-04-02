import { Modal } from "antd";
import { useAddProductMutation, useEditProductMutation } from "../store/Api/productApi";
import ProductForm from "./ProductForm";

function AddProduct({ visible, onCancel, initialValues }) {
  const [addProduct] = useAddProductMutation();
  const [editProduct] = useEditProductMutation();

  const handleSubmit = async (values) => {
    if (initialValues?.id) {
      await editProduct({ id: initialValues.id, ...values });
    } else {
      await addProduct(values);
    }
    console.log("Form Submitted:", values);
    onCancel();
  };

  return (
    <Modal
      title={initialValues?.id ? "Edit Product" : "Add Product"} 
      open={visible}
      onCancel={onCancel}
      footer={null} 
    >
      <ProductForm onSubmit={handleSubmit} initialValues={initialValues} />
    </Modal>
  );
}

export default AddProduct;
