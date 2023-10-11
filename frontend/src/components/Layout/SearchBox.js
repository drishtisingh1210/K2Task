import React from "react";
import { useLocation } from "react-router-dom";

const SearchBox = () => {
  const { pathname } = useLocation();
  const isProductPage = pathname.startsWith("/product");

  return (
    <div className="w-full h-20 bg-gray-200 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <span className="font-semibold text-2xl text-gray-800 ">SellBell</span>
        {isProductPage ? (
          <div className="ml-5">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchBox;
