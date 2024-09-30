import React from "react";
import CustomSectionHero from "@/app/components/CustomSectionHero";
import GetService from "@/lib/GetService";
import Image from "next/image";
import CustomList from "../List";

export default async function ServicePage({ params: { id } }) {
  const service = await GetService(id);
  const {
    icon,
    title,
    desc,
    heroImage,
    HowDesc,
    listDesc,
    listImage,
    HowImage,
  } = service.data.service;
  const {
    data: { list },
  } = service;
  const renderListItems = () => {
    if (!service.data.List) return <p></p>;
    else
    return service.data.List.map((item) => <CustomList key={item} listItem={item} />);
  };
  return (
    <section className="flex flex-col gap-10">
      {heroImage && (
        <CustomSectionHero
          sectionTitle="Services"
          backgroundVideo={heroImage}
          sectionSubTittle={title}
        />
      )}
      <main className="flex flex-col gap-24 px-8 lg:px-0">
        <article className="flex flex-col max-w-4xl gap-6 mx-auto">
          <figure>
            <Image
              src={heroImage}
              alt="service"
              width={850}
              height={560}
            />
          </figure>
          <ul className="flex items-center justify-start gap-4">
            <li>
              {icon && <Image src={icon} alt={title} width={60} height={60} />}{" "}
            </li>
            <li>{title && <p className="text-4xl font-bold">{title}</p>} </li>
          </ul>
          {title && <h1 className="text-4xl font-bold">{title}</h1>}
          {desc && <p className="text-2xl p-color">{desc}</p>}{" "}
        </article>

        <article className="flex max-w-4xl gap-6 mx-auto lg:flex-col">
          <div className="lg:grid flex flex-col-reverse lg:grid-cols-[2fr_2.5fr] gap-16">
          <ul className="flex flex-col gap-4">
  {(listDesc || (service.data.List && service.data.List.length > 0)) && (
    <li>
      <h1 className="text-3xl font-bold">Benefit of Service</h1>
      {listDesc && <p>{listDesc}</p>}
    </li>
  )}
  {renderListItems() && <li>{renderListItems()}</li>}
</ul>


            <figure>
              {listImage && (
                <Image
                  src={listImage}
                  className="object-cover w-full h-full aspect-auto"
                  alt="service"
                  width={950}
                  height={860}
                />
              )}
            </figure>
          </div>
        </article>

        <article className="flex flex-col max-w-4xl gap-6 mx-auto">
          <div className="grid lg:grid-cols-[2.5fr_2fr] gap-16">
            <figure>
              {HowImage && (
                <Image
                  src={HowImage}
                  className="object-cover w-full h-full"
                  alt="service"
                  width={950}
                  height={950}
                />
              )}
            </figure>
            {HowDesc && (
              <ul className="flex flex-col justify-center gap-3">
                <li>
                  <h1 className="text-3xl font-bold">How it Works</h1>
                </li>
                <li>{HowDesc && <p className="p-color">{HowDesc}</p>} </li>
              </ul>
            )}
          </div>
        </article>
      </main>{" "}
    </section>
  );
}
