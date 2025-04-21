import React from "react";

function DashboardTrend() {
  return (
    <div className="rounded-2xl bg-[rgba(223,253,255,1)] min-w-40 p-6 flex-grow flex-shrink-1 w-full max-w-xl">
      <div className="flex max-w-full w-full items-center gap-8 font-poppins text-xl text-[rgba(2,34,41,1)] font-semibold text-center justify-between flex-wrap">
        <div className="self-stretch my-auto">pH Trend</div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cabaab9a1b9afafaa284cf831e5fd4b6d0d2abbb?placeholderIfAbsent=true"
          alt="pH icon"
          className="aspect-square object-contain object-center w-8 self-stretch my-auto flex-shrink-0"
        />
      </div>

      <div className="flex mt-6 w-full flex-col items-stretch">
        <div className="flex items-start gap-6 flex-wrap">
          <div className="flex h-48 flex-col items-end font-inter text-sm text-[rgba(115,127,130,1)] font-normal whitespace-nowrap leading-normal justify-between">
            <div>9.5</div>
            <div className="mt-4">8.5</div>
            <div className="mt-4">7.5</div>
            <div className="mt-4">6.5</div>
            <div className="mt-4">5.5</div>
          </div>

          <div className="mt-3 flex-grow flex-shrink-0 flex-basis-0 w-fit">
            <div className="flex h-44 w-full max-w-md items-end gap-6 justify-between flex-wrap">
              <div className="w-6">
                <div className="rounded-t bg-[rgba(13,186,225,1)] flex h-16 w-6"></div>
                <div className="rounded-t bg-[rgba(255,59,48,1)] flex h-14 mt-1 w-6"></div>
              </div>
              <div className="h-36 w-6">
                <div className="rounded-t bg-[rgba(13,186,225,1)] flex h-12 w-6"></div>
                <div className="rounded-t flex h-24 mt-1 w-6"></div>
              </div>
              <div className="h-36 w-6">
                <div className="rounded bg-[rgba(13,186,225,1)] flex h-20 w-6"></div>
                <div className="rounded-t bg-[rgba(255,59,48,1)] flex h-12 mt-1 w-6"></div>
              </div>
              <div className="h-32 w-6">
                <div className="rounded bg-[rgba(13,186,225,1)] flex h-10 w-6"></div>
                <div className="rounded flex h-12 mt-1 w-6 flex-1"></div>
                <div className="rounded-t bg-[rgba(255,59,48,1)] flex h-6 mt-1 w-6"></div>
              </div>
              <div className="h-44 w-6">
                <div className="rounded bg-[rgba(255,59,48,1)] flex h-8 w-6"></div>
                <div className="rounded bg-[rgba(13,186,225,1)] flex h-10 mt-1 w-6"></div>
                <div className="rounded-t flex h-24 mt-1 w-6 flex-1"></div>
              </div>
              <div className="w-6">
                <div className="rounded bg-[rgba(255,59,48,1)] flex h-10 w-6"></div>
                <div className="rounded bg-[rgba(13,186,225,1)] flex h-20 mt-1 w-6"></div>
                <div className="rounded-t bg-[rgba(255,59,48,1)] flex h-16 mt-1 w-6"></div>
              </div>
            </div>
            <div className="border-[rgba(131,136,172,0.3)] border-solid border-t-2 flex-shrink-0 h-0.5"></div>
          </div>
        </div>

        <div className="self-end flex mt-3 min-h-8 items-start gap-6 font-inter text-sm text-[rgba(115,127,130,1)] font-normal whitespace-nowrap leading-normal justify-start flex-wrap">
          <div>APRIL</div>
          <div>JUNE'24</div>
          <div>JAN'24</div>
          <div>JUNE'23</div>
          <div>JAN'23</div>
          <div>JUNE'22</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTrend;
