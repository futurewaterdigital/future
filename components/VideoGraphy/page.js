import React from "react";
import { VideoGraphy } from "@/utils/data";
import Image from "next/image";

export default function page() {
  return (
    <div className="grid bg-[#020D17] py-12 pt-40 lg:grid-cols-2">
      <div className="order-2 mx-auto flex flex-col justify-center px-4 lg:order-1 lg:w-9/12">
        <h1 class="mb-4 text-3xl font-bold uppercase leading-none tracking-tight text-cyan md:text-3xl lg:text-5xl">
          Videography
        </h1>
        <p className="text-[14px] text-white lg:text-lg">
          Bring your brand’s story to life with our professional videography
          services. We specialise in:
        </p>

        <div>
          {VideoGraphy.map((items, index) => (
            <div className="space-y-2 py-4" key={index}>
              <div className="h-[4.5em] w-full rounded-2xl bg-cyan pr-2">
                <div className="z-50 flex h-[4em] gap-4 rounded-2xl bg-white p-4">
                  <div className="">
                    <h2 className="uppercase text-black sm:text-sm md:text-lg lg:text-2xl xl:text-2xl">
                      {items.name}
                    </h2>
                  </div>
                </div>
              </div>

              <div className=" mt-2 text-white">{items.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:order-1 md:items-center md:justify-center md:pt-20 lg:order-2">
        <Image
          src="/images/videography.png"
          width={200}
          height={200}
          alt="Future Water Digital Marketing Agency"
          className="w-[300px] lg:w-full"
        />
      </div>
    </div>
  );
}
