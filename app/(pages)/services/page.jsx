import CustomSectionHero from "@/app/components/CustomSectionHero";
import React from "react";
import Button from "@/app/components/Button";
import IconsCard from "@/app/components/IconsCard";
import Testimonial from "@/app/components/Testimonial";
import Work from "./Work";
import Stats from "@/app/components/Stats";
import { Metadata } from "next";
import getHow from "@/lib/getHow";
import Link from "next/link";

import GetAllServices from "@/lib/GetAllServices";
export const metadata = {
  title: "Services",
  description: "PEINSO Services",
};

export default async function Page() {
  const services = await GetAllServices();
  const items = await getHow();

  //   {
  //     serviceName: "Sea Transport",
  //     serviceIcon: "/box.svg",
  //     serviceDescription:
  //       "Sea transport refers to a company that provides sea transportation services.",
  //   },
  //   {
  //     serviceName: "Sea Transport",
  //     serviceIcon: "/box.svg",
  //     serviceDescription:
  //       "Sea transport refers to a company that provides sea transportation services.",
  //   },
  //   {
  //     serviceName: "Sea Transport",
  //     serviceIcon: "/box.svg",
  //     serviceDescription:
  //       "Sea transport refers to a company that provides sea transportation services.",
  //   },
  // ];
  return (
    <section className="flex flex-col gap-10 ">
      <CustomSectionHero
        backgroundVideo={"/services.mp4"}
        sectionTitle={"Services"}
        sectionSubTittle={"PEINSO Services"}
      />
      <main className="flex flex-col gap-12 px-8 mx-auto text-center lg:text-start lg:px-0 max-w-7xl">
        <ul className="flex flex-col items-center justify-center gap-4">
          <li>
            <p className="section-heading">What We Do</p>
          </li>
          <li>
            <h1 className="text-5xl font-bold">PEINSO Services</h1>
          </li>
        </ul>
        <div className="grid lg:grid-cols-3 gap-y-8 gap-x-48 lg:gap-y-12">
          {services.data.map((item) => (
            <Link key={item.id} href={`/services/${item.id}`}>
              <IconsCard
                key={item.id}
                brief={item.brief}
                title={item.title}
                icon={item.icon}
              />
            </Link>
          ))}
        </div>
        <div className="flex justify-center" style={{display:"none"}}>
          <Button variant={"secondary"} buttonText={"More Work"} />
        </div>
        <Work items={items} />
        <Testimonial />
        <Stats />
      </main>
    </section>
  );
}
