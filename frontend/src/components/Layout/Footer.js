import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-blue-600 to-purple-600 mb-0 ">
      <div className="container mx-auto py-8 text-white">
        <div className=" grid grid-cols-3 gap-4 ">
          <div className="text-center">
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Team</li>
              <li>Vouchers</li>
            </ul>
          </div>
          <div className="text-center">
            <ul>
              <li>Discounts</li>
              <li>Policy</li>
              <li>Rules</li>
              <li>More</li>
            </ul>
          </div>
          <div className="text-center">
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Team</li>
              <li>Vouchers</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-3">
          <b>SellBell</b> -a reselling and buying App for you.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
