import React from "react";
import { GraphicDesign } from "@/utils/data";

export default function page() {
  return (
    <div className="pt-38 grid grid-cols-2 bg-[#020D17] py-12">
      <div className="mx-auto w-10/12 pt-40 text-white">
        <h1 class="text-cyan mb-4 text-5xl font-bold uppercase leading-none tracking-tight">
          Graphic Design
        </h1>
        <p>
          Our graphic design team combines creativity with strategic thinking to
          create visually stunning and impactful designs. Services include:
        </p>

        <div>
          {GraphicDesign.map((items, index) => (
            <div className="space-y-2 py-4" key={index}>
              <h2 className="mb-2 text-2xl uppercase text-[#00FFF3]">
                {items.name}
              </h2>
              <div className="rounded-2xl bg-white p-4 py-4 text-black">
                {items.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <img src="/images/graphic-design.png" className="h-[600px]" />
      </div>
    </div>
  );
}
