import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const PaymentSlip = () => {
  const { state } = useLocation();
  const { cartItems } = state;
  const reportRef = useRef(null);

  const generatePDF = () => {
    if (reportRef.current) {
      html2canvas(reportRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "pt",
          format: "a4",
          putOnlyUsedFonts: true,
          compress: true,
          floatPrecision: "smart",
          precision: 16,
          // Adjust this value to scale the content
        });
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("paymentSlip.pdf");
      });
    }
  };

  return (
    <div className="payment-slip bg-white p-4 border-2 border-gray-300 rounded shadow-lg min-h-screen">
      {state === null ? (
        <div className="mt-24">
          <p>There is Some Problem</p>
        </div>
      ) : (
        <div ref={reportRef} className="w-[50vh]">
          <h2 className="text-2xl font-semibold mb-4 flex justify-center">
            Payment Slip
          </h2>
          {cartItems &&
            cartItems.map((product) => (
              <div key={product.product_id}>
                <table className="table-auto border p-11 flex justify-center">
                  <tbody className="text-xl">
                    <tr>
                      <th>Name:</th>
                      <td> {product.name}</td>
                    </tr>
                    <tr>
                      <th>Description: </th>
                      <td>{product.description}</td>
                    </tr>
                    <tr>
                      <th>Price: </th>
                      <td>${product.price}</td>
                    </tr>
                    <tr>
                      <th>Timestamp: </th>
                      <td>{new Date().toLocaleString()}</td>
                    </tr>
                    <tr>
                      <th>Amount Paid: </th>
                      <td>Yes!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
        </div>
      )}
      <button
        className="bg-blue-500 rounded p-2 mt-5 hover:bg-blue-700 text-white"
        onClick={generatePDF}
      >
        Print Order
      </button>
      <Link to="/">
        <button className="bg-green-500 rounded p-2 mt-5 ml-6 hover:bg-green-700 text-white">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default PaymentSlip;
