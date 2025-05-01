import React from "react";
import heroImg from "../assets/hero-img.png";
import Play from "../assets/play.svg";

const hero = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-[100px]">
        <img src={heroImg} alt="Hero-img" />
        <div className="text-center md:text-left px-[20px]">
          <h5 className="text-red-500 uppercase text-lg ">
            Best Destinations around the world
          </h5>
          <h1 className="text-[DarkBlue] text-[30px] md:text-[50px] font-[900] italic">
            Travel, enjoy <br />
            and live a new <br />
            and full life
          </h1>
          <p className="my-5 text-gray-500 font-[600] text-lg">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <button className="bg-yellow-500 h-[60px] w-[200px] rounded-lg text-white font-[700] text-[18px] hover:bg-yellow-600 cursor-pointer">
              Find Out More
            </button>
            <div className="flex gap-3 items-center">
              <a href="https://www.youtube.com">
                <img
                  src={Play}
                  alt="play"
                  className="bg-red-400 w-[50px] h-[50px] rounded-full p-3"
                />
              </a>
              <p className="text-gray-500 font-[600] capitalize">play Demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
