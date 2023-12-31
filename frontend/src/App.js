import React from "react";
// import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import SellPage from "./components/SellPage";
import PaymentSlip from "./components/PaymentSlip";
import Category from "./components/Category";
import ProductDetail from "./components/ProductDetail";
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import CateogoryDisplay from "./components/CateogoryDisplay";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { loadUser } from "./actions/userActions";
import { useSelector } from "react-redux";
import PrivateRoute from "./Route/PrivateRoute";
// import ProductCard from "./components/ProductCard";
import store from "./store";

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Products />} />
        <Route
          path="/checkout/:productId"
          element={<PrivateRoute element={<Checkout />} />}
        />
        {/* <Route path="/checkout" element={<Checkout />} /> */}

        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/continueShopping" element={<Thanks />} />
        <Route path="/sell" element={<PrivateRoute element={SellPage} />} />
        <Route
          path="/payment-slip"
          element={<PrivateRoute element={PaymentSlip} />}
        />
        <Route path="/categories" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:category" element={<CateogoryDisplay />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<PrivateRoute element={Checkout} />} />
      </Routes>
      <ToastContainer position="top-center" theme="dark" />
    </>
  );
};

export default App;
