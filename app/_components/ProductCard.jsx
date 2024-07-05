import React from "react";

function ProductCard({ title, description }) {
  return (
    <div className="bg-gray-800 p-6 shadow w-[80%] md:w-[100%] mx-auto">
      <h4 className="text-xl font-bold text-orange-500">{title}</h4>
      <p className="mt-2 text-gray-400 h-40">{description}</p>
      <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full">
        Get Demo
      </button>
    </div>
  );
}

export default ProductCard;
