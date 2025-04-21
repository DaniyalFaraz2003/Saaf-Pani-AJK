import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex justify-end">
        <Link to={"/adminlogin"}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b78df5564c44eae6f631abc9ef121dd0111dd349?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
          alt="Water drop icon"
          className="object-contain mt-4 mr-9 max-w-full rounded-full aspect-square w-[100px] max-md:mt-10 max-md:mr-2.5"
        />
        </Link> 
      </div>
      <div className="flex self-stretch mt-7 w-full bg-cyan-500 min-h-[61px] max-md:max-w-full" />
    </footer>
  );
};

export default Footer;
