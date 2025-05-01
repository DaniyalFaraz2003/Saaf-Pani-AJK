"use client";
import * as React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

function LandingScreen() {
  return (
    <main className="bg-[rgba(255,252,239,1)] flex flex-col min-h-screen">
      <div className="flex-1 w-full max-w-[1800px]   ">
        <div className="flex flex-col md:flex-row h-full">
          <section className="w-full md:w-1/2">
            <div className="flex flex-col h-full">
              <Header />
              <HeroSection />
            </div>
          </section>
          <section className="w-full md:w-1/2 flex items-end justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a7cb3a145b4fe45cf8242643cc240d911d3f5ad?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
              alt="Clean water illustration"
              className="w-full h-auto max-h-[80vh]"
            />
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default LandingScreen;