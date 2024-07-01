import React from "react";

function Form() {
  return (
    <div className="w-full md:w-1/2 flex justify-center my-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">
          Schedule Your Demo Now
        </h2>
        <form>
          <div className="mb-2">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="fullName"
              placeholder="Enter Your Full Name"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="companyName"
              placeholder="Enter Your Company Name"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="jobTitle"
              placeholder="Enter Your Job Title"
            />
          </div>
          <div className="mb-2">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="mb-2 flex flex-col md:flex-row space-y-2 md:space-x-2">
            <input
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              id="country"
              placeholder="Select Your Country"
            />
            <input
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              id="phone"
              placeholder="Enter Your Phone"
            />
          </div>
          <div className="mb-2">
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="inquiry"
              placeholder="Select Your Inquiry"
            ></textarea>
          </div>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500" />
              <span className="ml-2 text-gray-700">
                By clicking the button below, you agree to our{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms and Privacy Policy
                </a>
              </span>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-1/2 bg-blue-900 hover:bg-blue-950 text-white py-2 rounded-full mt-2"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
