import React from "react";
import Image from "next/image";
import TestButton from "./TestButton";

const Us = () => {
  return (
    <section>
      <main className="flex flex-col gap-6 px-8 mx-auto mt-6 lg:px-0 lg:grid lg:grid-cols-2 max-w-7xl ">
        <ul className="flex flex-col gap-4 lg:w-[29rem]">
          <li className="flex flex-col gap-3">
            <p className="section-heading"> why us</p>
            <h1 data-aos="fade-right" className="text-4xl font-semibold">
             Peinso Provide Full Offshore Solutions
            </h1>
            <p data-aos="fade-right" className="p-color">
              PEINSO deliver top-quality and globally compliant services through tailored solutions and exceptional management practices. Our integrated safety and technical solutions position us as a leading service provider in the global oil and gas industry.
            </p>
          </li>
          <li className="flex items-center gap-3">
            <figure data-aos="fade-left">
              <Image src="/boxTwo.svg" width={50} height={50} alt="us"></Image>
            </figure>
            <h2 data-aos="fade-left" className="text-2xl font-semibold">
            QualityOf Services and Gigantic Track Record
            </h2>
          </li>
          <li className="flex items-center gap-3">
            <figure data-aos="fade-left">
              <Image src="/boxTwo.svg" width={50} height={50} alt="us"></Image>
            </figure>
            <h2 data-aos="fade-left" className="text-2xl font-semibold">
            Innovation and On Time Projects Delivery
            </h2>
          </li>
        </ul>
        <figure data-aos="flip-left" className="w-full">
          <Image
            className="object-contain rounded-2xl drop-shadow-md shadow-[#091242] shadow-md"
            src="/Ichthys.jpeg"
            width={1000}
            height={1000}
            alt="us"
          ></Image>
        </figure>
      </main>
    </section>
  );
};

export default Us;
