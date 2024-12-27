"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import { MainMenu } from "@/utils/data";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "./SideBar";

export default function Page() {
  // State to manage which submenu is open
  const [openSubmenu, setOpenSubmenu] = useState(null); // Use null instead of number | null

  // Function to toggle submenu
  const toggleSubmenu = (index) => {
    if (openSubmenu === index) {
      setOpenSubmenu(null); // Close the menu if it's already open
    } else {
      setOpenSubmenu(index); // Open the clicked submenu
    }
  };

  // Function to handle submenu item click (closes the menu)
  const handleSubmenuClick = () => {
    setOpenSubmenu(null); // Close the submenu when a submenu item is clicked
  };

  // Get the current route using the usePathname hook
  const router = usePathname();

  return (
    <div>
      <nav className="absolute start-0 top-6 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900 lg:py-4">
        <div className="mx-auto flex max-w-screen-xl flex-row flex-wrap items-center justify-between p-2">
          <Link
            href="/"
            className="flex w-[150px] items-center space-x-3 sm:w-full lg:w-[300px] rtl:space-x-reverse"
          >
            <Image
              src="/images/logo.svg"
              className="h-8 sm:h-6 md:h-8 lg:h-12"
              alt="Futurwater Digital"
              width={300}
              height={100}
            />
          </Link>
          <div className="flex items-center gap-2 md:order-2 md:space-x-0 lg:gap-8 lg:space-x-3 rtl:space-x-reverse">
            <Link
              href="/contact-us"
              type="button"
              className="flex items-center gap-2 bg-cyan px-4 py-2 font-bold sm:px-4 sm:py-2 sm:text-[12px] md:px-6 md:py-2 md:text-sm lg:text-xl"
            >
              Let’s Talk <FaArrowUp />
            </Link>
            <Sidebar />
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              {MainMenu.map((menu, index) => {
                // Check if the current page is part of the "Services" submenu
                const isActiveMenu = router === menu.menuUrl;
                const hasActiveSubmenu = menu.submenu?.some((submenuItem) =>
                  router?.startsWith(submenuItem.menuUrl),
                );

                return (
                  <li
                    key={index}
                    className={`${isActiveMenu || hasActiveSubmenu ? "border-cyan" : ""} relative border-b-4 border-white hover:border-b-4 hover:border-cyan`}
                  >
                    {/* For menu items with no submenus, use a Link component */}
                    {!menu.submenu ? (
                      <Link
                        href={menu.menuUrl}
                        className={`block rounded px-3 py-2 font-normal md:text-sm lg:text-lg  ${
                          isActiveMenu || hasActiveSubmenu
                            ? "font-bold text-cyan"
                            : "text-black"
                        }`} // Add active class based on the current path
                      >
                        {menu.name}
                      </Link>
                    ) : (
                      // For items with a submenu, use a <button> instead of <Link>
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className={`block w-full rounded border-0 bg-transparent px-3 py-2 text-left font-normal md:text-sm lg:text-lg ${
                          isActiveMenu || hasActiveSubmenu
                            ? "font-bold text-cyan"
                            : "text-black"
                        }`}
                      >
                        {menu.name}
                      </button>
                    )}

                    {/* Add button for dropdown toggle */}
                    {menu.submenu && (
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className="absolute -right-1 top-1/2 -translate-y-1/2 transform text-gray-500"
                      >
                        <svg
                          className={`size-3 transition-all ${openSubmenu === index ? "rotate-180" : ""}`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke={`${
                              isActiveMenu || hasActiveSubmenu
                                ? "cyan"
                                : "black"
                            }`}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                    )}

                    {/* Render submenu if it's open */}
                    {openSubmenu === index && menu.submenu && (
                      <ul className="absolute left-0 z-10 mt-2 w-60 rounded-lg bg-white shadow-md dark:bg-gray-700">
                        {menu.submenu.map((submenuItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="border-b-2 border-slate-200"
                          >
                            <Link
                              href={submenuItem.menuUrl}
                              onClick={handleSubmenuClick} // Close submenu when a submenu item is clicked
                              className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                                router === submenuItem.menuUrl
                                  ? "bg-cyan text-sm font-bold"
                                  : "text-gray-700"
                              }`} // Add active class for submenu items
                            >
                              {submenuItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
