import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="grid h-screen grid-cols-2 overflow-hidden bg-[#020D17]">
      <div className="mx-auto w-10/12 pt-40 text-white">
        <h1 class="mb-4 text-5xl font-bold leading-none tracking-tight text-cyan">
          About Us
        </h1>
        <p>
          At Futurewater Digital, we’re dedicated to leading our clients into a
          prosperous future, harnessing the power of technology and the
          reliability of time-tested marketing expertise.
        </p>
        <p className="py-4">
          Our approach combines proven marketing strategies with cutting-edge
          technology to navigate the ever-evolving digital landscape and drive
          tangible results. Whether it’s SEO, SEM, social media, design, or
          development, we leverage our experience and innovation to create
          impactful campaigns tailored to each client’s needs. 
        </p>
        <p className="py-4">
          Each member of our team is a seasoned professional, bringing a wealth
          of knowledge and specialised expertise that drives our success. Our
          proven track record in performance marketing has delivered exceptional
          results for our clients, ensuring their success in an ever-evolving
          digital landscape. 
        </p>
        <p className="py-4">
          Beyond performance marketing, we offer a comprehensive suite of
          services, including SEO, SEM, SMM, Design & Development and
          Videography, all leveraging the latest technologies and best practices
          in the industry.
        </p>
        <p>
          Partner with us, and let’s shape a future where your brand thrives,
          backed by the essentials of expert strategy and innovative technology.
        </p>
      </div>
      <div>
        <Image
          src="/images/about-us.png"
          width={200}
          height={200}
          alt="Future Water Digital Marketing Agency"
          className="w-full"
        />
      </div>
    </div>
  );
}
