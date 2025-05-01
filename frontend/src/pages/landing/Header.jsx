import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-between w-full text-zinc-700">
      <div className="flex items-center gap-2 text-2xl font-semibold">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fba13d571850d6c0f37f3e5a697c655c53c0ac?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
          alt="SAAF PANI AJK Logo"
          className="w-8 h-8 object-contain"
        />
        <h1>SAAF PANI AJK</h1>
      </div>
      <nav className="flex gap-4 text-lg font-medium">
        <Link to={"/search"} className="hover:underline">
          Search
        </Link>
        <Link to={"/userdashboard"} className="hover:underline">
          Dashboard
        </Link>
        <Link to={"/report"} className="hover:underline">
          Report
        </Link>
      </nav>
    </header>
  );
};

export default Header;