import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const handleBuy = () => {
    console.log(product);
  };
  return (
    <Link to={`/product/${product._id}`}>
      <div className="max-w-xs rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105">
        <img src="images/furniture.jpg" alt={product.name} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            ${product.price}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {product.category}
          </span>
          <Link to={`/checkout/${product._id}`}>
            <button
              className="inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
              onClick={handleBuy}
            >
              Buy
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
