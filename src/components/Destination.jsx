import React from "react";
import italy from "../assets/italy.jpg";
import london from "../assets/London.jpg";
import europe from "../assets/fullEurope.jpg";
import { FaLocationArrow } from "react-icons/fa";

const tour = [
  {
    id: 1,
    image: italy,
    city: "Rome, Italy",
    price: 5.42,
    duration: "10 Days Trip",
  },
  {
    id: 2,
    image: london,
    city: "London, UK",
    price: 4.2,
    duration: "12 days Trip",
  },
  {
    id: 3,
    image: europe,
    city: "Full Europe",
    price: 15,
    duration: "28 days Trip",
  },
];

const Destination = () => {
  return (
    <div className="container mt-[80px] " id="dest">
      <div className="text-center mb-[30px]">
        <h5 className="text-gray-700 font-[700] tracking-widest text-lg md:text-xl ">
          Top Selling
        </h5>
        <h1 className="text-[#08355c] text-[30px] md:text-[50px] font-[800]">
          Top Destinations
        </h1>
      </div>
      <section className="flex flex-col md:flex-row items-center md:Justify-center gap-4">
        {tour.map((place) => {
          const { id, image, city, price, duration } = place;
          return (
            <div
              key={id}
              className="rounded-3xl max-w-[400px] w-full h-screen max-h-[520px] shadow-lg"
            >
              <img
                src={image}
                alt={city}
                className="object-cover h-[80%] w-full rounded-t-3xl"
              />
              <div className="p-3">
                <div className="flex items-center justify-between mb-6">
                  <a className="anchor cursor-pointer text-[20px] md:text-[32px] text-[#08355c]  font-[500]">
                    {city}
                  </a>
                  <a className="cursor-pointer text-[15px] md:text-[20px]">
                    ${price}k
                  </a>
                </div>
                <div className="flex gap-2.5 items-center">
                  <span>
                    <FaLocationArrow />
                  </span>
                  <a className="cursor-pointer text-[#08355c]  font-[500]">
                    {duration}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Destination;
