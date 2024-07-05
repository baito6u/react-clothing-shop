import React, { useState, useEffect } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (err) {
        setError("Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Catalog</h2>
      {error && <p>{error}</p>}
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => navigate(`/details/${product.id}`)}>
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Catalog;