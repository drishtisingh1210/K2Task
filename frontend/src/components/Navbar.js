import React from "react";

const Navbar = () => {
  return (
    <div className="h-screen w-20 bg-gray-800 text-white fixed top-0 right-0 flex flex-col justify-between">
      {/* Navbar content */}
      <div className="py-4">
        <ul>
          <li className="p-2 hover:bg-gray-700">Item 1</li>
          <li className="p-2 hover:bg-gray-700">Item 2</li>
          <li className="p-2 hover:bg-gray-700">Item 3</li>
          {/* Add more list items as needed */}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-2">
        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
