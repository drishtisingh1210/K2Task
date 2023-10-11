import React, { useEffect, useState } from "react";
import Layout from "./Layout/Layout";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const CateogoryDisplay = () => {
  const [categoryData, setCategoryData] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const apiUrl = `http://localhost:3001/api/product/category/${category}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setCategoryData(response.data);
      } catch (error) {
        console.log("Error in fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(categoryData);
  return (
    <Layout>
      <div className="mt-40 ml-10 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData &&
          categoryData.map((item) => (
            <div
              key={item._id}
              className="p-4 animate__animated animate__flipInY"
            >
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default CateogoryDisplay;
