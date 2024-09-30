import CustomSectionHero from "@/app/components/CustomSectionHero";
import Testimonial from "@/app/components/Testimonial";
import AboutHeroSection from "@/app/(pages)/about/AboutHeroSection";
import Faq from "@/app/components/FaqCard";
import We from "@/app/(pages)/about/AboutWe";

import { Metadata } from "next";

export const metadata = {
  title: "  About Us",
  description: "About PEINSO Services",
};

const Page = () => {
  return (
    <section className="flex flex-col gap-6 ">
      <CustomSectionHero
        backgroundVideo={"/2224597_Aerial_Drone_Cruise_1920x1080.mp4"}
        sectionTitle={"About Us"}
        sectionSubTittle={"About PEINSO Services"}
      />
      <AboutHeroSection />
      <We />
      <Testimonial />
      {/* <Faq /> */}
    </section>
  );
};

export default Page;
