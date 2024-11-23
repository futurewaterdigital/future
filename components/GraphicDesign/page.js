import React from "react";
import { GraphicDesign } from "@/utils/data";
import Image from "next/image";

export default function page() {
  return (
    <div className="pt-38 grid grid-cols-2 bg-[#020D17] py-12">
      <div className="mx-auto w-10/12 pt-40 text-white">
        <h1 class="mb-4 text-5xl font-bold uppercase leading-none tracking-tight text-cyan">
          Graphic Design
        </h1>
        <p>
          Our graphic design team combines creativity with strategic thinking to
          create visually stunning and impactful designs. Services include:
        </p>

        <div>
          {GraphicDesign.map((items, index) => (
            <div className="space-y-2 py-4" key={index}>
              <h2 className="mb-2 text-2xl uppercase text-cyan">
                {items.name}
              </h2>
              <div className="rounded-2xl bg-white p-4 text-black">
                {items.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center">
        <Image
          src="/images/graphic-design.png"
          className="h-[600px]"
          width={300}
          height={600}
          alt="graphic-design"
        />
      </div>
    </div>
  );
}
