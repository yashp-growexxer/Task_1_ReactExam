import { Modal } from "antd";
import ProductForm from "./ProductForm";

const ProductModal = ({ visible, onClose, onSubmit, initialValues }) => {
  return (
    <Modal
      title={initialValues?.id ? "Edit Product" : "Add Product"}
      open={visible}
      onCancel={onClose}
    >
      <ProductForm onSubmit={onSubmit} initialValues={initialValues} />
    </Modal>
  );
};

export default ProductModal;
