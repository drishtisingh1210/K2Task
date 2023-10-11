import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "./Layout/Layout";
import { Link } from "react-router-dom";
// import "./homepage.css";
import RevealOnScroll from "./RevealOnScroll";
// import { Animate } from "tw-elements";
import "animate.css";

// iniTE({ Animate });
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
        <RevealOnScroll>
          <div className="bg-gray-100 p-8 text-center mt-5 animate__animated animate__flipInX">
            <div className="container mx-auto transform translate-y-2 transition-transform duration-1000 ease-in-out">
              <h2 className="text-3xl font-semibold mb-4 animate__animated animate__rubberBand">
                SellBell
              </h2>

              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                auctor ligula nec libero placerat, in faucibus nunc
                vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam auctor ligula nec libero placerat, in faucibus nunc
                vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam auctor ligula nec libero placerat, in faucibus nunc
                vehicula.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Nullam auctor ligula nec libero placerat, in faucibus nunc
                vehicula.
              </p>
            </div>
          </div>
        </RevealOnScroll>
        <h2 className="flex justify-center items-center  border-b-2 text-2xl font-extrabold mt-[5vh]">
          Products
        </h2>
        <RevealOnScroll>
          <div className="flex justify-between items-center p-10 animate__animated animate__backInUp">
            <div className="relative">
              <img
                src="images/pic4.jpeg"
                alt="Image 1"
                className="w-64 h-64 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white text-lg font-semibold">Loreum</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/pic3.jpeg"
                alt="Image 1"
                className="w-64 h-64 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white text-lg font-semibold">Ipsum</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/pic2.jpeg"
                alt="Image 1"
                className="w-64 h-64 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white text-lg font-semibold">Veranie</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="images/Pic1.jpeg"
                alt="Image 1"
                className="w-64 h-64 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 hover:opacity-0 transition-opacity duration-300 flex justify-center items-center">
                <p className="text-white text-lg font-semibold">Locallie</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
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
