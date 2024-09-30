import Image from "next/image";

const IconsCard = ({ icon, imgAlt, title, brief, id }) => {
  return (
    <ul
      data-aos={id % 2 == 0 ? "fade-right" : "fade-left"}
      className="flex flex-col w-full group hover:shadow-[#091242] backdrop-blur-md drop-shadow-sm  hover:drop-shadow-sm hover:shadow-sm items-center justify-between gap-2 px-4 py-5 rounded-md shadow-md lg:items-start lg:justify-start"
    >
      <li>
        <figure className="flex items-center gap-2">
          <Image
            className="rounded-md hover:scale-110"
            src={icon}
            alt={imgAlt}
            width={60}
            height={60}
          />
          <h3 className="text-xl w-full group-hover:text-[#ffb82b] font-semibold">
            {title}
          </h3>
        </figure>
      </li>
      <li></li>
      <li>
        <p className="p-color group-hover:text-zinc-800 group-hover:line-clamp-none line-clamp-5">
          {brief}
        </p>
      </li>
    </ul>
  );
};

export default IconsCard;
