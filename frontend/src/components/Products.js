import React, { useState, useEffect } from "react";
// import productData from "../productData.json";
import ProductCard from "./ProductCard";
import Layout from "./Layout/Layout";
import axios from "axios";

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

  return (
    <Layout>
      <div className=" mt-40 ml-10 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default Products;
