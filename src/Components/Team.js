import React from "react";
import data from "../Data/Team";

const Team = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto flex flex-col items-center py-12">
        <h1 className="text-white font-bold uppercase text-4xl">Our Team</h1>
        <div className="grid lg:grid-cols-7 grid-cols-3 gap-5 mt-10 child">
          {data.map((item) => {
            return (
              <div className="flex flex-col items-center">
                <img
                  src={item.image}
                  alt=""
                  className="h-32 w-32 object-cover rounded-full"
                />
                <h1 className="mt-4 text-gray-300 text-sm">{item.name}</h1>
                <span className="mt-1 text-sm text-gray-500">{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
