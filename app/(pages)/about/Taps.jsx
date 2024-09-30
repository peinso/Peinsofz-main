"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Taps() {
  let [categories] = useState({
    Vision: [
      {
        id: 1,
        title: "To provide optimum integrated solutions for our clients from aspects of safety and technical services and to become the worldwide leading services provider to the oil and Gas Industry.        ",
      },
    ],
    Mision: [
      {
        id: 1,
        title:
        "To provide high quality, first-class service within a safe working environment through tailored solutions, adherence to worldwide standards, and high-level management practices to oil and gas Industry."
      },
    ],
    Values: [
      {
        id: 1,
        title: "Petrological Integrated Solutions (PEINSO), leading integrated modern technology solutions, mechanical, electronic, and software service provider, offers world-class quality onshore and offshore solutions and services that enable large, as well as small to medium organizations to keep up-to-date with the fast-evolving competitive business environment.",
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 rounded-xl bg-[#F4F4F4]">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white/60 ",
                  selected
                    ? "bg-white text-[#ffb82b] shadow"
                    : "text-gray-500 hover:bg- hover:text-gray-700"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white/60 "
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-gray-100"
                  >
                    <h3 className="text-xl font-medium ">{post.title}</h3>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
