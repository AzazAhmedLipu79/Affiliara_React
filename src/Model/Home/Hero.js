import React from "react";

export default function Hero() {
  return (
    <>
      {/*  before:bg-[url('https://www.pngkey.com/png/full/13-131708_transparent-glass-texture-png.png')] */}
      {/* <!-- Hero --> */}
      <div class=" relative  border-t-8 overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2  ')] ] backdrop-blur-3xl ">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          {/* <!-- Announcement Banner --> */}

          {/* <!-- End Announcement Banner --> */}

          {/* <!-- Title --> */}
          <div class=" max-w-xl text-center mx-auto">
            <h1 class=" block font-bold  text-[#ff0000] text-5xl md:text-5xl lg:text-6xl font-ant leading-snug">
              Get Band 9 In <br /> IELTS Listening
            </h1>
          </div>
          {/* <!-- End Title --> */}

          <div class="mt-5 max-w-3xl text-center mx-auto">
            <p class="text-md lg:text-lg text-[#1e1e1e] :text-gray-400">
              ALL THE TIPS & TRICKS YOU NEED TO KNOW TO BOOST YOUR BAND From 0
              to 9
            </p>
          </div>

          {/* <!-- Buttons --> */}
          <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
            <a
              class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 :focus:ring-offset-gray-800"
              href="#newsletter"
            >
              {/* <svg
                class="w-4.5 h-4.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg> */}
              Let's Grab it
            </a>
          </div>
          {/* <!-- End Buttons --> */}
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </>
  );
}
