import React from "react";

const CategoryCard = ({ title }) => {
  return (
    <div className="relative group ">
      {/* Card */}
      <div className="w-68 h-58 relative overflow-hidden transition-transform transform hover:scale-105">
        {/* Image */}
        <img
          src="images/furniture2.jpg"
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-gray-700">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
