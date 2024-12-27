import React from "react";
import { OurApproach } from "@/utils/data";

export default function Approach() {
  return (
    <div className="h-full bg-[#020D17]">
      <section class="flex h-full flex-col justify-center bg-[url('/images/approach.png')] bg-cover bg-center bg-no-repeat">
        <div class="lg:py-54 top-90 mx-auto w-full text-center lg:w-10/12 lg:px-40">
          <h1 class="mb-4 text-2xl font-bold leading-none tracking-tight text-cyan md:text-2xl lg:text-3xl">
            Let Futurewater Digital help your<br></br> brand make waves!
          </h1>
          <p class="mb-8 mt-12 font-normal text-white md:text-[14px] lg:text-lg">
            Let Futurewater Digital help you ride the wave of digital
            innovation. We blend traditional marketing wisdom with cutting-edge
            AI to deliver impactful solutions that propel your brand forward.
          </p>
        </div>
        <div className="flex flex-row justify-end">
          <div className="lg:scrollbar-hide mx-0 flex flex-row p-4 lg:w-10/12 lg:overflow-x-auto">
            <div className="lg:scrollbar-hide mx-auto flex flex-col items-center gap-4 lg:flex-row">
              {OurApproach.map((items, index) => (
                <>
                  <div className="hidden min-h-[280px] border-r border-white lg:block"></div>
                  <div className="group bg-[#D0EBFF] p-8 lg:min-h-[190px] lg:min-w-[480px]">
                    <h3 className="pb-2 text-2xl font-normal group-hover:text-cyan lg:text-3xl">
                      {items.title}
                    </h3>
                    <p className="text-lg md:text-[14px]">
                      {items.description}
                    </p>
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
