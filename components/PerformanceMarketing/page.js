import React from "react";
import { PerformanceMarketing } from "@/utils/data";
import Image from "next/image";

export default function page() {
  return (
    <div className="  bg-[#020D17] pt-40">
      <div className="grid w-full grid-cols-2">
        <div className="mx-auto flex w-8/12 flex-col justify-center ">
          <h1 class="mb-4 text-5xl font-bold uppercase leading-none tracking-tight text-cyan">
            Performance Marketing
          </h1>

          <p className="text-white">
            We focus on delivering measurable results that directly impact your
            bottom line. Our performance marketing services include:
          </p>
        </div>
        <div>
          <Image
            src="/images/digital-marketing.png"
            width={500}
            height={500}
            alt="digital-marketing"
          />
        </div>
      </div>
      <div className="mx-auto grid w-10/12 grid-cols-2 gap-8 py-12">
        {PerformanceMarketing.map((items, index) => (
          <div
            className="h-[14em] w-full rounded-2xl bg-[#00FFF3] pr-2 pt-2"
            key={index}
          >
            <div className="z-50 flex h-[14em] gap-4 rounded-2xl bg-white p-4">
              <div className="mt-2 ">
                <span className="mt-8 rounded-full border-2 border-black px-4 py-2.5">
                  {items.id}
                </span>
              </div>
              <div className="">
                <h2 className="text-2xl text-black">{items.name}</h2>
                <p className="max-w-sm pt-8 text-black">{items.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
