import MainBanner from '@/components/MainBanner';
import React from 'react';
import { applicationData } from 'data/config';

const Banner = () => {
  return (
    <React.Fragment>
      <div className="svg-wave hidden md:block">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 700"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,700 C 0,700 0,350 0,350 C 83.90430622009566,375.36842105263156 167.80861244019133,400.7368421052632 268,382 C 368.1913875598087,363.2631578947368 484.66985645933016,300.42105263157896 597,284 C 709.3301435406698,267.57894736842104 817.511961722488,297.57894736842104 916,311 C 1014.488038277512,324.42105263157896 1103.2822966507179,321.2631578947368 1189,325 C 1274.7177033492821,328.7368421052632 1357.358851674641,339.36842105263156 1440,350 C 1440,350 1440,700 1440,700 Z"
            stroke="none"
            stroke-width="0"
            fill="#1e40aeff"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 350)"
          ></path>
        </svg>
      </div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="md:mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6  md:-mt-[5.25rem]">
              <h2 className="max-w-lg mb-6 text-xl font-bold md:text-white tracking-tight text-slate-100 text-slate-500 sm:text-xl lg:text-4xl">
                {applicationData.banner.text1}
                <br className="block" />
                {applicationData.banner.text2}
                <span className="inline-block">
                  {applicationData.banner.text3}
                </span>
              </h2>
              <p className="text-slate-100 font-bold text-base text-slate-500 md:text-white tracking-wide">
                {applicationData.banner.tagline}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:max-w-full lg:absolute lg:w-1/2 right-16 inset-y-0">
          <MainBanner />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Banner;
