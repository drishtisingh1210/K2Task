import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout/Layout";
import { Carousel } from "react-responsive-carousel";
import { addItemsToCart } from "../actions/cartActions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const ProductDetail = () => {
  const { productId } = useParams();
  const [prod, setProd] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const Url = `${process.env.REACT_APP_SERVER_URL}/api/product/${productId}`;

    axios
      .get(Url)
      .then((response) => {
        setProd(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  if (prod === null) {
    // Data is loading, show a loading indicator here
    return <div>Loading...</div>;
  }
  console.log(prod);
  const id = productId;
  // Once prod has data, render the component with the product details

  const addToCartHandle = () => {
    dispatch(addItemsToCart(id));
    toast.success("Product added succesfully", {
      theme: "dark",
      position: "top-center",
    });
  };
  const handleBuy = () => {
    dispatch(addItemsToCart(productId));
  };

  return (
    <Layout>
      <div className="flex mt-20 min-h-screen">
        {/* Left Section */}
        <div className="w-1/2">
          <Carousel>
            <div>
              <img src="/images/furniture.jpg" alt="Product" />
            </div>
            <div>
              <img src="/images/furniture2.jpg" alt="Product" />
            </div>
          </Carousel>
        </div>

        {/* Right Section */}
        <div className="w-1/2 mx-auto pl-4 ">
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold">{prod.name}</h2>
            <p className="text-gray-600 text-xl">${prod.price}</p>
            <p className="mt-5">{prod.description}</p>
            <p className="text-green-500 text-xl ">
              {" "}
              Condition: {prod.condition}
            </p>
            <p className="text-blue-500 font-semibold text-xl">
              Category: {prod.category}
            </p>
            <Link to={`/checkout/${prod._id}`}>
              <button
                onClick={handleBuy}
                className="text-2xl mt-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-4"
              >
                Buy
              </button>
            </Link>
            <button
              onClick={addToCartHandle}
              className=" text-2xl mt-8 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-"
            >
              Add to Cart
            </button>
            <ToastContainer position="top-center" theme="dark" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
