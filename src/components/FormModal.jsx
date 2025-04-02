import React, { useState, useEffect } from "react";

const ProductModal = ({ isOpen, onClose, onSubmit, productData, isViewMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (productData) {
      setFormData(productData);
    }
  }, [productData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isViewMode) onSubmit(formData);
  };

  if (!isOpen) return null; 

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{isViewMode ? "View Product" : productData ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={handleSubmit}>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isViewMode}
            required
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            disabled={isViewMode}
            required
          />

          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            disabled={isViewMode}
            required
          />

          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            disabled={isViewMode}
          />

          {!isViewMode && <button type="submit">{productData ? "Update" : "Add"}</button>}
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
