import Taps from "./Taps";
import Image from "next/image";
import Button from "@/app/components/Button";
const AboutHeroSection = () => {
  return (
    <section className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-28 lg:flex-row lg:flex">
        <figure className="">
          <Image
            data-aos="fade-right"
            src={"/aboutContent.png"}
            alt="about"
            width={1600}
            height={1600}
            className="object-cover drop-shadow-md shadow-[#091242] shadow-md rounded-2xl"
          />
        </figure>
        <div className="flex flex-col justify-between gap-2 px-8 lg:px-0">
          <h1 className="section-heading">About us</h1>
          <h2
            data-aos="fade-left"
            className="text-2xl font-semibold lg:text-5xl"
          >
            PEINSO Overview
          </h2>
          <p data-aos="fade-right" className="font-medium p-color lg:w-[70%]">
          Established with a professional track record for significant value of leading clients, PEINSO is an International Maritime Contractors Association (IMCA) approved, ISO-14001 9001 and 54001 certified, and a registered S.A.E Company with the Egyptian Natural Gas Holding Company (EGAS).
          </p>
          <Taps />
        </div>
      </div>
    </section>
  );
};
export default AboutHeroSection;
