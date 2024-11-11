"use client";
import React from "react";
import { FooterMenu } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Page() {
  const router = usePathname();

  return (
    <div className="bg-[#F5F3F3]">
      <div className="mx-auto grid w-11/12 grid-cols-3 py-8">
        <div>
          <Image
            src="/images/logo.svg"
            className="h-20"
            width={200}
            height={200}
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
                className={`hover:text-cyan  py-2 ${router === items.menuUrl ? "text-cyan" : "text-black"}`}
              >
                <Link href={items.menuUrl}>{items.menu}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="pb-4 text-xl text-[#0B608F]">Contact Us</h2>
          <form class=" max-w-sm text-start">
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                <svg
                  class="h-4 w-4 text-gray-500 dark:text-gray-400"
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
                id="email-address-icon"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-4 flex w-11/12 items-center justify-between border-t border-gray-300 py-4">
        <div>© Copyright Futurewater 2024</div>
        <div></div>
      </div>
    </div>
  );
}
