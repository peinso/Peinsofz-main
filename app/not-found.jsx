import React from "react";
import CustomSectionHero from "./components/CustomSectionHero";
import Button from "./components/Button";
import Link from "next/link";

function notFound() {
  return (
    <section className="">
      <CustomSectionHero
        backgroundVideo={"/palne.png"}
        sectionTitle={"404"}
        sectionSubTittle={"Page Not Found"}
      />
      <main className="">
        <ul className="flex flex-col items-center justify-center gap-4">
          <li>
            {" "}
            <h1 className="lg:text-[21rem] text-[10rem]  m-0 font-bold">
              4<span className="text-[#FFB82B]">0</span>4
            </h1>
          </li>
          <li>
            <p className="text-4xl">Oops! Page not found.</p>
          </li>
          <li>
            <p className="text-[#666C89]">
              Let’s get you to where you need to be.
            </p>
          </li>
          <li className="justify-center">
            <Link href={"/home"}>
              <Button buttonText={"Back to Home"} />
            </Link>
          </li>
        </ul>
      </main>
    </section>
  );
}

export default notFound;
