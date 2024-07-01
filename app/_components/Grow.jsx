import Image from "next/image";
import React from "react";

function Grow() {
  return (
    <div className="py-12 px-4 md:px-0">
      <h1 className="text-xl md:text-3xl font-bold text-center w-full md:w-1/3 mx-auto mb-10 leading-10">
        Elevate Your Prop Firm with Our All-Encompassing Lifecycle Management
        Solution
      </h1>
      <div className="bg-gray-300 dark:bg-gray-800 flex flex-col md:flex-row justify-between items-center p-10 rounded-lg shadow-lg">
        <div className="w-full md:w-1/3 text-left mb-6 md:mb-0">
          <h3 className="text-orange-500 text-2xl font-bold mb-4">
            Grow With Our Prop Firm Technology
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Our advanced software ecosystem empowers proprietary trading firms
            at every stage. From a powerful CRM to an intuitive management
            dashboard, our integrated solutions optimize operations and trader
            performance.
          </p>
          <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full transition duration-300">
            Try Demo
          </button>
        </div>
        <div className="w-full md:w-2/3 h-64 md:h-96 relative">
          <Image
            src="/prop firm crm.png"
            alt="prop firm"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Grow;
