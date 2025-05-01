import React from "react";
import logo1 from "../assets/1.png";
import logo2 from "../assets/2.png";
import logo3 from "../assets/3.png";
import logo4 from "../assets/4.png";
import logo5 from "../assets/5.png";

const logos = [logo1, logo2, logo3, logo4, logo5];

const Logos = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center md:justify-between mt-[100px]">
        {logos.map((logo, index) => {
          return (
            <div
              className="hover:shadow-md hover:w-[200px] hover:h-[50px] hover:flex hover:items-center hover:justify-center  hover:bg-white"
              key={index}
            >
              <img src={logo} alt="logo" key={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Logos;
