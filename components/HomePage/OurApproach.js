import React from "react";
import { OurApproach } from "@/utils/data";

export default function Approach() {
  return (
    <div className="min-h-screen bg-[#020D17]">
      <section class="flex h-full flex-col justify-center bg-[url('/images/approach.png')] bg-cover bg-center bg-no-repeat">
        <div class="py-54 top-90 mx-auto w-10/12 px-40 text-center">
          <h1 class="mb-4 text-5xl font-bold leading-none tracking-tight text-cyan sm:text-4xl md:text-xl lg:text-6xl">
            Let Future Water Digital help your<br></br> brand make waves!
          </h1>
          <p class="mb-8 mt-12 text-lg font-normal text-white">
            Let FutureWater Digital help you ride the wave of digital
            innovation. We blend traditional marketing wisdom with cutting-edge
            AI to deliver impactful solutions that propel your brand forward.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="scrollbar-hide mx-0 flex  w-10/12  overflow-x-auto p-4">
            <div className="scrollbar-hide mx-auto flex items-center gap-4">
              {OurApproach.map((items, index) => (
                <>
                  <div className="h-[280px] border-r border-white"></div>
                  <div className="group h-[190px] w-[480px] bg-[#D0EBFF] p-8">
                    <h3 className="pb-2 text-3xl font-normal group-hover:text-cyan">
                      {items.title}
                    </h3>
                    <p className="text-lg">{items.description}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
