import React from "react";
import { OurApproach } from "@/utils/data";

export default function Approach() {
  return (
    <div className=" z-20 h-full overflow-hidden bg-[#020D17]">
      <section class="flex h-full flex-col justify-center overflow-hidden bg-[url('/images/BG.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute left-[-90px] top-[830px] z-20 w-[600px] overflow-hidden lg:left-[-650px] lg:top-[600px]  lg:w-[900px]">
          <img
            src="/images/circle.png"
            className="animate-spin-slow w-full opacity-50"
          />
        </div>
        <div class="lg:py-54 top-90 z-50 mx-auto mt-20 w-full text-center lg:w-10/12 lg:px-40">
          <h1 class="mb-4 text-2xl font-bold leading-none tracking-tight text-cyan md:text-2xl lg:text-3xl">
            Futurewater Digital is here to help your<br></br> brand make waves!
          </h1>
          <p class="mb-8 mt-12 font-normal text-white md:text-[14px] lg:text-lg">
            Let Futurewater Digital help you ride the wave of digital
            innovation. We blend traditional marketing wisdom with cutting-edge
            AI to deliver impactful solutions that propel your brand forward.
          </p>
        </div>
        <div className="z-50 flex items-center justify-center">
          <div className="mx-0 flex flex-row p-4 lg:w-10/12">
            <div className="mx-auto flex flex-col items-center gap-4 lg:flex-row">
              {OurApproach.map((items, index) => (
                <>
                  {/* <div className="hidden min-h-[280px] border-r border-white lg:block"></div>
                  <div className="group bg-[#D0EBFF] p-8 lg:min-h-[190px] lg:min-w-[480px]">
                    <h3 className="pb-2 text-2xl font-normal group-hover:text-cyan lg:text-3xl">
                      {items.title}
                    </h3>
                    <p className="text-lg md:text-[14px]">
                      {items.description}
                    </p>
                  </div> */}

                  <div class="flex items-center">
                    {/* <div class="flex-shrink-0">
                      <div class="rounded-full bg-green-500 p-4">
                        <i class="fas fa-lightbulb text-2xl text-white"></i>
                      </div>
                    </div> */}
                    <div class="rounded-lg border-l-4 border-cyan bg-gray-400 p-4 shadow-lg">
                      <h2 class="text-lg font-bold text-cyan">{items.title}</h2>
                      <p class="text-white">{items.description}</p>
                    </div>
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
