import React from "react";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import SellPage from "./components/SellPage";
import PaymentSlip from "./components/PaymentSlip";
import Category from "./components/Category";
import ProductDetail from "./components/ProductDetail";
// import ProductCard from "./components/ProductCard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/product" element={<Products />} />
      <Route path="/checkout/:productId" element={<Checkout />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/continueShopping" element={<Thanks />} />
      <Route path="/sell" element={<SellPage />} />
      <Route path="/payment-slip" element={<PaymentSlip />} />
      <Route path="/categories" element={<Category />} />
    </Routes>
  );
};

export default App;
