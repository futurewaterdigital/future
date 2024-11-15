import React from "react";
import { OurApproach, OurServices } from "@/utils/data";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Service() {
  return (
    <div className="h-screen bg-[#020D17]">
      <section class="h-[80vh] bg-[url('/images/service.png')] bg-cover bg-center bg-no-repeat">
        <div class="py-54 top-40 mx-auto w-10/12 px-40 text-center">
          <h1 class="text-cyan mb-4 text-5xl font-bold leading-none tracking-tight">
            Our Services
          </h1>
          <p class="mb-8 mt-12 text-lg font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            mollis aliquam ut porttitor. Massa vitae tortor condimentum lacinia.
            Vulputate dignissim suspendisse in est ante in nibh.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="mx-auto w-8/12 p-4">
            <div className="grid grid-cols-2 gap-4">
              {OurServices.map((items, index) => (
                <>
                  <div className=" bg-[#D0EBFF] p-8">
                    <h3 className="pb-2 text-3xl font-normal">{items.name}</h3>
                    <p className="h-[6em] pb-4 text-[16px]">
                      {items.description}
                    </p>
                    <Link
                      href={items.url}
                      className="text-md hover:bg-cyan group flex w-[200px] items-center gap-4 bg-[#0C1348] p-4 text-white hover:text-black"
                    >
                      <FaArrowRightLong className="fill-white group-hover:fill-black" />{" "}
                      Know More
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
