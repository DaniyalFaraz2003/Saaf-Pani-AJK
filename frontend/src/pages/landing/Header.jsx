import React from "react";

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 p-7 justify-between w-full text-zinc-700 max-md:max-w-full">
      <div className="flex gap-3 text-3xl font-semibold leading-none">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fba13d571850d6c0f37f3e5a697c655c53c0ac?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
          alt="SAAF PANI AJK Logo"
          className="object-contain shrink-0 w-10 aspect-square"
        />
        <h1 className="flex-auto my-auto">SAAF PANI AJK </h1>
      </div>
      <nav className="flex gap-10 my-auto text-2xl font-medium leading-loose whitespace-nowrap">
        <a href="#search" className="hover:underline">
          Search
        </a>
        <a href="#dashboard" className="basis-auto hover:underline">
          Dashboard
        </a>
        <a href="#report" className="hover:underline">
          Report
        </a>
      </nav>
    </header>
  );
};

export default Header;
