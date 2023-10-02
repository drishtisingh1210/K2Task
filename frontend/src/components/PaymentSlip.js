import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSlip = () => {
  const { state } = useLocation();
  const { product } = state;
  //   console.log();
  console.log(product);

  return <div>PaymentSlip</div>;
};

export default PaymentSlip;
