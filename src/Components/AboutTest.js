import React from "react";
import Pic from "../Assets/about.jpg";

const About = () => {
  return (
    <div className="bg-primary">
      <div className="max-w-5xl mx-auto px-20 flex lg:py-10 pt-5 pb-0 lg:flex-row flex-col-reverse items-center">
        <div className="w-2/3 h-full">
          <img src={Pic} alt="" />
        </div>
        <div className="md:w-full flex flex-col items-start">
          <div className="flex flex-col items-start text-gray-500 px-4">
            <div className="flex items-center justify-center">
              <h1 className="font-bold text-sm uppercase">About</h1>
              <hr className="w-32 ml-8 bg-gray-500 border-none h-px inline-block md:hidden" />
            </div>
            <h1 className="text-white lg:text-4xl text-2xl font-bold mt-4">
              Welcome to the <br />
              <span className="text-title uppercase">Mother Earth NFT</span>
            </h1>
            <p className="lg:mt-3 mt-2 text-white">
              Mother Earth NFTs are refined, classic and lovingly created works
              of art that depict Mother Earth in all her Glory. The Mother Earth
              NFTs are a private collection of 12,345 extraordinary creations
              created on the Ethereum blockchain as ERC-721 token and hosted on
              IPFS. Dropping December 12TH 2021.
            </p>
            <p className="lg:mt-5 mt-3 text-white">
              Each Mother Earth NFT is a uniquely designed and crafted piece of
              artwork. Your generated art piece will be a feminine
              representation of the divine 'Mother Earth'. There are over 280
              hand drawn traits that make up each Gaia-inspired image. Her hair,
              hairpiece, skin colour, eyes, clothes and other accessories link
              together to create an image of a beautiful feminine figure. Some
              of the traits are rare, just as some people have rare traits but
              all are equal in the eyes of The Universe. Each Mother Earth NFT
              is special in its own uniqueness and form.
            </p>
            <a href="/" className="text-title uppercase mt-5">
              Join us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
