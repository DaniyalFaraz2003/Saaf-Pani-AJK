import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="flex justify-end p-2">
        <Link to={"/adminlogin"}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b78df5564c44eae6f631abc9ef121dd0111dd349?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
            alt="Water drop icon"
            className="w-16 h-16 object-contain rounded-full"
          />
        </Link> 
      </div>
      <div className="w-full bg-cyan-500 h-4" />
    </footer>
  );
};

export default Footer;