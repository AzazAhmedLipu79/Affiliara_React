import React from "react";

export default function Insights() {
  return (
    <>
      {/* <!-- Card Section --> */}
      <div class="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Grid --> */}
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* <!-- Card --> */}
          <div class="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl :bg-slate-900 :border-gray-800">
            <div class="inline-flex justify-center items-center">
              <span class="w-2 h-2 inline-block bg-gray-500 rounded-full mr-2"></span>
              <span class="text-xs font-semibold uppercase text-gray-600 :text-gray-400">
                Total Clicked
              </span>
            </div>

            <div class="text-center">
              <h3 class="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800 :text-gray-200">
                150
              </h3>
            </div>

            <dl class="flex justify-center items-center divide-x divide-gray-200 :divide-gray-700">
              <dt class="pr-3">
                <span class="text-green-600">
                  <svg
                    class="inline-block w-4 h-4 self-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
                    />
                  </svg>
                  <span class="inline-block text-sm">1.7%</span>
                </span>
                <span class="block text-sm text-gray-500">change</span>
              </dt>
              <dd class="text-left pl-3">
                <span class="text-sm font-semibold text-gray-800 :text-gray-200">
                  5
                </span>
                <span class="block text-sm text-gray-500">last week</span>
              </dd>
            </dl>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Section -->  */}
    </>
  );
}
