import React from "react";
import { GraphicDesign } from "@/utils/data";
import Image from "next/image";

export default function page() {
  return (
    <div className="grid bg-[#020D17] py-12 pt-40 lg:grid-cols-2">
      <div className="order-2 mx-auto w-10/12 text-white lg:order-1 lg:pt-40">
        <h1 class="mb-4 text-3xl font-bold uppercase leading-none tracking-tight text-cyan md:text-3xl lg:text-5xl">
          Graphic Design
        </h1>
        <p className="text-[14px] text-white lg:text-lg">
          Our graphic design team combines creativity with strategic thinking to
          create visually stunning and impactful designs. Services include:
        </p>

        <div>
          {GraphicDesign.map((items, index) => (
            <div className="space-y-2 py-4" key={index}>
              <h2 className="mb-2 uppercase text-cyan lg:text-2xl">
                {items.name}
              </h2>
              <div className="rounded-2xl bg-white p-4 text-[14px] text-black lg:text-sm">
                {items.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center sm:order-1 sm:items-center sm:justify-center sm:pt-20 md:order-1 md:items-center md:justify-center md:pt-20 lg:order-2">
        <Image
          src="/images/graphic-design.png"
          width={200}
          height={200}
          alt="Future Water Digital Marketing Agency"
          className="w-[300px] lg:w-full"
        />
      </div>
      {/* 
      <div className="order-1 flex items-center">
        <Image
          src="/images/graphic-design.png"
          className="h-[600px] w-full"
          width={300}
          height={600}
          alt="graphic-design"
        />
      </div> */}
    </div>
  );
}
