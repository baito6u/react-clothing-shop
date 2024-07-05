import React from "react";
import { useParams } from "react-router-dom";
import AddProduct from "../components/User/AddProduct";
import EditProduct from "../components/User/EditProduct";

const AddEditProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      {id ? <h1>Edit Product</h1> : <h1>Add Product</h1>}
      {id ? <EditProduct id={id} /> : <AddProduct />}
    </div>
  );
};

export default AddEditProductPage;