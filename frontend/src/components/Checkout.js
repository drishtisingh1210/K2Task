import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "./Layout/Layout";
import jsPDF from "jspdf";

const Checkout = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const apiUrl = `http://localhost:3001/api/product/${productId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

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

  const handlePay = () => {
    const soldUrl = `http://localhost:3001/api/product/checkProductstatus/${productId}`;
    axios.get(soldUrl).then((response) => {
      if (response.data.sold) {
        alert("This product is already sold out.");
      } else {
        updateProductStauts();
        // generatePdf();

        setTimeout(() => {
          console.log(product);
          navigate("/payment-slip", { state: { product } });
        }, 2000);
      }
    });
  };
  //   const amount = product.price + 100.15 + 80;

  const updateProductStauts = () => {
    axios
      .put(`http://localhost:3001/api/product/mark-as-sold/${productId}`)
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

  return (
    <Layout>
      <div className="mt-20 min-h-screen">
        <div className="border p-4">
          <h1 className="border-b-2 pb-2 text-xl font-semibold">Summary</h1>
          {product ? (
            <div className="flex items-center">
              <img
                src="/images/furniture.jpg"
                alt={product.name}
                className="w-16 h-16 mr-4 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">
                  Description: {product.description}
                </p>
                <p className="text-gray-600">Total Price: ${product.price}</p>
                {/* <p className="text-gray-600">Tax: $100.15</p>
                <p className="text-gray-600">Shipping Charge: $80</p> */}
                {/* <p className="text-gray-600">Total amount:  </p> */}
                {/* Add more product details here */}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          {/* <Link to="/continueShopping"> */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 "
            onClick={handlePay}
          >
            Pay
          </button>
          {/* <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mt-4 "
            onClick={generatePdf}
          >
            Print Order
          </button> */}
          {/* </Link> */}
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
