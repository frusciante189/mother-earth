import { useState, useRef, useEffect } from "react";
import Banner from "../Assets/Banner.JPG";

const Hero = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Dec 19, 2021 12:34:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      console.log(distance);
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop
        clearInterval(interval.current);
      } else {
        // update
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);
  return (
    <div className="h-99 relative ">
      <img src="" className="bg-banner bg-cover bg-top h-full" alt="" />
      <div className="text-white flex flex-col items-center justify-center pt-20 absolute lg:bottom-8 bottom-3 inset-x-0 max-w-[500px] mx-auto">
        <h1 className="text-2xl uppercase font-semibold mt-2 text-white bg-primary text-center w-full">
          Launching on December 19th
        </h1>
        <div className="grid grid-cols-4 font-semibold mx-auto bg-primary w-full">
          <div>
            <div className="flex flex-col justify-center items-center py-2 px-8">
              <span className="text-4xl">{days}</span>
              <span className="text-sm font-normal text-title uppercase">
                Days
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center py-2 px-8">
              <span className="text-4xl">{hours}</span>
              <span className="text-sm font-normal text-title uppercase">
                Hours
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center py-2 px-8">
              <span className="text-4xl">{minutes}</span>
              <span className="text-sm font-normal text-title uppercase">
                Minutes
              </span>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center py-2 px-8">
              <span className="text-4xl">{seconds}</span>
              <span className="text-sm font-normal text-title uppercase">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
