import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const adminUser = JSON.parse(localStorage.getItem("adminUser"));
  if (!adminUser) {
    window.location.href = "/adminlogin";
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-[rgba(255,252,239,1)]">
      <main className="flex-1 flex flex-col items-center justify-center px-7 py-4">
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="rounded-[100px] bg-[rgba(214,237,255,1)] px-12 py-4 font-['Spartan',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-4xl md:text-5xl text-[rgba(14,58,147,1)] font-semibold">
            WELCOME
          </div>
          
          <div className="flex flex-col items-center mt-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b78df5564c44eae6f631abc9ef121dd0111dd349?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
              alt="Water drop icon"
              className="h-24 w-24 md:h-28 md:w-28 object-contain mb-4 rounded-full"
            />

            <div className="text-[rgba(17,66,167,1)] text-3xl font-['Spartan',_-apple-system,_Roboto,_Helvetica,_sans-serif] font-semibold mt-2">
              ADMIN
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 w-full">
            <Link to="/sources">
              <button className="bg-[rgba(214,237,255,1)] hover:cursor-pointer w-40 text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
                Sources
              </button>
            </Link>

            <Link to="/addsource">
              <button className="bg-[rgba(214,237,255,1)] hover:cursor-pointer w-40 text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
                Add Source
              </button>
            </Link>
            
            <Link to="/adminreports">
              <button className="bg-[rgba(214,237,255,1)] hover:cursor-pointer w-40 text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
                Reports
              </button>
            </Link>
          </div>
        </div>
      </main>
      
      {/* Footer that sticks to the bottom */}
      <footer className="mt-auto">
        <div className="bg-[rgba(0,170,202,1)] w-full h-10" />
      </footer>
    </div>
  );
};

export default AdminHomePage;