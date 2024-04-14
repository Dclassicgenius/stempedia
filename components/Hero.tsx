const Hero = () => {
  return (
    <section className=" bg-green-500 flex flex-col gap-10 justify-center items-center pt-44  pb-24 px-10 text-gray-200">
      <div className="w-max h-max">
        <h1 className="text-6xl font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-gray-200 pr-7 leading-normal">
          Stempedia, bringing people closer to STEM{"  "}
        </h1>
      </div>
      <p className="text-2xl text-center font-medium animate-bounce focus:animate-none hover:animate-none">
        Our goal is to make learning STEM fun again, at Stempedia we aim to
        bring enthusiasts closer to learning and exploring the world of STEM.
      </p>
    </section>
  );
};

export default Hero;
