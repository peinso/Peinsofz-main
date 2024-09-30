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
          className="flex flex-col backdrop-blur-sm gap-6 p-6 rounded-md shadow-sm shadow-[#0912428c]  drop-shadow-lg bg-white/5"
        >
          <h1 className="text-3xl font-bold blur-0 lg:text-6xl">
            Your Partner For Offshore and <br /> Onshore Survey Services In Oil
            & Gas <br />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
