import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Layout>
      <div className="min-h-screen mt-20">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={1000}
          infiniteLoop={true}
          showStatus={false}
        >
          <div>
            <img src="images/banner1.jpg" alt="Banner 1" />
          </div>
          <div>
            <img src="images/banner2.jpg" alt="Banner 2" />
          </div>
          <div>
            <img src="images/banner3.jpg" alt="Banner 3" />
          </div>
        </Carousel>
        <div className="bg-gray-100 p-8">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor ligula nec libero placerat, in faucibus nunc vehicula.
            </p>
          </div>
        </div>
        <Link to="/product">
          <div className=" flex items-center justify-center mt-10">
            <button className="border border-purple-400 text-gray py-2 px-4 rounded hover:bg-gradient-blue-purple hover:text-gray-500 transition duration-300 ease-in-out">
              Show Products
            </button>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default HomePage;
