import Image from "next/image";
import SectionHeading from "./SectionHeading";

const CustomSectionHero = ({
  backgroundVideo,
  sectionSubTittle,
  sectionTitle,
}) => {
  const sectionStyle = {
    position: "relative",
    width: "100%",
    height: "90vh", // Set the height to 90% of the viewport height
    zIndex: -10,
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(91deg, #032D5F 21.35%, rgba(9, 18, 66, 0.10) 61.31%)",
    zIndex: 1,
  };

  // Ensure that backgroundVideo is not undefined
  const videoUrl = backgroundVideo || '';

  function isVideoFormatValid() {
    // Extract the file extension from the video URL
    const fileExtension = videoUrl?.split('.').pop().toLowerCase();
  
    // Check if the file extension is not 'mp4'
    return fileExtension !== 'mp4';
  }

  return (
    <section className="mb-10" style={sectionStyle}>
      {/* Use Next.js Image component */}
      {isVideoFormatValid() ? (
        <img
          autoPlay
          loop
          muted
          className="object-cover h-full w-full"
          src={backgroundVideo}
          alt="Background Video"
          objectFit="cover"
          objectPosition="center"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          className="object-cover h-full w-full"
          src={backgroundVideo}
          alt="Background Video"
          objectFit="cover"
          objectPosition="center"
        />
      )}

      <div style={overlayStyle}></div>
      <div className="absolute z-20 lg:left-[35%]  lg:top-1/2 text-white -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%]">
        <SectionHeading headingText={sectionTitle} />
        <p
          data-aos="fade-up"
          className="w-full mt-3 text-4xl font-bold lg:text-6xl"
        >
          {sectionSubTittle}
        </p>
      </div>
    </section>
  );
};

export default CustomSectionHero;
