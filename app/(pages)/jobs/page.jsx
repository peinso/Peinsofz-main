import CustomSectionHero from "@/app/components/CustomSectionHero";
import React from "react";
import Form from "./apply";
import JobSection from "./Jobs";

const page = () => {
  return (
    <section className="flex flex-col gap-10">
      <CustomSectionHero
        backgroundVideo={"/about.jfif"}
        sectionTitle={"Jobs"}
        sectionSubTittle={"Apply Now"}
      />
      <main className="flex max-w-[120rem] mx-auto flex-col py-6 overflow-hidden md:flex-row-reverse ">
        <JobSection />
        <div className="flex-1 py-12 lg:flex lg:justify-center lg:h-screen ">
          <div className="flex-1 max-w-lg px-4 mx-auto ">
            <div>
              <h3 className="text-3xl font-semibold sm:text-4xl">Apply Now</h3>
            </div>
            <Form />
          </div>
        </div>
      </main>
    </section>
  );
};

export default page;
