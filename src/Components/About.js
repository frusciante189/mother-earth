import React from "react";
import Pic from "../Assets/about.jpg";

const Test = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto md:py-16 py-20 px-14">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
            <div className="md:flex hidden items-center">
              <img src={Pic} alt="pic" className="h-full w-full" />
            </div>
            <div className="flex flex-col lg:mt-0 mt-5 ">
              <h1 className="text-white uppercase font-normal">About</h1>
              <p className="uppercase text-white font-semibold text-4xl tracking-tighter mt-1.5">
                Welcome to the <br />
                <span className="text-title"> Mother Earth NFT</span>
              </p>
              <p className="font-normal text-white mt-3 text-lg">
                Mother Earth NFTs are refined, classic and lovingly created
                works of art that depict Mother Earth in all her Glory. The
                Mother Earth NFTs are a private collection of 12,345
                extraordinary creations created on the Ethereum blockchain as
                ERC-721 token and hosted on IPFS. <br />
                <span className="font-semibold">
                  Dropping December 12TH 2021
                </span>
              </p>
              <p className="mt-3 font-normal text-white text-lg">
                Each Mother Earth NFT is a uniquely designed and crafted piece
                of artwork. Your generated art piece will be a feminine
                representation of the divine 'Mother Earth'. There are over 280
                hand drawn traits that make up each Gaia-inspired image. Her
                hair, hairpiece, skin colour, eyes, clothes and other
                accessories link together to create an image of a beautiful
                feminine figure. Some of the traits are rare, just as some
                people have rare traits but all are equal in the eyes of The
                Universe <br />
                <span className="font-semibold">
                  Each Mother Earth NFT is special in its own uniqueness and
                  form.
                </span>
              </p>
              <a href="/" className="uppercase text-title mt-4">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
