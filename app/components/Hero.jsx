import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-screen "
        src="/output.mp4"
      />
      <div className="absolute top-0 z-30 flex items-center justify-center w-full h-screen text-white bg-transparent ">
        <div
          data-aos-duration="1000"
          // data-aos="fade-right"
          className="flex flex-col backdrop-blur-sm gap-6 p-6 rounded-md shadow-sm shadow-[#0912428c]  drop-shadow-lg bg-white/5"
        >
          <h1 className="text-3xl font-bold blur-0 bg-transparentp lg:text-6xl">
          Your Partner For Offshore And Onshore <br /> Survey Services In Oil & Gas <br />
          </h1>
          <p
            // data-aos="fade-left"
            className="hidden lg:text-2xl font-semibold lg:w-[70%] w-full text-base text-white "
          >
            In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie
            in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus
            finibus, enim diam interdum nulla, sed laoreet risus lectus.{" "}
          </p>

          {/* <Button buttonText="Get Started" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
