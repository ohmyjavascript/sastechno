import CustomLottie from '@/components/CustomLottie';
import React from 'react';

const careers = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Careers
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              We are hiring experts in following areas. Please send your resume
              to the following email id sudheer.naik@zoho.com
            </p>
          </div>
        </div>
        <div>
          <CustomLottie url="https://assets9.lottiefiles.com/packages/lf20_2lxv7qnd.json" />
        </div>
      </div>
    </div>
  );
};

export default careers;
