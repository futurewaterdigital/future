import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-[#020D17]">
      <section class="h-full bg-[url('/images/banner.png')] bg-cover bg-center bg-no-repeat lg:min-h-[80vh]">
        <div class="top-48 mx-auto px-6 pb-28 pt-48 md:w-10/12 lg:w-10/12 lg:pr-48">
          <p className="text-2xl text-white">Ready to make a splash in the</p>
          <h1 class="mb-4 text-4xl font-bold uppercase leading-none tracking-tight text-cyan sm:text-4xl md:text-5xl">
            Digital World?
          </h1>
          <p class="mb-8 font-normal text-white md:text-[14px] lg:text-lg">
            Welcome to Futurewater Digital, a 360-degree digital marketing
            agency built on the perfect blend of experience and innovation. With
            over 20 years of expertise in advertising, communication, and
            digital marketing, we understand the foundational principles that
            drive successful brand growth.
          </p>
          <p class="mb-8 font-normal text-white md:text-[14px] lg:text-lg">
            We don’t stop there - by integrating advanced technology and AI into
            every strategy, we offer clients a forward-looking approach that
            positions them ahead of the competition. 
          </p>
          <p class="mb-8 font-normal text-white md:text-[14px] lg:text-lg">
            The name Futurewater Digital reflects this unique philosophy. Just
            as water is vital for sustaining life, we believe that
            forward-thinking digital solutions are essential for business
            growth. 
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
            <Link
              href="/contact-us"
              class="inline-flex items-center justify-center bg-white px-5 py-3 text-center text-base font-medium text-[#171560] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get in Touch
              <svg
                class="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
