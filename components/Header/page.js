"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import { MainMenu } from "@/utils/data";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";

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
      <nav className="absolute start-0 top-4 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/images/logo.svg"
              className="h-12"
              alt="Futur Water Digital"
              width={300}
              height={100}
            />
          </Link>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/contact-us"
              type="button"
              className="flex items-center gap-2 bg-cyan px-6 py-3 text-xl font-bold"
            >
              Let’s Talk <FaArrowUp />
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex size-20 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
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
                        className={`block rounded px-3 py-2 text-xl font-normal  ${
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
                        className={`block w-full rounded border-0 bg-transparent px-3 py-2 text-left text-xl font-normal ${
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
                        className="absolute -right-4 top-1/2 -translate-y-1/2 transform text-gray-500"
                      >
                        <svg
                          className={`size-5 ${openSubmenu === index ? "rotate-180" : ""}`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
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
                              className={`block px-4 py-2  hover:bg-gray-100 ${
                                router === submenuItem.menuUrl
                                  ? "bg-cyan font-bold"
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
