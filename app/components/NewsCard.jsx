import Image from "next/image";
import { Ghost } from "lucide-react";
const TruncatedText = ({ desc, maxWords }) => {
  const truncatedDesc = desc?.split(' ').slice(0, maxWords).join(' ');
  return (
    <p
      data-aos="fade-right"
      className="text-base font-medium text-[#666C89]"
    >
      {truncatedDesc} {desc?.split(' ').length > maxWords && '...'}
    </p>
  );
};

const NewsCard = ({
  image,
  day,
  month,
  title,
  desc,
  list,
  alt,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col px-8 cursor-pointer lg:px-0 lg:flex-row justify-between lg:max-w-[59rem] gap-7"
    >
      {image && (
        <Image
          src={image}
          alt={alt}
          width={500}
          height={400}
          className="object-cover drop-shadow-md shadow-[#091242] shadow-md rounded-2xl"
        />
      )}
      <ul className="flex flex-col items-center gap-1">
        <li>
          <Image src={"/test.svg"} alt="icon" width={100} height={100} />
        </li>
        <li className="text-5xl font-semibold">{day}</li>
        <li className="font-medium text-[#666C89]">{month}</li>
      </ul>
      <div className="flex flex-col gap-2">
        <h2
          data-aos="fade-right"
          className="text-2xl font-semibold hover:text-[#FFBE34]"
        >
          {title}
        </h2>

                <TruncatedText desc={desc} maxWords={20} />
                {
                  /*
                         <ul className="flex flex-col gap-3">
                        {list && list.length > 0 && (
                          <ul className="flex flex-col gap-3 list-disc list-inside">
                            {list.map((item, index) => (
                              <li key={index}>{item.content}</li>
                            ))}
                          </ul>
                        )}
                        </ul>
                  */
                }

      </div>
    </div>
  );
};
export default NewsCard;
