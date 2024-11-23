import React from "react";
import { VideoGraphy } from "@/utils/data";
import Image from "next/image";

export default function page() {
  return (
    <div className="pt-38 grid grid-cols-2 bg-[#020D17] py-12">
      <div className="mx-auto w-10/12 pt-40 text-white">
        <h1 class="mb-4 text-5xl font-bold uppercase leading-none tracking-tight text-cyan">
          Videography
        </h1>
        <p>
          Bring your brand’s story to life with our professional videography
          services. We specialise in:
        </p>

        <div>
          {VideoGraphy.map((items, index) => (
            <div className="space-y-2 py-4" key={index}>
              <div className="h-[4.5em] w-full rounded-2xl bg-cyan pr-2">
                <div className="z-50 flex h-[4em] gap-4 rounded-2xl bg-white p-4">
                  <div className="">
                    <h2 className="text-2xl uppercase text-black">
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

      <div className="flex items-center">
        <Image
          src="/images/videography.png"
          width={500}
          height={500}
          alt="videography"
        />
      </div>
    </div>
  );
}
