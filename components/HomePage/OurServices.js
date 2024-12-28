import React from "react";
import { OurServices } from "@/utils/data";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import WavesEffect from "@/utils/WaveCanvas";

export default function Service() {
  return (
    <div className="relative h-screen bg-[#020D17] lg:pt-10">
      {/* Waves Background */}
      <div className="absolute inset-0">
        <WavesEffect />
      </div>

      {/* Main Content */}
      <section className="relative z-[1] ">
        <div className="py-54 top-40 mx-auto px-4 text-center lg:w-10/12 lg:px-40">
          <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-cyan md:text-2xl lg:text-3xl">
            Our Services
          </h1>
          <p className="mb-8 text-lg font-normal text-white md:text-[14px] lg:mt-12 lg:text-lg">
            From strategic Digital Marketing to captivating Graphic Design and
            engaging Videography, our services are designed to propel your
            business to new heights.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="mx-auto p-4 lg:w-8/12">
            <div className="grid gap-4 lg:grid-cols-2">
              {OurServices.map((items, index) => (
                <div key={index} className="bg-[#D0EBFF] p-8">
                  <h3 className="pb-2 text-2xl font-normal md:text-2xl lg:text-3xl">
                    {items.name}
                  </h3>
                  <p className="pb-4 md:text-[14px] lg:min-h-[6em] lg:text-[16px]">
                    {items.description}
                  </p>
                  <Link
                    href={items.url}
                    className="text-md group group flex items-center gap-4 bg-[#0C1348] p-2 text-white hover:bg-cyan hover:text-black lg:w-[200px] lg:p-4"
                  >
                    <FaArrowRightLong className="fill-white transition-all group-hover:translate-x-2 group-hover:fill-black" />
                    Know More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
