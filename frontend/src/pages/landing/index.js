import LandingScreen from "./LandingPage";

export default LandingScreen;
export const metadata = {
  title: "Landing Page",
  description: "Landing page for the application",
};

/**
 * "use client";
import * as React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function LandingScreen() {
  return (
    <main className="bg-[rgba(255,252,239,1)] flex flex-col min-h-screen">
      <div className="flex-1 w-full max-w-screen ">
        <div className="flex flex-col md:flex-row h-full">
          <section className="w-full md:w-1/2">
            <div className="flex flex-col h-full">
              <header className="flex flex-wrap items-center justify-between p-4 text-zinc-700">
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
              <HeroSection />
            </div>
          </section>
          <section className="w-full md:w-1/2 h-full flex items-end justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a7cb3a145b4fe45cf8242643cc240d911d3f5ad?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
              alt="Clean water illustration"
              className="w-full h-auto max-h-[70vh] top-0"
            />
          </section>
        </div>
      </div>
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
    </main>
  );
}

export default LandingScreen;
 * 
 * 
 */