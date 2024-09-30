import React from "react";
import Image from "next/image";

// Reusable TestimonialCard component
export const TestimonialCard = ({
  name,
  company,
  image,
  content,
  bground,

  index,
  fcolor,
  animation,
}) => {
  return (
    <div
      data-aos={animation}
      data-aos-duration="2000"
      className={`bg-[${bground}] justify-between rounded-md flex flex-col px-4 lg:px-14 py-12 gap-6 text-[${
        fcolor ? fcolor : "white"
      }] `}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4 lg:flex-row">
          <Image
            loading="lazy"
            className="rounded-full"
            src={image}
            alt={name}
            width={70}
            height={70}
          />
          <div>
            <p
              className={`text-lg font-bold text-${
                fcolor ? fcolor : "white"
              }  lg:text-xl`}
            >
              {name}
            </p>
            <p className={` text-${fcolor ? fcolor : "white"}  lg:text-xl`}>
              {company}
            </p>
          </div>
        </div>
      </div>

      <div className="quote-block">
        <p
          className={`text-lg leading-relaxed text-${
            fcolor ? fcolor : "white"
          }`}
        >
          {content}
        </p>
      </div>
      <figure className="">
        <Image
          src="/Star (1).svg"
          alt="stars"
          width={200}
          height={200}
          objectFit="contain"
        />
      </figure>
    </div>
  );
};
