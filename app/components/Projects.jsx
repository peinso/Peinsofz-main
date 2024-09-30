import Image from "next/image";
// import Button from "./Button";
import Link from "next/link";
import GetAllProjects from "@/lib/GetAllProjects";
import Button from "./Button";

const CardPreview = ({ listTitle, image, listDesc, index, customer }) => {
  const animationDuration = 1000 + index * 1000; // Increase duration by 500ms for each card
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
        {customer && (
          <h3 className="mt-3 text-xl font-semibold">{customer}</h3>
        )}{" "}
        {listDesc && (
          <h4 className="px-3 py-4 text-sm font-semibold rounded-2xl ">
            {listDesc}
          </h4>
        )}
      </li>
    </ul>
  );
};
export default async function Projects() {
  const projects = await GetAllProjects();

  return (
    <section className="relative flex flex-col gap-6 px-8 lg:px-0">
      <h1 className="text-5xl font-semibold text-center">Projects</h1>{" "}
      <ul className="flex flex-col mx-auto px-8  lg:max-w-[120rem] gap-11 lg:grid lg:grid-cols-3 gap-x-6 ">
        {projects.data.slice(0, 3).map((project, index) => (
          <Link key={index} href={`/projects/${project.id}`}>
            <CardPreview
              key={project.id}
              image={project.image}
              customer={project.customer}
              index={index}
            />
          </Link>
        ))}
      </ul>
      <div className="flex items-center justify-center mt-3">
        <Link href="/projects">
          <Button buttonText="More →" />
        </Link>
      </div>
      {/* <div className="absolute hidden lg:grid w-full grid-cols-5 top-[50%] -z-10 h-64 bg-gradient"></div> */}
    </section>
  );
}
