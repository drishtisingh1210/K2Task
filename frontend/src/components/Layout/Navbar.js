import React from "react";
import * as Heroicons from "heroicons-react";
import { Link, useLocation } from "react-router-dom";
// import Layout from "./Layout";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="mt-20 h-screen w-32 bg-gray-800 text-white fixed top-0 left-0 flex flex-col justify-between">
      {/* Navbar content */}
      <div className="py-4">
        <ul>
          <Link to="/">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center ${
                pathname === "/" ? "bg-gray-500" : ""
              }`}
            >
              Home
              <Heroicons.HomeOutline className="h-5 w-5 ml-1 mr-2 " />
            </li>
          </Link>

          <Link to="/orders">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center ${
                pathname === "/orders" ? "bg-gray-500" : ""
              }`}
            >
              Orders
              <Heroicons.ShoppingBagOutline className="h-5 w-5 ml-1 mr-2" />
            </li>
          </Link>
          <Link to="/cart">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center ${
                pathname === "/cart" ? "bg-gray-500" : ""
              }`}
            >
              Cart
              <Heroicons.ShoppingCartOutline className="h-5 w-5 ml-1 mr-2" />
            </li>
          </Link>
          <Link to="/categories">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center ${
                pathname === "/categories" ? "bg-gray-500" : ""
              }`}
            >
              Categories
              <Heroicons.BookOpenOutline className="h-5 w-5 ml-1 mr-2 " />
            </li>
          </Link>
          <Link to="/sell">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center ${
                pathname === "/sell" ? "bg-gray-500" : ""
              }`}
            >
              Sell
              <Heroicons.PlusCircleOutline className="h-5 w-5 ml-1 mr-2 " />
            </li>
          </Link>
        </ul>
      </div>

      {/* Footer */}
      <div className="p-2">
        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded">
          SellBell
        </button>
      </div>
    </div>
  );
};

export default Navbar;
