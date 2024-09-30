import IconsCard from "./IconsCard";
import Link from "next/link";
import GetAllServices from "@/lib/GetAllServices";
export default async function We() {
  const services = await GetAllServices();

  return (
    <section className="flex flex-col px-8 py-10 mx-auto max-w-7xl lg:px-0">
      <div className="flex flex-col gap-6">
        <div className="grid max-w-4xl gap-4 px-8 lg:px-0 lg:gap-y-16 lg:gap-x-48 lg:grid-cols-2">
          {services.data.slice(0, 4).map((item) => (
            //<Link key={item.id} href={`/services/${item.id}`}>
              <IconsCard
                key={item.id}
                brief={item.brief}
                title={item.title}
                icon={item.icon}
              />
            //</Link>
          ))}
        </div>
      </div>
    </section>
  );
}
