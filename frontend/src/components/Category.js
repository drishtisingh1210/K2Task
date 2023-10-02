import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import axios from "axios";
import CategoryCard from "./CategoryCard";
const Category = () => {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:3001/api/category/";
    axios
      .get(apiUrl)
      .then((response) => {
        setCategory(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data:", error);
      });
  }, []);

  return (
    <Layout>
      <div className=" min-h-screen mt-40 ml-10 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category._id} title={category.name} />
        ))}
      </div>
    </Layout>
  );
};

export default Category;
