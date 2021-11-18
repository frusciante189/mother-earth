import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#101f21]">
      <div className="container mx-auto pt-32 pb-20 flex flex-col items-center space-y-2">
        <h1 className="text-title uppercase text-4xl font-semibold">
          Save the earth
        </h1>
        <h1 className="text-white text-4xl uppercase font-semibold">
          Join our discord
        </h1>
        <button className="px-8 py-2 bg-gradient-to-l from-[#00655b] to-[#00a231] text-white uppercase">
          Let's Start
        </button>
        <a href="/" className=" text-white mt-4 text-lg">
          Terms of Service
        </a>
        <span className="text-white mt-2 text-lg">
          &copy; Mother Earth. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
