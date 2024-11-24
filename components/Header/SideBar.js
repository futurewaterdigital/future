"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Import the usePathname hook
import { MainMenu } from "@/utils/data";
import Link from "next/link";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="z-50">
      <div className="text-center">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex size-8 items-center justify-center p-2 text-sm text-cyan hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-cyan hover:focus:ring-black md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={toggleDrawer}
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
        {/* <button
          className="mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={toggleDrawer}
        >
          {isOpen ? "Close drawer" : "Show drawer"}
        </button> */}
      </div>
      {/* Lightbox Background */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity"
          onClick={toggleDrawer} // Close drawer on lightbox click
        ></div>
      )}

      {/* Drawer */}
      <div
        id="drawer-example"
        className={`fixed left-0 top-0 z-40 h-screen w-80 overflow-y-auto bg-gray-200 p-4 transition-transform dark:bg-gray-800 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        <h5
          id="drawer-label"
          className="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            className="me-2.5 h-4 w-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Main Menu
        </h5>
        <button
          type="button"
          onClick={toggleDrawer}
          aria-controls="drawer-example"
          className="absolute end-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="h-3 w-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="h-[80vh]">
          <ul className="flex flex-col border-gray-100  font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            {MainMenu.map((menu, index) => {
              // Check if the current page is part of the "Services" submenu
              const isActiveMenu = router === menu.menuUrl;
              const hasActiveSubmenu = menu.submenu?.some((submenuItem) =>
                router?.startsWith(submenuItem.menuUrl),
              );

              return (
                <li
                  key={index}
                  className={`${isActiveMenu || hasActiveSubmenu ? "border-cyan" : ""} relative border-b-4 border-gray-200 hover:border-b-4 hover:border-cyan`}
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
                        className={`size-3 ${openSubmenu === index ? "rotate-180" : ""}`}
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
        <div className="w-full">
          <Link
            href="/contact-us"
            className="w-full border bg-cyan px-12 py-4 text-black"
          >
            Let`&lsquo;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
