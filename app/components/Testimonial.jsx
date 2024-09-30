import React from "react";
import SectionHeading from "./SectionHeading";
import { TestimonialCard } from "./TestimonialCard";
import GetReviews from "@/lib/GetReviews";

// Main Testimonial component
export default async function Testimonial() {
  const TestimonialData = await GetReviews();

  return (
    <section className="hidden mt-24">
      <div className="flex flex-col gap-6 px-8 mx-auto lg:px-0 max-w-7xl">
        <ul className="flex flex-col gap-4">
          <li>
            <SectionHeading headingText={"Testimonial"} />
          </li>
          <li className="flex justify-between">
            <h2 className="text-3xl font-bold">What Our Customers Say</h2>
            <figure>
              <svg
                width="97"
                height="44"
                viewBox="0 0 97 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="74.7676" cy="22.2324" r="21.7676" fill="#091242" />
                <path
                  d="M69 21.4648H81"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M76 16.4648L81 21.4648L76 26.4648"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="21.7676"
                  cy="21.7676"
                  r="21.7676"
                  transform="matrix(-1 0 0 1 43.5352 0.464844)"
                  fill="url(#paint0_linear_1_4288)"
                />
                <path
                  d="M28 21.4648L16 21.4648"
                  stroke="#091242"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M21 26.4648L16 21.4648L21 16.4648"
                  stroke="#091242"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_4288"
                    x1="-1.23424"
                    y1="9.43261"
                    x2="53.5333"
                    y2="13.3219"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB629" />
                    <stop offset="0.507189" stopColor="#FFDA56" />
                    <stop offset="1" stopColor="#FFD7A6" />
                  </linearGradient>
                </defs>
              </svg>
            </figure>
          </li>
        </ul>
        <div className="grid lg:grid-cols-2">
          {TestimonialData &&
            TestimonialData.data.slice(0, 2).map((item, index) => {
              return <TestimonialCard key={index} {...item} />;
            })}
        </div>
      </div>
    </section>
  );
}
