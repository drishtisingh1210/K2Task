import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart } from "../actions/cartActions";
import Layout from "./Layout/Layout";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
    toast.warning("Product has been removed", {
      theme: "dark",
      position: "top-center",
    });
  };

  return (
    <Layout className="min-h-screen">
      {cartItems.length === 0 ? (
        <div className="animate__animated animate__shakeX m-36 ml-56 border rounded h-56 w-1/2 flex justify-center items-center bg-gray-200 ">
          <p className=" text-2xl font-bold"> Cart is Empty</p>
        </div>
      ) : (
        <div className="mt-24 min-h-screen">
          <h1 className="border-b-2 pb-2 text-xl font-semibold flex justify-center">
            Your Cart
          </h1>
          {cartItems &&
            cartItems.map((item) => (
              <div>
                <CartItem
                  key={item._id}
                  product={item}
                  deleteCartItems={deleteCartItems}
                />
              </div>
            ))}
          <Link to="/checkout">
            <div className="mt-5 flex justify-center items-center">
              <button className="text-xl bg-blue-500 text-white rounded p-2 hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </Link>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
