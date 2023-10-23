import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const { pathname } = useLocation();
  const isProductPage = pathname.startsWith("/product");
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(user);
  console.log(isAuthenticated);

  return (
    <div className="w-full h-20 bg-gray-200 p-4 fixed top-0 left-0 right-0 z-10 flex">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <span className="font-semibold text-2xl text-gray-800 flex  ">
            SellBell
          </span>
        </Link>
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
      <div>
        {isAuthenticated && user ? (
          <span> {user.email}</span>
        ) : (
          <div className="flex items-end justify-end pt-4 text-lg text-gray-800 hover:text-blue-600">
            <Link to="/signup">
              <span>SignUp</span>
            </Link>
            /
            <Link to="/login">
              <span>LogIn</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
