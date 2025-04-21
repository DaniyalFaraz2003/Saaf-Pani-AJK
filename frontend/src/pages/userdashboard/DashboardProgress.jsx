import React from "react";

function DashboardProgress() {
  return (
    <div className="self-center z-10">
      <div className="flex ml-2 h-10 w-64 max-w-full flex-col items-start font-poppins text-base text-[rgba(2,34,41,1)] font-semibold justify-start">
        <div className="w-full max-w-md">
          <div className="flex min-h-10 w-full items-center gap-2 justify-between">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93b0e99bfa4b55642b7c31f971d8fa98932bd186?placeholderIfAbsent=true"
              alt="Progress icon"
              className="aspect-square object-contain object-center w-8 self-stretch my-auto flex-shrink-0"
            />
            <div className="self-stretch my-auto w-full">Month progress</div>
          </div>
        </div>
      </div>

      <div className="flex -mt-6 h-48 items-center gap-6 justify-start">
        <div className="rounded-xl bg-[rgba(198,235,225,1)] self-stretch flex min-h-48 min-w-40 my-auto w-full"></div>
      </div>
    </div>
  );
}

export default DashboardProgress;
