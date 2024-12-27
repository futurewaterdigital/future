import React from "react";
import Image from "next/image";
import LottieAnimation from "@/utils/LottieAnimation";

export default function page() {
  return (
    <div className="grid overflow-hidden bg-[#020D17] lg:grid-cols-2">
      <div className="order-2 mx-auto px-4 text-white md:order-2 lg:order-1 lg:pl-10 lg:pt-40">
        <h1 class="mb-4 text-3xl font-bold uppercase leading-none tracking-tight text-cyan md:text-3xl lg:text-5xl">
          About Us
        </h1>
        <p className="md:text-[14px] lg:text-lg">
          At Futurewater Digital, we’re dedicated to leading our clients into a
          prosperous future, harnessing the power of technology and the
          reliability of time-tested marketing expertise.
        </p>
        <p className="py-4 md:text-[14px] lg:text-lg">
          Our approach combines proven marketing strategies with cutting-edge
          technology to navigate the ever-evolving digital landscape and drive
          tangible results. Whether it’s{" "}
          <span className="text-cyan">
            SEO, SEM, Social Media, Design, or Development
          </span>
          , we leverage our experience and innovation to create impactful
          campaigns tailored to each client’s needs. 
        </p>
        <p className="py-4 md:text-[14px] lg:text-lg">
          Each member of our team is a seasoned professional, bringing a wealth
          of knowledge and specialised expertise that drives our success. Our
          proven track record in performance marketing has delivered exceptional
          results for our clients, ensuring their success in an ever-evolving
          digital landscape. 
        </p>
        {/* <p className="py-4 md:text-[14px] lg:text-lg">
          Beyond performance marketing, we offer a comprehensive suite of
          services, including SEO, SEM, SMM, Design & Development and
          Videography, all leveraging the latest technologies and best practices
          in the industry.
        </p> */}
        <p className="py-4 md:text-[14px] lg:text-lg">
          Partner with us, and let’s shape a future where your brand thrives,
          backed by the essentials of expert strategy and innovative technology.
        </p>
      </div>
      <div className="order-1 flex pt-40 md:order-1 md:items-center md:justify-center lg:order-2">
        {/* <Image
          src="/images/about-us.png"
          width={400}
          height={400}
          alt="Future Water Digital Marketing Agency"
          className="w-[300px] lg:w-full"
        /> */}
        <LottieAnimation
          src="/lottie/about_us.json"
          height={550}
          width={550}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
}
