"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
export default function FaqClient({ question, answer }) {
  const [open, setIsOpen] = useState();
  const [faqs, setFaqs] = useState([]);
  return (
    <div>
      <Disclosure className="flex flex-col items-start justify-between">
        {({ open }) => (
          <>
            <Disclosure.Button
              className="flex items-center w-full text-xl font-medium lg:justify-between "
              onClick={() => setIsOpen(!open)}
            >
              {question}
              <ChevronUpIcon
                className={`w-6 h-6 transition-transform transition-duration-1000 ${
                  open
                    ? "transform rotate-180 text-[#FFB82B]"
                    : "transform rotate-90"
                }`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="p-color">{answer}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
