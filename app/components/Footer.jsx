"use client";
import Image from "next/image";
import { Linkedin, FacebookIcon } from "lucide-react";
import Link from "next/link";
import NavIcons from "./NavIcons";
export default function Footer() {
  const footerNavs = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/blog",
      name: "Blog",
    },
    {
      href: "/jobs",
      name: "Jobs",
    },
    {
      href: "/services",
      name: "Services",
    },

    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/contact",
      name: "Contact us",
    },
  ];

  return (
    <footer className="text-white ">
      <main className="px-8 py-10 mx-8 gradient-bg md:mx-0">
        <div className="flex">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="w-32 sm:mx-auto"
          />
          <p className="leading-relaxed mt-2 text-[15px]">
            {
              "Established with a professional track record for significant value of leading clients, PEINSO is an International Maritime Contractors Association (IMCA) approved, ISO-14001 9001 and 54001 certified, and a registered S.A.E Company with the Egyptian Natural Gas Holding Company (EGAS)."
            }
          </p>
        </div>
        </div>
        
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li key={idx} className=" hover:text-[#ffb82b]">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
            <li className=" hover:text-[#ffb82b]">
              <h4>phone : +20 34849090</h4>
            </li>
            <li className=" hover:text-[#ffb82b]">
              <h4>phone : +20 34849080 </h4>
            </li>
            <li className=" hover:text-[#ffb82b]">
              <h4>Fax : +20 4849500</h4>
            </li>
        </ul>
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
            <li className=" hover:text-[#ffb82b]">
              <a target="_blank" href="https://www.google.com/maps?ll=31.198644,29.905833&z=19&t=m&hl=en&gl=EG&mapclient=embed&cid=1406559249363999064">
                              <h4>4 Ibn Al-Sayegh St., from Fouad St.
Al-Masala Square, Alexandria, Egypt</h4>
              </a>

            </li>
        </ul>
        <div className="items-center justify-between mt-8 sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; {new Date().getFullYear()} PEINSO Inc.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <NavIcons />
            </ul>
          </div>
        </div>
      </main>
    </footer>
  );
}
