import Image from "next/image";
import React from "react";

function Feature({ title, description, image }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
      <Image
        className="mx-auto my-5"
        src={image}
        alt="icon"
        width={50}
        height={50}
      />
      <h4 className="text-xl font-bold text-orange-500">{title}</h4>
      <p className="mt-2">{description}</p>
    </div>
  );
}

export default Feature;
