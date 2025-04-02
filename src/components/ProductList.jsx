import { useState } from "react";
import { Button, List } from "antd";
import {
  useGetProductQuery,
  useDeleteProductMutation,
} from "../store/Api/productApi";
import AddProduct from "./AddProduct";

function ProductList() {
  const { data: Products = [], isLoading, error } = useGetProductQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error Loading Products...</p>;

  const handleEditClick = (product) => {
    setSelectedProduct(product); 
    setIsModalOpen(true); 
  };

  return (
    <div>
      <h2>Products :</h2>
      <Button
        onClick={() => {
          setSelectedProduct(null); 
          setIsModalOpen(true);
        }}
        type="primary"
      >
        Add Product
      </Button>

      <List
        dataSource={Products}
        renderItem={(product) => (
          <List.Item
            actions={[
              <Button onClick={() => handleEditClick(product)} type="primary">
                Edit
              </Button>,
              <Button onClick={() => deleteProduct({ id: product.id })} danger>
                Delete
              </Button>,
            ]}
          >
            {product.title} - {product.description} - ${product.price}
          </List.Item>
        )}
      />

      <AddProduct
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        initialValues={selectedProduct} 
      />
    </div>
  );
}

export default ProductList;
