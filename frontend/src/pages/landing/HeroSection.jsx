import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col flex-1 ml-10 p-4 mt-20">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c175fdffc9b22b776f8daff8452e6e2016528fdd?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
            alt="Clean water icon"
            className="w-20 h-20 md:w-24 md:h-24 object-contain"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-cyan-500">Saaf Pani, <br />Behtar Zindagi</span> 
        </h2>
      </div>
      <div className="mt-4 md:mt-6">
        <p className="text-base md:text-lg leading-relaxed text-zinc-700">
          Welcome to Saaf Paani AJK Your trusted source for water quality and
          it's pH updates across Azad Jammu & Kashmir. We help you stay informed
          about the safety of your drinking water because clean water means
          better health.
        </p>
        <button
          className="bg-cyan-500 px-6 py-3 mt-6 text-lg font-semibold text-white rounded-2xl hover:bg-cyan-600 transition-colors"
          aria-label="Get started"
        >
          Let's Begin
        </button>
      </div>
    </section>
  );
};

export default HeroSection;