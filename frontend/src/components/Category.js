import React, { useState, useEffect } from "react";
import Layout from "./Layout/Layout";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";
const Category = () => {
  const [categories, setCategory] = useState([]);
  const imgPath = (categoryName) => `images/${categoryName}.jpg`;
  useEffect(() => {
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/api/category/`;
    axios
      .get(apiUrl)
      .then((response) => {
        setCategory(response.data);
        console.log("response", response.data);
      })
      .catch((error) => {
        console.log("Error in fetching data:", error);
      });
  }, []);

  return (
    <Layout>
      <div className=" min-h-screen mt-40 ml-10 mr-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {categories.map((category) => (
          <Link to={`/category/${category.name}`}>
            <CategoryCard
              key={category._id}
              title={category.name}
              image={imgPath(category.name)}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Category;
