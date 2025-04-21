import React from "react";

const HeroSection = () => {
  return (
    <section className="flex p-7 flex-col">
      <div className="mt-36 max-w-full w-[760px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[16%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c175fdffc9b22b776f8daff8452e6e2016528fdd?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
              alt="Clean water icon"
              className="object-contain shrink-0 max-w-full aspect-[0.89] rounded-[100px] w-[117px] max-md:mt-4"
            />
          </div>
          <div className="ml-5 w-[84%] max-md:ml-0 max-md:w-full">
            <h2 className=" text-7xl font-bold leading-[99px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
              <span className="text-cyan-500">Saaf Pani, <br />
              Behtar Zindagi</span> 
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-center mt-12 ml-3 max-w-full w-[749px] max-md:mt-10">
        <p className="text-xl font-medium leading-9 text-zinc-700 max-md:max-w-full">
          Welcome to Saaf Paani AJK Your trusted source for water quality and
          it's pH updates across Azad Jammu & Kashmir. We help you stay informed
          about the safety of your drinking water because clean water means
          better health.
        </p>
        <button
          className="bg-cyan-500 ml-auto gap-2.5 self-start px-9 py-4 mt-24 text-2xl font-semibold leading-none text-white rounded-2xl min-h-[69px] max-md:px-5 max-md:mt-10 hover:bg-cyan-600 transition-colors"
          aria-label="Get started"
        >
          Let's Begin
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
