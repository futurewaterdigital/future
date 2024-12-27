import React from "react";
import { DigitalMarketing } from "@/utils/data";
import Image from "next/image";
import LottieAnimation from "@/utils/LottieAnimation";

export default function page() {
  return (
    <div className=" z-20 bg-[#020D17] pt-40">
      <div className="grid w-full lg:grid-cols-2">
        <div className="order-2 mx-auto flex w-9/12 flex-col justify-center lg:order-1">
          <h1 class="mb-4 text-3xl font-bold uppercase leading-none tracking-tight text-cyan md:text-3xl lg:text-5xl">
            Digital Marketing
          </h1>

          <p className="text-[14px] text-white lg:text-lg">
            At Futurewater Digital, we harness the power of digital channels to
            elevate your brand&apos;s online presence. Our digital marketing
            services include:
          </p>
        </div>

        <div className="flex justify-center md:order-1 md:items-center md:justify-center lg:order-2">
          {/* <Image
            src="/images/digital-marketing.png"
            width={400}
            height={400}
            alt="Future Water Digital Marketing Agency"
            className="w-[300px] lg:w-full"
          /> */}
          <LottieAnimation
            src="/lottie/digital_marketing.json"
            height={700}
            width={700}
            autoplay={true}
            loop={true}
          />
        </div>
      </div>
      <div className=" z-0 mx-auto grid gap-16 px-4 py-12 md:grid-cols-2 lg:w-10/12 lg:grid-cols-3">
        {DigitalMarketing.map((items, index) => (
          <div className="group relative left-[20px]" key={index}>
            <div className="relative z-0 h-[3.5em] w-full rounded-full bg-[#00FFF3] p-4 sm:h-[3em] md:h-[3em] lg:h-[6.5em]">
              <div className="absolute -left-0 -top-2 z-0 flex w-full items-center justify-center rounded-full bg-white p-4 sm:h-[3em] md:h-[3em] lg:-left-12 lg:-top-0 lg:h-[6.5em] lg:w-[24em]">
                <h2 className="z-0 flex w-full justify-center text-center text-black sm:text-sm md:text-lg lg:text-2xl xl:text-2xl">
                  {items.name}
                </h2>
              </div>
            </div>
            <p className="relative right-[25px] mt-4 rounded-lg p-6 text-[14px] text-white transition-all group-hover:bg-gray-700 lg:max-w-sm lg:text-lg">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
