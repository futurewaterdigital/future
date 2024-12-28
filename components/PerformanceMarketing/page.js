import React from "react";
import { PerformanceMarketing } from "@/utils/data";
import Image from "next/image";
import LottieAnimation from "@/utils/LottieAnimation";

export default function page() {
  return (
    <div className="bg-[#020D17] pt-10">
      <div className="grid w-full lg:grid-cols-2">
        <div className="order-2 mx-auto flex w-11/12 flex-col justify-center lg:order-1 lg:w-8/12">
          <h1 class="mb-4 text-3xl font-bold uppercase leading-none tracking-tight text-cyan md:text-3xl lg:text-5xl">
            Performance Marketing
          </h1>

          <p className="text-[14px] text-white lg:text-lg">
            We focus on delivering measurable results that directly impact your
            bottom line. Our performance marketing services include:
          </p>
        </div>
        <div className="order-1">
          <LottieAnimation
            src="/lottie/performance_marketing.json"
            height="100%"
            width="100%"
            autoplay={true}
            loop={true}
          />
        </div>
      </div>

      <div className="mx-auto grid w-10/12 gap-8 py-12 lg:grid-cols-2">
        {PerformanceMarketing.map((items, index) => (
          <div
            className="group min-h-[14em] w-full rounded-2xl bg-[#00FFF3] pr-2 pt-2"
            key={index}
          >
            <div className="z-50 flex min-h-[14em] flex-col gap-4 rounded-2xl bg-white p-4 group-hover:scale-105 group-hover:bg-gray-800 group-hover:text-white lg:flex-row">
              <div className="mt-2 ">
                <span className="mt-8 rounded-full border-2 border-black px-4 py-2.5 group-hover:border-white">
                  {items.id}
                </span>
              </div>
              <div className="w-full">
                <h2 className="text-xl text-black group-hover:text-cyan lg:text-2xl">
                  {items.name}
                </h2>
                <p className="pt-8 text-black group-hover:text-white lg:max-w-sm">
                  {items.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
