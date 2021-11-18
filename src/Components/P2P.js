import React from "react";
import DevRoad from "../Assets/img.jpg";

const P2P = () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-center px-14">
        <div className="flex flex-col items-center lg:w-1/2 w-full">
          <div className="lg:hidden block">
            <img src={DevRoad} alt="" />
          </div>
          <h1 className="text-title uppercase text-center font-semibold text-4xl mt-10 lg:mt-0">
            Peer to peer learning
          </h1>
          <p className="text-white font-semibold uppercase text-3xl mt-2 text-center">
            By using permaculture and modern methods of managing the land,we
            hope to rejuvenate and improve it for generations to come.
          </p>
        </div>
        <div className="flex sm:px-5 px-1 lg:py-24 pb-4 lg:flex-row flex-col items-center">
          <div className="md:max-w-2xl md:w-full w-5/6 mb-10 md:mb-0 mt-10 lg:mt-0 lg:block hidden">
            <img src={DevRoad} alt="" className="rounded-lg" />
          </div>
          <div className="lg:flex-grow md:w-full flex flex-col lg:pl-20 md:pl-16 pl-0 md:items-start md:text-left items-center my-10 lg:mt-0">
            <div className="flex flex-col items-start text-secondaryText px-4">
              <div className="w-full">
                <h1 className="text-title uppercase lg:text-right text-center font-semibold text-4xl">
                  People empowerment
                </h1>
              </div>
              <div className="lg:mt-8 mt-6">
                <p className="text-lg text-white text-center">
                  By Creating a community of people who are a network, not a
                  place. Joining together permaculture enthusiasts, mentors,
                  teachers and students to facilitate peer-to-peer learning we
                  will empower individuals to create ecocentric solutions for
                  better living on Mother Earth. Members of the community will
                  have the opportunity to be fully involved in all stages of the
                  restoration of the land. To maintain a true connection to you,
                  as a Mother Earth NFT owner, we will be running a YouTube
                  channel to vlog and document the progress of the project and
                  how we are restoring and improving the land. We will be
                  interviewing experts and holding talks about how we can work
                  together to put back what has been lost and enrich our soil
                  for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2P;
