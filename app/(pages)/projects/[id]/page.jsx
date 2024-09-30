import CustomSectionHero from "@/app/components/CustomSectionHero";
import GetProject from "@/lib/getProject";
import Image from "next/image";
const Related = ({ projects }) =>
  projects.length > 0 && (
    <figure className="flex justify-center gap-4">
      {projects.map((project, index) => (
        <figure key={index}>
          {project.imageSrc && (
            <Image
              src={project.imageSrc}
              alt={`Related Project ${project.id}`}
              width={300}
              height={300}
              className="shadow rounded-2xl drop-shadow-md shadow-[#091242]"
            />
          )}
        </figure>
      ))}
    </figure>
  );
export default async function ProjectPage({ params: { id } }) {
  const project = await GetProject(id);
  const {
    customer,
    image,
    date,
    heroImage,
    status,
    footerTitle,
    footerDesc,
    listDesc,

    name,
  } = project.data.project;

  const relatedProjects = [
    {
      id: "1",
      imageSrc: "/prodeatails.jfif",
      title: "Related Project 1",
    },
    {
      id: "2",
      imageSrc: "/prodeatails.jfif",
      title: "Related Project 2",
    },
    {
      id: "3",
      imageSrc: "/prodeatails.jfif",
      title: "Related Project 2",
    },
    // ... Add more related projects as needed
  ];
  return (
    <main>
      {
        <CustomSectionHero
          sectionTitle={`Project Details`}
          sectionSubTittle={name}
          backgroundVideo={heroImage}
        />
      }

      <article className="bg-[#F5F5F5]">
        <ul className="flex max-w-5xl gap-6 py-12 mx-auto">
          <li>
            {image && (
              <figure>
                <Image
                  className="rounded-2xl aspect-square drop-shadow-md shadow-[#091242]"
                  src={image}
                  alt={name}
                  width={650}
                  height={450}
                />
              </figure>
            )}
          </li>
          <ul className="flex flex-col gap-14">
            <li>
              <h2 className="text-4xl font-bold">Project Details</h2>
            </li>
            <ul className="flex flex-col gap-8">
              <li className="flex gap-4 text-xl">
                <span className="font-semibold ">Customer:</span>
                {customer ? <p>{customer}</p> : <p>No Customer</p>}
              </li>
              <li className="flex gap-3 text-xl">
                <span className="font-semibold ">Category:</span>
                {customer ? <p>{customer}</p> : <p>No Category</p>}
              </li>
              <li className="flex gap-3 text-xl">
                <span className="font-semibold ">Date:</span>
                {date ? <p>{date}</p> : <p>No Date</p>}
              </li>
              <li className="flex gap-3 text-xl">
                <span className="font-semibold ">Status:</span>
                {status ? <p>{status}</p> : <p>No Status</p>}
              </li>
            </ul>
          </ul>
        </ul>
      </article>
      <article className="flex flex-col max-w-4xl gap-10 mx-auto mt-16">
        {name && <h2 className="text-4xl font-bold">{name}</h2>}
        {listDesc && <p>{listDesc}</p>}
        <ul>
          {project.data.list.ProjectId && (
            <li>{project.data.list.ProjectId}</li>
          )}
        </ul>
      </article>
      <article className="flex flex-col max-w-4xl gap-10 mx-auto mt-16">
        <ul className="flex flex-col gap-10">
          <li>
            {footerTitle && (
              <h2 className="text-4xl font-bold">{footerTitle}</h2>
            )}
          </li>
          {/* <li>{listDesc && <p className="p-color">{listDesc}</p>}</li> */}
          {/*
          <li>
            <figure className="">
              {image && (
                <Image
                  src={image}
                  alt={name}
                  width={950}
                  height={350}
                  className="shadow object-cover aspect-video rounded-2xl drop-shadow-md shadow-[#091242]"
                />
              )}
            </figure>
          </li>          
          */}

        </ul>
      </article>
      {/*
      <article className="flex flex-col max-w-4xl gap-10 mx-auto mt-16">
        {relatedProjects && <Related projects={relatedProjects} />}
      </article>      
      */}

    </main>
  );
}
