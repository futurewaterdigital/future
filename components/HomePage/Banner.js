import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="overflow-hidden bg-[#020D17]">
      <section className="z-10 h-full overflow-hidden bg-[url('/images/BG.jpg')] bg-cover bg-center bg-no-repeat lg:min-h-[80vh]">
        {/* Spinning Image */}
        <div className="absolute right-[-600px] z-0 w-[900px] overflow-hidden">
          <img
            src="/images/circle.png"
            className="animate-spin-slow w-full overflow-hidden opacity-50"
          />
        </div>

        {/* Text Content */}
        <div className="relative top-48 z-50 mx-auto px-6 pb-28 pt-48 md:w-10/12 lg:w-10/12 lg:pr-48">
          <p className="text-2xl text-white">Ready to make a splash in the</p>
          <h1 className="mb-4 text-4xl font-bold uppercase leading-none tracking-tight text-cyan sm:text-4xl md:text-5xl">
            Digital World?
          </h1>
          <p className="mb-8 font-normal text-white md:text-[14px] lg:text-lg">
            Welcome to Futurewater Digital, a 360-degree digital marketing
            agency built on the perfect blend of experience and innovation. With
            over 20 years of expertise in advertising, communication, and
            digital marketing, we understand the foundational principles that
            drive successful brand growth.
          </p>
          <p className="mb-8 font-normal text-white md:text-[14px] lg:text-lg">
            We don’t stop there - by integrating advanced technology and AI into
            every strategy, we offer clients a forward-looking approach that
            positions them ahead of the competition. 
          </p>
          <p className="mb-8 font-normal text-white md:text-[14px] lg:text-lg">
            The name Futurewater Digital reflects this unique philosophy. Just
            as water is vital for sustaining life, we believe that
            forward-thinking digital solutions are essential for business
            growth. 
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-start sm:space-y-0">
            <Link
              href="/contact-us"
              className="hover:bg-white-800 group inline-flex items-center justify-center border bg-white px-5 py-3 text-center text-base font-medium text-[#171560] hover:border-white hover:bg-transparent hover:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get in Touch
              <svg
                className="ms-2 h-3.5 w-3.5 transition-all group-hover:translate-x-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
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
