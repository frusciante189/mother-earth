import React from "react";

const Story = () => {
  return (
    <div className="bg-secondary">
           <div className="container mx-auto pt-12 pb-24  lg:px-14 px-5">
        <div className="flex items-center justify-center pb-20 pt-10">
          <button className="bg-gradient-to-l from-[#00655b] to-[#00a231] text-white rounded-lg px-24 py-8 font-medium hover:bg-opacity-80 hover:text-opacity-80 uppercase text-4xl">
            Mint
          </button>
        </div>
        <div className="max-w-5xl mx-auto flex">
          <div className="md:w-3/4 w-full mx-auto">
            <h1 className="text-white md:text-4xl text-3xl font-medium uppercase text-center">
              The Story
            </h1>
            <p className="mt-5 text-white text-center font-normal text-lg">
              Our planet, to many, is a mother, and we her children. She has
              many names - Gaia, Tellus, Rhea, and Mother Earth. We are
              dependent on Mother Earth throughout our lives. She provides our
              food and water, the air we breathe, and the beauty that inspires
              us to thrive. We believe she is failing to get the respect she
              deserves. We love, admire and respect the planet and we want to
              show this through our carbon compensation plan.
            </p>
            <h1 className="text-title uppercase font-semibold text-2xl mt-10 text-center">
              "I took a walk in the woods and came out taller than the trees” -
              Henry David Thoreau
            </h1>
            <p className="mt-10 text-center text-white font-normal text-lg">
              We at the Mother Earth NFT want to use our power for good –
              literally. Human beings have been laying waste to the planet, and
              climate change is in full swing. We want to do something about it,
              and we need you to make it happen. We have created a
              carbon-positive NFT project. We wanted to create a platform by
              which people could be involved in the NFT community without the
              pain of the excessive carbon footprint that comes with it while
              still being able to buy beautifully designed and rare NFTs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
