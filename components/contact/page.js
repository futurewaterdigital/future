"use client";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { PiMapPinAreaLight } from "react-icons/pi";
import { PiEnvelopeSimpleThin } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import LottieAnimation from "@/utils/LottieAnimation";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xbljyorb");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSuccess(true);
    }
  }, [state.succeeded]); // Watch for the submission state change

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone number validation regex (Assuming a 10-digit number)
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Form validation
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = "Name is required.";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      formErrors.email = "Please enter a valid email.";
      isValid = false;
    }

    // Phone number validation
    if (!formData.phone.trim()) {
      formErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      formErrors.phone = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      formErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handling form submission, validate before submitting to Formspree
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting to Formspree
    if (validateForm()) {
      // Proceed with Formspree submission
      handleSubmit(e);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="bg-[#020D17] lg:pt-20">
      {/* <section className="h-[40vh] bg-[url('/images/contact-us.png')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto flex h-full items-end px-4 lg:max-w-screen-xl lg:py-40 lg:text-start">
          <h1 className="mb-4 ml-40 text-4xl font-extrabold leading-none tracking-tight text-cyan">
            Contact Us
          </h1>
        </div>
      </section> */}
      <div className="mx-auto grid w-11/12 lg:grid-cols-2 lg:py-24">
        <div className="order-2">
          <h2 className="text-2xl font-bold uppercase text-white">
            Why Choose Futurewater Digital?
          </h2>
          <p className="py-2 text-white">
            At Futurewater Digital, we don&apos;t just create campaigns, we
            cultivate lasting partnerships. We take the time to understand your
            unique business goals and challenges, then develop a data-driven,
            results-oriented strategy tailored to your specific needs.
          </p>
          <p className="py-2 text-white">
            Partner with Futurewater Digital and experience the difference of a
            truly integrated marketing solution. Let&apos;s create the future
            together..
          </p>
          <p className="py-2 text-white">
            Let us help your brand navigate the ever-changing digital landscape
            and achieve success.
          </p>
          <div className="py-8">
            <h3 className="text-xl text-white"></h3>
            <hr />
          </div>

          <div className="mx-auto w-full bg-[#111B2A] lg:w-9/12">
            {success ? (
              <div className="mx-auto flex flex-col items-center justify-center py-12 text-center">
                <Image
                  src="/images/submitted.png"
                  width={400}
                  height={400}
                  className="h-auto"
                  alt="Thank You"
                />
                <h2 className="pt-4 text-2xl text-white">
                  Thank you for contacting us!
                </h2>
                <p className="text-white">We have received your message.</p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit} // Using handleFormSubmit instead of handleSubmit
                className="mx-auto space-y-8 p-4 py-12"
              >
                {/* Name Field */}
                <div className="group relative z-0 mb-5 w-full">
                  <input
                    type="text"
                    name="name"
                    id="floating_name"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="floating_name"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-white dark:text-gray-400 rtl:peer-focus:translate-x-1/4"
                  >
                    Name
                  </label>
                  {errors.name && (
                    <span className="text-sm text-red-500">{errors.name}</span>
                  )}
                </div>

                {/* Email Field */}
                <div className="group relative z-0 mb-5 w-full">
                  <input
                    type="text"
                    name="email"
                    id="floating_email"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-white focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="floating_email"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-white dark:text-gray-400 rtl:peer-focus:translate-x-1/4"
                  >
                    Email address
                  </label>
                  {errors.email && (
                    <span className="text-sm text-red-500">{errors.email}</span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="group relative z-0 mb-5 w-full">
                  <input
                    type="text"
                    name="phone"
                    id="floating_phone"
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-white focus:border-white focus:outline-none focus:ring-0"
                    placeholder=" "
                    value={formData.phone}
                    maxLength={10}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="floating_phone"
                    className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-white dark:text-gray-400 rtl:peer-focus:translate-x-1/4"
                  >
                    Phone Number
                  </label>
                  {errors.phone && (
                    <span className="text-sm text-red-500">{errors.phone}</span>
                  )}
                </div>

                {/* Message Field */}
                <div className="group relative z-0 mb-5 w-full">
                  <textarea
                    id="floating_message"
                    name="message"
                    rows="4"
                    className="block w-full border border-gray-300 bg-gray-500 p-2.5 text-sm text-white focus:border-white focus:ring-white dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <span className="text-sm text-red-500">
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-4 bg-cyan px-5 py-2.5 text-center text-sm font-medium text-black lg:mx-20"
                >
                  Connect With Futurewater Today <FaArrowUp />
                </button>
              </form>
            )}
          </div>
          <div className="pt-8">
            <h3 className="text-xl text-white"></h3>
            <hr />
            <p className="flex items-center gap-4 py-2 pt-8 text-white">
              <BsTelephone color="cyan" /> +91 70190 34456
            </p>

            <p className="flex items-center gap-4 py-2 text-white">
              <PiEnvelopeSimpleThin color="cyan" />{" "}
              quench@futurewaterdigital.com
            </p>
            <p className="flex items-center gap-4 py-2 text-white">
              <PiMapPinAreaLight color="cyan" />
              Sector 7, HSR Layout, Bangalore
            </p>
          </div>
        </div>

        <div className="order-1">
          {" "}
          <LottieAnimation
            src="/lottie/contact_us.json"
            height="100%"
            width="100%"
            autoplay={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
