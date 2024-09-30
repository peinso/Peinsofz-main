"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Card({ listTitle, image, listDesc, index, id }) {
  const animationDuration = 1000 + index * 1000; // Increase duration by 500ms for each card
  const [loading, setLoading] = useState(true);

  return (
    <ul>
      <li
        key={index}
        data-aos="fade-down"
        data-aos-duration={animationDuration}
        className=" h-80 rounded-xl"
      >
        {image && (
          <figure className="rounded-xl aspect-video">
            {/* <div className="absolute inset-0 z-20 opacity-50 bg-gradient-to-b from-transparent to-[#091242]"></div> */}
            <Image
              src={image}
              alt={listTitle}
              fill
              className=" drop-shadow-sm shadow-sm shadow-[#091242] w-80 rounded-xl"
              loading="lazy"
            />
          </figure>
        )}
      </li>
      <li>
        {" "}
        {listTitle && (
          <h3 className="mb-3 text-xl text-black">{listTitle}</h3>
        )}{" "}
        {listDesc && (
          <h4 style={{color: 'black'}} className="px-3 py-4 text-sm line-clamp-3 rounded-2xl sec-color">
            {listDesc}
          </h4>
        )}
      </li>
    </ul>
  );
}
