import React from "react";
import data from "../Data/RoadMap";

const RoadMap = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto text-center md:pt-16 pt-12">
        <div>
          <h1 className="text-title text-4xl font-semibold uppercase">
            Launch Roadmap
          </h1>
          <p className="lg:mt-10 mt-5 text-white text-lg text-center lg:w-full w-2/3 mx-auto">
            As we value our community and its creativity, our roadmap will be{" "}
            <br className="hidden md:inline-block" />
            updated according to your comments and ideas.
          </p>
          <div className="max-w-3xl mx-auto pt-10 lg:px-0 px-5">
            <div className="flex text-left border-t pt-5 pb-8 border-gray-500">
              <div className="w-1/4">
                <h1 className="text-gray-300 text-lg">Presale</h1>
              </div>
              <p className="w-3/4 text-gray-300 md:text-lg text-base ml-4 lg:ml-0">
                We will be giving away some of the 180 Mother Earth NFTs to
                people who have been an integral part in building our community.
                Those people who have helped us take our first, powerful strides
                towards creating a community that can build a better future for
                all the inhabitants of our Mother Earth.
              </p>
            </div>
            <div className="flex text-left border-t pt-5 pb-8 border-gray-500">
              <div className="w-1/4 flex flex-col">
                <h1 className="text-gray-300 text-lg -ml-3">Giveaways</h1>
                <span className="lg:text-3xl text-3xl text-white font-semibold font-number">
                  25%
                </span>
              </div>
              <p className="w-3/4 text-gray-300  md:text-lg text-base ml-4 lg:ml-0">
                Every 1000 primary sales, we will pick 5 random Mother Earth NFT
                owners and air-drop them 1 NFT
              </p>
            </div>
            <div className="flex flex-col text-left border-t pt-5 pb-8 border-gray-500 space-y-4">
              <h1 className="text-gray-300 mb-5 text-lg">Community Action</h1>
              {data.map((item) => {
                return (
                  <div className="flex whitespace-pre-line">
                    <div className="w-1/4 flex items-center">
                      <span className="text-white font-bold text-4xl font-number">
                        {item.perc}
                      </span>
                    </div>
                    <div className="w-3/4">
                      <h1 className="text-white font-semibold md:text-lg text-base">
                        {item.title}
                      </h1>
                      <p
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                        className="text-gray-300 md:text-lg text-base"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex text-left border-t pt-5 pb-12 border-gray-500">
              <div className="w-1/4 flex justify-start -ml-3 ">
                <h1 className="font-bold md:text-2xl text-lg text-white uppercase w-3/4">
                  After we have sold out
                </h1>
              </div>
              <div className="w-3/4 ml-3">
                <h1 className="text-white font-semibold text-lg ">
                  Rarity Tools
                </h1>
                <p className="text-gray-300 text-lg">
                  We will list the Mother Earth NFTs on Rarity Tools. This will
                  give you the chance to be a real part of the global NFT
                  community and, hopefully, to promote our carbon-positive
                  culture.
                </p>
                <p className="text-gray-300 mt-4 text-lg">
                  We will be air-dropping to all Mother Earth NFT a new
                  collection of NFTs. All trading fee's of the new NFTs shall be
                  kept by the Artist and Program - mer as a Thank you for their
                  hard work and dedication. We wait for after the air-drop
                  before distributing the money to the Charities as decided by
                  the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
