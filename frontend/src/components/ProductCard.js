import React from "react";
import { Link } from "react-router-dom";
import * as Heroicons from "heroicons-react";
import { addItemsToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // const handleBuy = (e) => {
  //   console.log(e);
  // };
  const id = product._id;

  const addToCartHandle = (e) => {
    e.preventDefault();
    dispatch(addItemsToCart(id));
    toast.success("Product added succesfully", {
      theme: "dark",
      position: "top-center",
    });
  };

  const handleBuy = () => {
    dispatch(addItemsToCart(product._id));
  };

  return (
    <Link to={`/product/${product._id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
        <img
          src={
            product.images[0]
              ? `${process.env.REACT_APP_SERVER_URL}/${product.images[0]}`
              : "/images/furniture.jpg"
          }
          alt={product.name}
          className="w-full h-[30vh]"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <span className=" flex items-center  justify-center bg-gray-200 ml-5 rounded px-3 py-1 text-sm font-semibold text-gray-900 mr-2">
          ${product.price}
        </span>
        <div className="px-6 py-4 flex justify-between">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {product.category}
          </span>
          <Link to={`/checkout/${product._id}`}>
            <button
              className="inline-block bg-yellow-200 hover:bg-orange-200 rounded px-3 py-1 text-sm font-semibold text-gray-700"
              onClick={(e) => handleBuy(e)}
            >
              Buy
            </button>
          </Link>

          <button
            onClick={addToCartHandle}
            className=" inline-block bg-purple-200 hover:bg-purple-400 rounded px-3 py-1 text-sm font-semibold text-gray-700 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
