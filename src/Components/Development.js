import React from "react";
import DevRoad from "../Assets/img.jpg";

const Development = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto py-12  lg:px-14 px-5">
        <div className="max-w-6xl mx-auto flex justify-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
            <div className="md:flex hidden items-center py-10">
              <img src={DevRoad} alt="pic" className="h-full w-full" />
            </div>
            <div className="flex flex-col lg:mt-0 mt-5 ">
              <p className="uppercase lg:text-white text-title font-semibold lg:text-4xl text-3xl tracking-tighter mt-1.5">
                Development Roadmap - <br />
                <span className="text-title text-2xl">
                  This is when the Magic Begins …
                </span>
              </p>
              <p className="font-normal text-white mt-3 text-lg">
                And now the exciting stuff starts to happen.
              </p>
              <p className="font-normal text-white mt-3 text-lg">
                We will find farmland to purchase to begin our quest. We will
                convert this land into a permaculture farm that will participate
                in the Australian Government's Soil Carbon Project – a project
                that has been set up along a similar ethos to ours and will help
                us to ensure that we are meeting our own carbon positive targets
                and nurturing the land effectively.
              </p>
              <p className="mt-3 font-normal text-white text-lg">
                We want to create not only a NFT culture that compensates for
                emissions but a{" "}
                <span className="font-semibold">safe haven</span> for
                like-minded people to become a part of. We want to create a
                Karma Culture. A tangible place where those people invested in
                our ethos can go, meet and make a difference. We aim to have
                yearly meet-ups on our land where we can make friends, work the
                land and bring a holistic expertise approach to improving and
                rejuvenating our land and eventually bringing back our
                environment to the Eden it could be again.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
