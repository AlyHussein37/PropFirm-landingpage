import Image from "next/image";
import React from "react";

function Services() {
  return (
    <div className=" text-gray-900 dark:text-white py-12 my-10 mt-40 md:mt-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
          <div className="flex justify-center items-center mb-4 gap-2">
            <Image
              src={"/security.png"}
              alt="security"
              width={30}
              height={30}
            />
            <h1 className="text-2xl font-bold">Security Encryption</h1>
          </div>
          <p className="w-1/2 mx-auto">
            State-of-the-art encryption protects all your sensitive data
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg text-center">
          <div className="flex justify-center items-center mb-4 gap-2">
            <Image src={"/privacy.png"} alt="privacy" width={30} height={30} />
            <h1 className="text-2xl font-bold">Privacy Protection</h1>
          </div>

          <p className="w-1/2 mx-auto">
            Stringent measures ensure your information remains confidential
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
