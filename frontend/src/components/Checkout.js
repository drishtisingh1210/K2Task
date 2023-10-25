import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Layout from "./Layout/Layout";
import jsPDF from "jspdf";
import { resetState } from "../actions/cartActions";
// import { response } from "../../../backend/app";

const Checkout = () => {
  const { productId } = useParams();
  const { cartItems } = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.user);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const productIds = [];

  // useEffect(() => {
  //   const apiUrl = `http://localhost:3001/api/product/${productId}`;

  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching product data:", error);
  //     });
  // }, [productId]);

  const generatePdf = () => {
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.text(20, 20, "Order Summary");
    pdf.text(20, 30, `Product Name: ${product.name}`);
    pdf.text(20, 40, `Description: ${product.description}`);
    pdf.text(20, 50, `Total Price: $${product.price}`);

    // Save the PDF with a unique filename (e.g., using the product name and date)
    const filename = `${product.name}_Order_Summary.pdf`;
    pdf.save(filename);
  };

  // const handlePay = () => {
  //   const soldUrl = `http://localhost:3001/api/product/checkProductstatus/${productId}`;
  //   axios.get(soldUrl).then((response) => {
  //     if (response.data.sold) {
  //       alert("This product is already sold out.");
  //     } else {
  //       updateProductStauts();
  //       // generatePdf();

  //       setTimeout(() => {
  //         console.log(product);
  //         navigate("/payment-slip", { state: { product } });
  //       }, 2000);
  //     }
  //   });
  // };
  const productIds = cartItems.map((item) => {
    return item.product;
  });

  const handlePay = () => {
    cartItems.map((item) => {
      const soldUrl = `${process.env.REACT_APP_SERVER_URL}/api/product/checkProductstatus/${item.product}`;
      axios.get(soldUrl).then((response) => {
        if (response.data.sold) {
          alert("This product is already sold out.");
        } else {
          // Assuming updateProductStatus is a function you have defined elsewhere
          updateProductStauts(item.product); // Make sure this function is available in the scope
          // Assuming product is defined in the scope
          navigate("/payment-slip", { state: { cartItems } });
        }
      });
    });
    dispatch(resetState());
  };
  const updateProductStauts = (productId) => {
    axios
      .put(
        `${process.env.REACT_APP_SERVER_URL}/api/product/mark-as-sold/${productId}`
      )
      .then((response) => {
        if (response.data.success) {
          alert("Payment successful.Product marked as sold.");
        } else {
          console.error("Failed to mark the product as sold");
        }
      })
      .catch((error) => {
        console.error("Error marking product as sold:", error);
      });
  };
  //   const amount = product.price + 100.15 + 80;

  const handlePayment = async () => {
    try {
      const payUrl = `${process.env.REACT_APP_SERVER_URL}/api/product/payment`;
      const payload = {
        productIds: productIds,
      };
      const response = await axios.put(payUrl, payload);
      if (response.data.success) {
        console.log("Payment Successful.");
        setTimeout(() => {
          console.log(product); // Assuming product is defined in the scope
          navigate("/payment-slip", { state: { cartItems } });
        }, 2000);
        dispatch(resetState());
        // productIds = [];
      } else {
        console.log("Payment Failed");
      }
    } catch (error) {
      console.log("Some Error in Payment:", error);
    }
  };

  console.log(cartItems);
  return (
    <Layout>
      <div className="mt-20 min-h-screen">
        <div className="border p-4">
          <h1 className="border-b-2 pb-2 text-xl font-semibold">Summary</h1>
          {cartItems ? (
            cartItems.map((item) => (
              <div className="flex items-center">
                <img
                  src={
                    item.image
                      ? `${process.env.REACT_APP_SERVER_URL}/${item.image}`
                      : "/images/furniture.jpg"
                  }
                  alt={item.name}
                  className="w-16 h-16 mr-4 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">
                    Description: {item.description}
                  </p>
                  <p className="text-gray-600">Total Price: ${item.price}</p>
                  {/* <p className="text-gray-600">Tax: $100.15</p>
    <p className="text-gray-600">Shipping Charge: $80</p> */}
                  {/* <p className="text-gray-600">Total amount:  </p> */}
                  {/* Add more product details here */}
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 "
            onClick={handlePayment}
          >
            Pay
          </button>
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 "
            onClick={generatePdf}
          >
            Print Order
          </button> */}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
