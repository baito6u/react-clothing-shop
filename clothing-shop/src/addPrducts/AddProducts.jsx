import React, { useState } from "react";

export const AddProducts = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImg, setProductImg] = useState("");
  const [error, setError] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    console.log(productName, productPrice, productDescription, productImg);
  }

  return (
    <div className="container">
      <br />
      <h2>ADD PRODUCTS</h2>
      <hr />
      <form autoComplete="off" className="form-group" onSubmit={addProduct}>
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          className="form-control"
          title="product-name"
          required
          onChange={(e) => setProductName(e.target.value)}
          value={productName}
        />
        <br />
        <label htmlFor="product-price">Product Price</label>
        <input
          type="number"
          className="form-control"
          title="product-price"
          required
          onChange={(e) => setProductPrice(e.target.value)}
          value={productPrice}
        />
        <br />
        <label htmlFor="product-description">Product Description</label>
        <input
          type="text"
          className="form-control"
          title="product-description"
          required
          onChange={(e) => setProductDescription(e.target.value)}
          value={productDescription}
        />
        <br />
        <label htmlFor="product-img">Product Image</label>
        <input
          type="text"
          className="form-control"
          title="product-img"
          onChange={(e) => setProductImg(e.target.value)}
          value={productImg}
        />
        <br />
        <button type="submit" className="btn btn-success btn-md mybtn">ADD PRODUCT</button>
      </form>
      {/* {error && <span>{error}</span>} */}
    </div>
  );
};
