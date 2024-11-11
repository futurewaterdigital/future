import React from "react";
import { DigitalMarketing } from "@/utils/data";

export default function page() {
  return (
    <div className="  bg-[#020D17] pt-40">
      <div className="grid w-full grid-cols-2">
        <div className="mx-auto flex w-8/12 flex-col justify-center ">
          <h1 class="text-cyan mb-4 text-5xl font-bold uppercase leading-none tracking-tight">
            Digital Marketing
          </h1>

          <p className="text-white">
            At Future Water Digital, we harness the power of digital channels to
            elevate your brand's online presence. Our digital marketing services
            include:
          </p>
        </div>
        <div>
          <img src="/images/digital-marketing.png" />
        </div>
      </div>
      <div className="mx-auto grid w-11/12 grid-cols-3 gap-8 py-12">
        {DigitalMarketing.map((items, index) => (
          <div className="mx-auto w-11/12">
            <div className="relative z-50 h-[6.5em] w-full rounded-full bg-[#00FFF3] p-4">
              <div className="absolute -left-10 -top-0 z-0 flex h-[6.5em] w-[24em] items-center justify-center rounded-full bg-white p-4">
                <h2 className="ml-10 flex w-full justify-center text-3xl text-black">
                  {items.name}
                </h2>
              </div>
            </div>
            <p className="max-w-sm pt-8 text-white">{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
