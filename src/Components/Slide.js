import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Art1 from "../Assets/Art_1.jpg";
import Art2 from "../Assets/Art_2.jpg";
import Art3 from "../Assets/Art_3.jpg";
import Art4 from "../Assets/Art_4.jpg";
import Art5 from "../Assets/Art_5.jpg";
import Art6 from "../Assets/Art_6.jpg";
import Art7 from "../Assets/Art_7.jpg";
import Art8 from "../Assets/Art_8.jpg";
import Art9 from "../Assets/Art_9.jpg";
import Art10 from "../Assets/Art_10.jpg";
import Art11 from "../Assets/Art_11.jpg";
import Art12 from "../Assets/Art_12.jpg";
import Art13 from "../Assets/Art_13.jpg";
import Art14 from "../Assets/Art_14.jpg";
import Art15 from "../Assets/Art_15.jpg";

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 555,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 342,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-secondary lg:block hidden">
      <div className="container mx-auto flex px-4 md:px-0 lg:py-12 pb-0 lg:flex-row flex-col items-center">
        <div className="md:max-w-xl w-full mb-10 md:mb-0 mt-10 lg:mt-0">
          <h1 className="md:text-4xl text-xl font-bold text-white text-center">
            MOTHET EARTH <span className="text-title">NFTs</span>
          </h1>
        </div>
        <div className="lg:flex-grow md:w-full flex flex-col md:items-start md:text-left items-start">
          <div className="flex flex-col md:items-start items-center justify-start text-gray-500 px-4">
            <p className=" text-white text-lg">
              We have created a collection of 12,345 Mother Earth NFTs on the
              Polygon blockchain. Mother Earth NFTs are refined, classic and
              lovingly created works of art that depict Mother Earth in all her
              Glory.
            </p>
            <p className="lg:mt-5 mt-3 text-white text-lg">
              Our NFTs are not just designed as artwork but as your personal
              one-of-a-kind membership card which grants you access to a wealth
              of community benefit videos and, more importantly, is your key to
              unlocking access to the like-minded community we aim to build.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-12 px-5">
        <Slider {...settings}>
          <div className="p-2 lg:p-0">
            <img
              src={Art1}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art2}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art3}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art4}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art5}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art6}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art7}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art8}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art9}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art10}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art11}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>{" "}
          <div className="p-2 lg:p-0">
            <img
              src={Art12}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art13}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art14}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
          <div className="p-2 lg:p-0">
            <img
              src={Art15}
              alt=""
              className="lg:max-w-[260px] lg:max-h-[260px] min-w-[145px] min-h-[145px]"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
