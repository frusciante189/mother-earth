import React from "react";
import Art1 from "../Assets/Art_1.jpg";
import Art2 from "../Assets/30.png";
import Art3 from "../Assets/9.png";
import Art4 from "../Assets/Art_4.jpg";

const FirstSection = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto pt-16 pb-12  lg:px-14 px-5">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12">
            <div className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-2 gap-3">
                <img src={Art1} alt="" />
                <img src={Art2} alt="" />
                <img src={Art3} alt="" />
                <img src={Art4} alt="" />
              </div>
              <h1 className="text-title py-10 text-2xl text-center uppercase font-semibold block lg:hidden">
                An Exclusive ambitious ever-growing community that wants to
                change the world we are living in
              </h1>
            </div>
            <div className="lg:flex flex-col justify-center hidden">
              <h1 className="text-title text-2xl uppercase font-semibold">
                An Exclusive ambitious ever-growing community that wants to
                change the world we are living in
              </h1>
              <p className="font-normal text-white mt-3 text-lg">
                Our NFTs are not just designed as artwork but as your personal
                one-of-a-kind membership card which grants you access to a
                wealth of community benefit videos and, more importantly, is
                your key to unlocking access to the like-minded community we are
                building.
              </p>
              <p className="font-normal text-white mt-3 text-lg">
                We want to work together, skillshare and learn about how we can
                best heal the planet. New methods of growing food and working
                the land, such as permaculture, hydroponics, no-till and
                vertical farming. We will teach our community more about carbon
                farming and other ways to improve the soil quality, animal
                conservation and reforestation.
              </p>
              <p className="font-normal text-white mt-3 text-lg">
                We will build on this knowledge as we grow as this family-based
                project and demonstrate our core values and mission – to make
                Mother Earth thrive.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-title uppercase text-2xl font-semibold text-center mt-10 lg:block hidden">
          "In every walk with nature one receives far more than he seeks." John
          Muir
        </h1>
      </div>
      <div className="bg-secondary">
        <div className="container mx-auto py-10  lg:px-14 px-5 lg:hidden block">
          <div className="max-w-5xl mx-auto flex justify-center">
            <div className="flex flex-col justify-center">
              <p className="lg:font-normal font-normal text-center text-white mt-5 text-lg">
                Our NFTs are not just designed as artwork but as your personal
                one-of-a-kind membership card which grants you access to a
                wealth of community benefit videos and, more importantly, is
                your key to unlocking access to the like-minded community we are
                building.
              </p>
              <p className="lg:font-normal font-normal text-center text-white mt-5 text-lg">
                We want to work together, skillshare and learn about how we can
                best heal the planet. New methods of growing food and working
                the land, such as permaculture, hydroponics, no-till and
                vertical farming. We will teach our community more about carbon
                farming and other ways to improve the soil quality, animal
                conservation and reforestation.
              </p>
              <p className="lg:font-normal font-normal text-center text-white mt-5 text-lg">
                We will build on this knowledge as we grow as this family based
                project and demonstrate our core values and mission – to make
                Mother Earth thrive.
              </p>
              <h1 className="text-title uppercase text-3xl font-semibold text-center mt-10">
                "In every walk with nature one receives far more than he seeks."
                John Muir
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
