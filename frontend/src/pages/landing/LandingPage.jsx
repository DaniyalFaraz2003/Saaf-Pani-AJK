"use client";
import * as React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function LandingScreen() {
  return (
    <main className=" bg-[rgba(255,252,239,1)] flex overflow-hidden flex-col items-end shadow-[-15px_12px_56px_rgba(0,0,0,0.12)]">
      <div className="w-full max-w-[1856px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col my-auto mr-0 w-full max-md:mt-10 max-md:max-w-full">
              <Header />
              <HeroSection />
            </div>
          </section>
          <section className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a7cb3a145b4fe45cf8242643cc240d911d3f5ad?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
              alt="Clean water illustration"
              className="object-contain grow w-full aspect-[1.04] max-md:max-w-full"
            />
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default LandingScreen;
