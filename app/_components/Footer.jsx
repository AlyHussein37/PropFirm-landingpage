import React from "react";

function Footer() {
  return (
    <div id="contact" className="text-white py-8 mb-10 md:mb-0">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-bold leading-10 mb-8">
          Meet our expert team and have your needs met daily with{" "}
          <span className="text-orange-500">Finitic</span>
        </h1>
        <button className="bg-orange-500 text-gray-900 font-bold rounded-full py-2 px-6 mb-5 hover:bg-orange-600 hover:text-white transition duration-300 ease-in-out">
          Request Now
        </button>
        <div className="flex-col md:flex justify-center items-center mb-5">
          <p className="text-sm">
            &copy; 2024 Finitc Ltd. All Rights Reserved.
          </p>
          <div className="ml-2">
            <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
