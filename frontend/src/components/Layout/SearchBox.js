import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full h-20 bg-gray-200 p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-center items-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  );
};

export default SearchBox;
