import React, { useState, useEffect } from "react";
// import productData from "../productData.json";
import ProductCard from "./ProductCard";
import Layout from "./Layout/Layout";
import axios from "axios";
// import Cart from "./Cart";
// import { CartContext } from "../context/cart.jsx";
// import RevealOnScroll from "./RevealOnScroll";

const Products = () => {
  const [productData, setData] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/api/product";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data:", error);
      });
  }, []);
  productData.map((product) => {
    console.log(product.images);
  });
  return (
    <Layout>
      <div className=" mt-40 ml-10 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-screen ">
        {productData.map((product) => (
          <div
            key={product.id}
            className="p-4 animate__animated animate__flipInY"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
