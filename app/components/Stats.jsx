import { motion } from "framer-motion";
const stats = [
  {
    data: "35",
    title: "Our Locations",
  },
  {
    data: "1294",
    title: "Delivered packages",
  },
  {
    data: "3594",
    title: "satisfied customers",
  },
  {
    data: "247+",
    title: "Owned vehicles",
  },
];

const Stats = () => {
  return (
    <section className="hidden py-14">
      <div className="max-w-screen-xl px-4 mx-auto md:px-8">
        <ul className="flex flex-col items-center justify-center lg:flex-row gap-y-10 sm:flex-row lg:divide-x">
          {stats.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 px-12 text-center md:px-6"
            >
              <h4 className="text-4xl font-bold ">{item.data}</h4>
              <p className="text-lg">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
