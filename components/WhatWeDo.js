import { applicationData } from 'data/config';
import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="relative px-4 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 md:mt-[14rem]">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 z-0 w-full h-full bg-gray-100" />
      </div>
      <div className="relative">
        <div className="relative">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 w-32 -mt-16 -ml-16 text-blue-gray-100 lg:w-32 lg:-mt-12"
          >
            <defs>
              <pattern
                id="d06ca312-d4ed-465f-ad18-fb0c0f92b6f1"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#d06ca312-d4ed-465f-ad18-fb0c0f92b6f1)"
              width="52"
              height="24"
            />
          </svg>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 pt-8 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <br className="hidden md:block" />
              {applicationData.whatWeDo.subText}
            </h2>
          </div>
        </div>
        <div className="pb-4 grid md:gap-12 row-gap-5 md:grid-cols-2">
          {applicationData.whatWeDo.points.map((point) => {
            return (
              <div className="relative">
                <div className="relative">
                  <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-teal-accent-400">
                    <svg
                      className="w-8 h-8 text-teal-900"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">{point.text}</h6>
                  <p className="text-sm mb-1">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default WhatWeDo;
