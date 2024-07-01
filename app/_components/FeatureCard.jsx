import Image from "next/image";
import React from "react";

function FeatureCard({ title, description, image, reverse }) {
  return (
    <div
      className={`bg-white dark:bg-gray-900 p-6 my-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-center gap-10 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2 text-left">
        <h4 className="text-xl font-bold text-orange-500">{title}</h4>
        <p className="mt-2">{description}</p>
        <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full">
          Get Demo
        </button>
      </div>
      <div className="w-full md:w-1/2 h-72 relative overflow-hidden">
        <Image
          className="object-cover object-center scale-150"
          src={image}
          alt="icon"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default FeatureCard;
