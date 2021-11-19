import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import data from "../Data/FAQ";

const FAQ = () => {
  return (
    <div className="bg-primary ">
      <div className="container mx-auto md:py-20 py-10 lg:px-0 px-4">
        <h1 className="text-white font-bold text-4xl text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className="text-white mx-auto text-center mt-5 w-1/2">
          We ARE here to answer any questions you have about The Mother Earth
          NFTs! Here are some of the most frequently asked questions:
        </p>
        <div className="w-full p-2 rounded-2xl lg:mt-[72px] mt-5">
          {data.map((item) => {
            return (
              <Disclosure>
                {({ open }) => (
                  <div className="border-b border-secondaryBg md:pb-6 pb-4 mt-6">
                    <Disclosure.Button className="flex justify-between w-full ">
                      <span className="md:text-lg text-sm md:font-semiboldbold font-medium text-white md:text-center text-left">
                        {item.question}
                      </span>
                      <span className="transform transition-all duration-300">
                        {open ? (
                          <ChevronUpIcon className="w-5 h-5 text-white " />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 text-white " />
                        )}
                      </span>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-400 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-400 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="md:text-lg text-sm text-gray-300 mt-6 flex flex-col space-y-2">
                        <span>{item.answer}</span>
                        <span>{item.answer2}</span>
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
