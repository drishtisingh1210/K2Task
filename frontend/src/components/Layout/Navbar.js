import React, { useEffect } from "react";
import * as Heroicons from "heroicons-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
import { toast } from "react-toastify";
import axios from "../axios-config";
import { loadUser, logout } from "../../actions/userActions";
// import Layout from "./Layout";

const Navbar = () => {
  const { pathname } = useLocation();
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // const [logout, setLogout] = useState(false)
  // console.log(cartItems);

  const len = cartItems
    ? cartItems.length === 0
      ? null
      : cartItems.length
    : null;

  const handleLogout = async (req, res) => {
    try {
      dispatch(logout());
      // dispatch(loadUser());
      // const response = await axios.get("/api/user/logout");
      // if (response.status === 200) {
      //   toast.success("Logged out Succesfully", {
      //     theme: "dark",
      //     position: "top-center",
      //   });
      //   navigate("/login");
      // }
    } catch (err) {
      console.log(err);
      toast.error("Failed to Logout", {
        theme: "dark",
        position: "top-center",
      });
    }
  };

  return (
    <div className="mt-20 h-screen w-32 bg-gray-800 text-white fixed top-0 left-0 flex flex-col">
      {/* Navbar content */}
      <div className="py-4">
        <ul>
          <Link to="/">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center justify-between ${
                pathname === "/" ? "bg-gray-500" : ""
              }`}
            >
              Home
              <Heroicons.HomeOutline className="h-5 w-5 ml-1 mr-2 " />
            </li>
          </Link>

          {/* <Link to="/orders">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center ${
                pathname === "/orders" ? "bg-gray-500" : ""
              }`}
            >
              Orders
              <Heroicons.ShoppingBagOutline className="h-5 w-5 ml-1 mr-2" />
            </li>
          </Link> */}
          <Link to="/cart">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center justify-between ${
                pathname === "/cart" ? "bg-gray-500" : ""
              }`}
            >
              Cart
              <Heroicons.ShoppingCartOutline className="h-5 w-5 ml-1 mr-2" />
              {len ? (
                <span className="ml-1 text-yellow-400 ">{len}</span>
              ) : null}
            </li>
          </Link>
          <Link to="/categories">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center  justify-between ${
                pathname === "/categories" ? "bg-gray-500" : ""
              }`}
            >
              Categories
              <Heroicons.BookOpenOutline className="h-5 w-5 ml-1 mr-2 " />
            </li>
          </Link>
          <Link to="/sell">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center justify-between ${
                pathname === "/sell" ? "bg-gray-500" : ""
              }`}
            >
              Create
              <Heroicons.PlusCircleOutline className="h-5 w-5 ml-1 mr-2 " />
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`p-2 hover:bg-gray-700 flex items-center justify-between ${
                pathname === "/contact" ? "bg-gray-500" : ""
              }`}
            >
              Contact Us
              <Heroicons.PhoneOutline className="h-5 w-5 ml-1 mr-2 " />
            </li>
          </Link>
        </ul>
      </div>
      {/* Footer */}
      {isAuthenticated && user ? (
        <div className="p-2">
          <button
            className="w-full bg-red-600 hover:bg-red-700 py-2 rounded"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
