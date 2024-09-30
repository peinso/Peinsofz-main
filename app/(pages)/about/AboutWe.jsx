import Button from "@/app/components/Button";
import React from "react";
import IconsCard from "@/app/components/IconsCard";
import GetAllServices from "@/lib/GetAllServices";
import Link from "next/link";

export default async function We() {
  const services = await GetAllServices();

  return (
    <section className="px-8 py-10 lg:py-24 lg:px-44 section-bg">
      <main className="flex flex-col gap-12 mx-auto max-w-7xl">
        <ul className="flex flex-col items-center justify-center gap-4">
          <li>
            <p className="section-heading">What We Do</p>
          </li>
          <li>
            <h1 className="text-5xl font-bold">PEINSO Services</h1>
          </li>
        </ul>
        <div className="grid lg:grid-cols-3 gap-y-8 lg:gap-x-28 lg:gap-y-12">
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
      </main>
    </section>
  );
}
