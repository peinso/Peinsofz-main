import Image from "next/image";

const Work = ({ items }) => {
  return (""
    /* 
    <main>
      <article className="px-4 py-6 rounded-md py-6rounded-3xl drop-shadow-md section-bg">
        <section className="flex flex-col gap-4 mx-auto max-w-7xl">
          <ul className="flex flex-col items-center justify-center gap-4">
            <li>
              <p className="section-heading">PEINSO Goodness</p>
            </li>
            <li>
              <h2 className="text-5xl font-semibold">How PEINSO Work</h2>
            </li>
          </ul>
          <div className="flex flex-col gap-16 rounded-sm lg:flex-row">
            <figure className="">
              <Image
                data-aos="fade-right"
                className="rounded-2xl drop-shadow-md shadow-md shadow-[#091242] aspect-square"
                src="/2529742_Aberdeen_Scotland_City_1920x1080.gif"
                alt="service"
                width={1500}
                height={1500}
              />
            </figure>
            <ul className="flex flex-col gap-14">
              {items.data.slice(0, 4).map((item, index) => (
                <li key={index} className="flex flex-col gap-4 lg:flex-row">
                  <figure className="flex items-center justify-center lg:justify-start lg:items-start ">
                    <Image src={item.icon} alt="icon" width={80} height={80} />
                  </figure>
                  <div className="flex flex-col gap-2">
                    <p className="text-2xl font-semibold">{item.title}</p>
                    <p className="text-base p-color">{item.brief}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </article>
    </main>
    */
  );
};

export default Work;
