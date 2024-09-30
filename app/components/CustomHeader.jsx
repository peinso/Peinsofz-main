import SectionHeading from "./SectionHeading";

const CustomHeader = ({ headerText, header }) => {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      <li>
        <SectionHeading headingText={headerText} />
      </li>
      <li>
        <h2 className="text-5xl font-semibold text-center">{header}</h2>
      </li>
    </ul>
  );
};

export default CustomHeader;
