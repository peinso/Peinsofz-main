import GetAllProjects from "@/lib/GetAllProjects";
import Card from "./Card";
import CustomSectionHero from "@/app/components/CustomSectionHero";
import Link from "next/link";
export default async function ProjectsPage({ searchParams }) {
  const projects = await GetAllProjects();

  const projectsList = projects.data;

  return (
    <main>
      <CustomSectionHero
        backgroundVideo={"/hero2.mp4"}
        sectionTitle={"Projects"}
        sectionSubTittle={"PEINSO Projects"}
      />
      <section>
        <div className="grid px-8 py-8 mx-auto max-w-7xl lg:px-0 gap-y-8 gap-x-8 lg:grid-cols-3">
          {projectsList.map((project, index) => (
            <Link key={index} href={`/projects/${project.id}`}>
              <Card
                key={index}
                image={project.image}
                listTitle={project.customer}
                listDesc={project.listDesc}
                index={index}
              />
            </Link>
          ))}
        </div>
      </section>
      <div className=""></div>
    </main>
  );
}
