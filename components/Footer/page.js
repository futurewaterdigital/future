"use client";
import React, { useState } from "react";
import { FooterMenu } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import CollectScript from "@/utils/CollectScript";

export default function Page() {
  const router = usePathname();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [state, handleSubmit] = useForm("mrbgkqbo");

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // console.log(email);
      handleSubmit(e);
      setEmailError(""); // Clear error message
    } else {
      // If email is invalid, set error message
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <div className="bg-[#F5F3F3]">
      <div className="mx-auto grid px-4 py-8 lg:w-11/12 lg:grid-cols-3">
        <div>
          <Image
            src="/images/logo.svg"
            className="h-20"
            width={200}
            height={200}
            alt="Future Water Digital Marketing Services"
          />
        </div>
        <div className="flex flex-col justify-center text-center">
          <h2 className="pb-4 text-start text-xl text-[#0B608F]">
            Our Services
          </h2>
          <ul className="text-start">
            {FooterMenu.map((items, index) => (
              <li
                key={index}
                className={`py-2 hover:text-[#00C4C4] ${
                  router === items.menuUrl ? "text-[#00C4C4]" : "text-black"
                }`}
              >
                <Link href={items.menuUrl}>{items.menu}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="pb-4 text-xl text-[#0B608F]">Contact Us</h2>
          <form className="max-w-sm text-start" onSubmit={handleFormSubmit}>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                <svg
                  className="size-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                // id="email"
                name="email"
                id="email-address-icon"
                className="block h-12 w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
              />
              <button
                type="submit"
                className="absolute right-1 top-2 rounded-lg bg-[#00C4C4] p-1.5 text-sm"
              >
                Submit
              </button>
            </div>
          </form>

          {emailError && (
            <p className="mt-2 text-sm text-red-500">{emailError}</p>
          )}

          {state.succeeded && (
            <p className="mt-2 text-sm text-green-500">
              Thank you! Your email has been submitted.
            </p>
          )}
        </div>
      </div>
      <FloatingWhatsApp
        phoneNumber="7019034456"
        accountName="Futurewater"
        avatar="/images/whatapp-logo.jpg"
        statusMessage="Futurewater Digital"
        chatMessage="Welcome to Futurewater Digital How can we help you?"
        placeholder="Send your query"
      />
      <div className="mx-auto mt-4 flex w-11/12 items-center justify-between border-t border-gray-300 py-4">
        <div>© Copyright Futurewater 2024</div>
        <div className="flex gap-2">
          <Link
            href="https://www.facebook.com/share/19wdGG1p7N/?mibextid=qi2Omg"
            target="_blank"
          >
            <FaFacebookSquare size={22} />
          </Link>
          <FaXTwitter size={22} />
          <Link
            href="https://www.instagram.com/future_water_digital/profilecard/?igsh=MXJwcXA5eTdueXo3aw=="
            target="_blank"
          >
            <FaInstagram size={22} />
          </Link>
          <FaLinkedin size={22} />
        </div>
      </div>
      {/* <CollectScript /> */}
    </div>
  );
}
