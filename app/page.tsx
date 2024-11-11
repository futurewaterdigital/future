import { DarkThemeToggle } from "flowbite-react";
import HomeBanner from "@/components/HomePage/Banner";
import OurApproach from "@/components/HomePage/OurApproach";
import OurServices from "@/components/HomePage/OurServices";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <OurApproach />
      <OurServices />
    </>
  );
}
