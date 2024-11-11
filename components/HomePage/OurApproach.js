import React from "react";
import { OurApproach } from "@/utils/data";

export default function Approach() {
  return (
    <div className="h-screen bg-[#020D17]">
      <section class="flex h-[80vh] flex-col justify-center bg-[url('/images/approach.png')] bg-cover bg-center bg-no-repeat">
        <div class="py-54 top-90 mx-auto w-10/12 px-40 text-center">
          <h1 class="text-cyan mb-4 text-5xl font-bold leading-none tracking-tight">
            Let Future Water Digital help your<br></br> brand make waves!
          </h1>
          <p class="mb-8 mt-12 text-lg font-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            mollis aliquam ut porttitor. Massa vitae tortor condimentum lacinia.
            Vulputate dignissim suspendisse in est ante in nibh.
          </p>
        </div>
        <div className="flex justify-end">
          <div className="scrollbar-hide mx-0 flex  w-10/12  overflow-x-auto p-4">
            <div className="scrollbar-hide mx-auto flex items-center gap-4">
              {OurApproach.map((items, index) => (
                <>
                  <div className="h-[280px] border-r border-white"></div>
                  <div className="group h-[190px] w-[480px] bg-[#D0EBFF] p-8">
                    <h3 className="group-hover:text-cyan pb-2 text-3xl font-normal">
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
