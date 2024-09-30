"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";

const Nav = () => {
  const pathname = usePathname();

  return (
    <header className="w-full py-4 text-white gradient-bg">
      <nav className="flex items-center justify-between px-8 mx-auto lg:max-w-[120rem] ">
        <figure>
          <Link href="/">
            <figure className="flex flex-col items-center ">
              <Image src="/peinso-logo.png" width={100} height={100} alt="logo" />
            </figure>
          </Link>
        </figure>
        <ul className="hidden gap-2 md:flex ">
          <NavLinks />
        </ul>
        <NavIcons />
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
};

// const Chip = ({ text, selected, setSelected }) => {
//   return (
//     <Link href={`${text === "Home" ? "/" : `/${text.toLowerCase()}`}`}>
//       <button
//         onClick={() => setSelected(text)}
//         className={` font-medium ${
//           selected
//             ? "text-black"
//             : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
//         } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
//       >
//         <span className="relative z-10">{text}</span>
//         {selected && (
//           <motion.span
//             layoutId="pill-tab"
//             transition={{ type: "spring", duration: 0.5 }}
//             className="absolute inset-0 z-0 rounded-md bg-gradient"
//           ></motion.span>
//         )}
//       </button>
//     </Link>
//   );
// };

export default Nav;
