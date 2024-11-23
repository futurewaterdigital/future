import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="min-h-screen bg-[#020D17]">
      <section class="min-h-[80vh] bg-[url('/images/banner.png')] bg-cover bg-center bg-no-repeat">
        <div class="py-54 absolute top-48 w-9/12 px-40">
          <p className="text-2xl text-white">Ready to make a splash in the</p>
          <h1 class="mb-4 text-7xl font-bold uppercase leading-none tracking-tight text-cyan">
            Digital World?
          </h1>
          <p class="mb-8 text-lg font-normal text-white">
            Welcome to Futurewater Digital, a 360-degree digital marketing
            agency built on the perfect blend of experience and innovation. With
            over 20 years of expertise in advertising, communication, and
            digital marketing, we understand the foundational principles that
            drive successful brand growth.
          </p>
          <p class="mb-8 text-lg font-normal text-white">
            We don’t stop there - by integrating advanced technology and AI into
            every strategy, we offer clients a forward-looking approach that
            positions them ahead of the competition. 
          </p>
          <p class="mb-8 text-lg font-normal text-white">
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
