import React, { useState } from "react";
import SearchBox from "./Layout/SearchBox";
import * as Heroicons from "heroicons-react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Layout/Footer";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //!--------------------------------------------------
  //!Same Problem here
  //!--------------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.preventDefault());
    // Here, you can implement your signup logic, e.g., sending data to the server.
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        formData,
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        console.log("Logged in");
        toast.success("Thanks for Login", {
          theme: "dark",
          position: "top-center",
        });
        setFormData({
          email: "",
          password: "",
        });
        //   } else if (response.status === 404) {
        //     toast.warning("Id or Password not correct", {
        //       theme: "dark",
        //       position: "top-center",
        //     });
        //   } else {

        //     console.log("Failed to Login");

        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.warning(
        err?.response?.data?.message
          ? err?.response?.data?.message
          : "Error found",
        {
          theme: "dark",
          position: "top-center",
        }
      );
    }
  };

  return (
    <div>
      <SearchBox />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8 border-[1px] border-indigo-500 p-10 rounded shadow-2xl  shadow-indigo-500/50">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Log in to your Account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="p-2">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={handleChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="p-2 relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={seePassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={handleChange}
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10"
                  placeholder="Password"
                />
                {seePassword ? (
                  <Heroicons.EyeOffOutline
                    onClick={() => setSeePassword(!seePassword)}
                    className="absolute right-3 top-3 cursor-pointer text-indigo-600 z-10"
                  />
                ) : (
                  <Heroicons.EyeOutline
                    onClick={() => setSeePassword(!seePassword)}
                    className="absolute right-3 top-3 cursor-pointer text-indigo-600"
                  />
                )}
              </div>
            </div>

            <div className="p-2">
              <button
                type="submit"
                className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Log In
              </button>
            </div>
            <Link to="/signup">
              <div className="flex items-center justify-center">
                <p className="text-sm ">Don't have an account? </p>

                <span className="text-sm text-indigo-800 ml-2">Sign up</span>
              </div>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
