import React from 'react';
import notFound from '../assets/img/404.svg';

const NotFound = () => {
  return (
    <>
      <div className="px-6 py-16 lg:py-20 h-screen flex flex-wrap content-center">
        <div className="block justify-items-stretch mx-auto items-center text-center">
          <img width={650} height={450} src={notFound} alt="404" />
          <h2 className="font-bold font-serif font-2xl lg:text-4xl leading-7 mb-4">
            Page is not found!
          </h2>
          <a
            href="/"
            className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-green-600 h-12 mt-6 text-sm lg:text-base w-full sm:w-auto"
          >
            Back to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
