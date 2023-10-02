import React from "react";
import Layout from "./Layout/Layout";

const Thanks = () => {
  return (
    <Layout>
      <div className="mt-20 min-h-screen flex  items-center justify-center">
        <h1 className="text-xl  border-b-2"> Thanks For Shopping </h1>

        <button className="rounded-full px-3 py-1 text-sm bg-gradient-to-t from-blue-600 to-green-600 mb-0">
          Explore More
        </button>
      </div>
    </Layout>
  );
};

export default Thanks;
