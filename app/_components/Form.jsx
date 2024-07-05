import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  dob: Yup.date(),
  city: Yup.string(),
  state: Yup.string(),
  address: Yup.string(),
  zipCode: Yup.string(),
  gender: Yup.string(),
  language: Yup.string(),
  country: Yup.string(),
  phone: Yup.string(),
  termsAgreed: Yup.bool().oneOf([true], "Terms must be accepted")
});

function Form() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      dob: "",
      city: "",
      state: "",
      address: "",
      zipCode: "",
      gender: "",
      language: "",
      country: "",
      phone: "",
      source: "WEBSITE",
      termsAgreed: false,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("https://crm.exinitic.com/api/v1/crm/leads/website", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          toast.success("Form submitted successfully!");
          resetForm();
        } else {
          toast.error("Form submission failed.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("An error occurred while submitting the form.");
      }
    },
  });

  return (
    <div className="w-full md:w-1/2 flex justify-center my-10">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-4 text-black text-center">
          Schedule Your Demo Now
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2 text-left">
            <label htmlFor="fullName">Full Name</label>
            <input
              className="w-full px-4 py-2 my-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="fullName"
              {...formik.getFieldProps('fullName')}
              placeholder="Enter Your Full Name"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div className="mb-2 text-left">
            <label htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 my-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
              placeholder="Enter Your Email Address"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-2 text-left">
            <label htmlFor="dob">Date of Birth</label>
            <input
              className="w-full px-4 py-2 my-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              id="dob"
              {...formik.getFieldProps('dob')}
              min={moment().subtract(110, "years").format("YYYY-MM-DD")}
              max={moment().subtract(18, "years").format("YYYY-MM-DD")}
              placeholder="Enter Your Date of Birth"
            />
            {formik.touched.dob && formik.errors.dob ? (
              <div className="text-red-500 text-sm">{formik.errors.dob}</div>
            ) : null}
          </div>
          <div className="mb-2 flex flex-col md:flex-row md:space-x-2">
            <div className="text-left">
              <label htmlFor="city">City</label>
              <input
                className="w-full mt-1 px-4 py-2 border rounded-lg my-1 md:my-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="city"
                {...formik.getFieldProps('city')}
                placeholder="Enter Your City"
              />
            </div>
            <div className="text-left">
              <label htmlFor="state">State</label>
              <input
                className="w-full mt-1 px-4 py-2 border rounded-lg my-1 md:my-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="state"
                {...formik.getFieldProps('state')}
                placeholder="Enter Your State"
              />

            </div>
          </div>
          <div className="mb-2 flex flex-col md:flex-row md:space-x-2">
            <div className="text-left">
              <label htmlFor="address">Address</label>
              <input
                className="w-full mt-1 px-4 py-2 border rounded-lg my-1 md:my-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="address"
                {...formik.getFieldProps('address')}
                placeholder="Enter Your Address"
              />
            </div>
            <div className="text-left">
              <label htmlFor="zipCode">Zip Code</label>
              <input
                className="w-full mt-1 px-4 py-2 border rounded-lg my-1 md:my-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                id="zipCode"
                {...formik.getFieldProps('zipCode')}
                placeholder="Enter Your Zip Code"
              />

            </div>
          </div>
          <div className="mb-2 text-left">
            <label htmlFor="gender">Gender</label>
            <select
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="gender"
              {...formik.getFieldProps('gender')}
            >
              <option value="" disabled hidden>Enter Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-2 text-left">
            <label htmlFor="language">Language</label>
            <select
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="language"
              {...formik.getFieldProps('language')}
            >
              <option value="" disabled hidden>Enter Your Language</option>
              <option value="en">English</option>
              <option value="ar">عربي</option>
            </select>
          </div>
          <div className="mb-2 flex flex-col md:flex-row md:space-x-2">
            <div className="text-left">
              <label htmlFor="country">Country</label>
              <input
                className="w-full mt-1 px-4 py-2 border rounded-lg my-1 md:my-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                id="country"
                {...formik.getFieldProps('country')}
                placeholder="Enter Your Country"
              />
            </div>
            <div className="text-left">
              <label htmlFor="phone">Phone</label>
              <input
                className="w-full mt-1 px-4 py-2 border rounded-lg my-1 md:my-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="tel"
                id="phone"
                {...formik.getFieldProps('phone')}
                placeholder="Enter Your Phone"
              />

            </div>
          </div>
          <div className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                id="termsAgreed"
                {...formik.getFieldProps('termsAgreed')}
                className="form-checkbox text-blue-500"
              />
              <span className="ml-2 text-gray-700">
                By clicking the button below, you agree to our{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms and Privacy Policy
                </a>
              </span>
            </label>
            {formik.touched.termsAgreed && formik.errors.termsAgreed ? (
              <div className="text-red-500 text-sm">{formik.errors.termsAgreed}</div>
            ) : null}
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
