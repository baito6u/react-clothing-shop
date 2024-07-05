import React, { useState, useEffect } from "react";
import { db } from "../..//config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const product = docSnap.data();
          setName(product.name);
          setPrice(product.price);
          setDescription(product.description);
        } else {
          setError("No such product!");
        }
      } catch (err) {
        setError("Failed to fetch product details");
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDoc(doc(db, "products", id), {
        name,
        price,
        description,
      });
      navigate("/dashboard");
    } catch (err) {
      setError("Failed to update product");
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;