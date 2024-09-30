import Contact from "@/app/components/Contact";
import CustomSectionHero from "@/app/components/CustomSectionHero";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col gap-10">
      <CustomSectionHero
        sectionSubTittle={"Get in touch with us"}
        sectionTitle={"Contacts"}
        backgroundVideo={"/2529742_Aberdeen_Scotland_City_1920x1080.mp4"}
      />
      <Contact />
    </section>
  );
};

export default page;
