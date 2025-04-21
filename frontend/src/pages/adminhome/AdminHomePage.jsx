import React from "react";
import { Link } from "react-router-dom";

const AdminHomePage = () => {
  return (
    <>
      <div className=" bg-[rgba(255,252,239,1)] pt-20 w-screen h-screen px-7 text-center leading-none">
        <div className="flex mx-auto w-full flex-col items-center">
          <div className="w-full flex items-start justify-between">



          </div>
          <div className="rounded-[100px] bg-[rgba(214,237,255,1)] px-12 py-4 font-['Spartan',_-apple-system,_Roboto,_Helvetica,_sans-serif] text-4xl md:text-5xl text-[rgba(14,58,147,1)] font-semibold">
            WELCOME
          </div>
          <div className="flex flex-col items-center mt-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b78df5564c44eae6f631abc9ef121dd0111dd349?placeholderIfAbsent=true&apiKey=619fd579a7344b7ca31268403d22177b"
              alt="Water drop icon"
              className="h-30 w-30 **:object-contain mt-10 mb-4 rounded-full aspect-square"
            />

            <div className="text-[rgba(17,66,167,1)] text-3xl font-['Spartan',_-apple-system,_Roboto,_Helvetica,_sans-serif] font-semibold mt-4">
              ADMIN
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10 w-full">
            <button className="bg-[rgba(214,237,255,1)] text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
              Update Source
            </button>
            <button className="bg-[rgba(214,237,255,1)] text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
              Delete Source
            </button>
            <button className="bg-[rgba(214,237,255,1)] text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
              Add Source
            </button>
            <button className="bg-[rgba(214,237,255,1)] text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
              View Analytics
            </button>
            <button className="bg-[rgba(214,237,255,1)] text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
              User Management
            </button>
            <button className="bg-[rgba(214,237,255,1)] text-[rgba(14,58,147,1)] rounded-xl p-4 font-medium text-lg hover:bg-[rgba(194,227,255,1)] transition-colors">
              Settings
            </button>
          </div>

        </div>
      </div>
      <div className="bg-[rgba(0,170,202,1)] w-full h-12 mt-auto" />
    </>
  );
};

export default AdminHomePage;
