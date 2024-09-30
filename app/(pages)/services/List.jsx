import Image from "next/image";

export default function CustomList({ listItem }) {
  return (
    <ul className="flex items-center gap-1 ">
      <li className="text-base ">
        <Image
          className=""
          width={20}
          height={20}
          src="/arrow.svg"
          alt="arrow"
        />
      </li>
      <li className="my-4">{listItem.name}</li>
    </ul>
  );
}
