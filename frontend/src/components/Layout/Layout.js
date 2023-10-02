import React from "react";
import Navbar from "./Navbar";

import SearchBox from "./SearchBox";
import Footer from "./Footer";
// import HomePage from "../HomePage";
// import ProductCard from "../ProductCard";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <div className="flex-grow"><Navbar /></div> */}

      <SearchBox />
      <Navbar />
      <div className="ml-32 mb-10 ">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
