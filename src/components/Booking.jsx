import React from "react";
import selection from "../assets/selection.svg";
import watersport from "../assets/water-sport.svg";
import taxi from "../assets/taxi.svg";
import booking from "../assets/booking-img.jpg";
import leaf from "../assets/leaf.svg";
import map from "../assets/map.svg";
import send from "../assets/send.svg";
import building from "../assets/building.svg";
import heart from "../assets/heart.svg";
import favourite from "../assets/favorite.png";
const travels = [
  {
    id: 1,
    image: selection,
    title: "selection",
    heading: "Choose Destination",
    message:
      "Choose your favourite place. No matter where you travel inside the World.",
  },
  {
    id: 2,
    image: watersport,
    title: "water-sport",
    heading: "Make Payment",
    message:
      "After find your perfect spot, make your payment and get ready to travel.",
  },
  {
    id: 3,
    image: taxi,
    title: "taxi",
    heading: "Reach Airport on Selected Date",
    message:
      "Lastly, you have to arrive at the airport on time and enjoy the vacation.",
  },
];

const Booking = () => {
  return (
    <div className="container mt-[20px]" id="book">
      <div>
        <h5 className="text-gray-700 font-[700] tracking-widest text-lg md:text-xl">
          Easy and Fast
        </h5>
        <h1 className="text-[#08355c] text-[30px] md:text-[50px] font-[800]">
          Book your next trip <br />
          in 3 easy steps
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between mt-[50px]">
          <div className="flex flex-col gap-15 ">
            {travels.map((travel) => {
              const { image, heading, message, title, id } = travel;
              return (
                <div className="flex gap-6 items-center" key={id}>
                  <div className="w-[70px] h-[70px] bg-amber-400 rounded-lg flex items-center justify-center">
                    <img
                      src={image}
                      alt={title}
                      className="w-[40px] h-[40px]"
                    />
                  </div>
                  <div>
                    <h1 className="text-gray-700 font-[700] tracking-widest text-lg md:text-xl">
                      {heading}
                    </h1>
                    <p className="text-gray-500 max-w-[45%] w-full font-[400] text-[12px] md:text-[20px]">
                      {message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="max-w-[500px] w-full h-[500px] bg-white rounded-[50px] shadow-lg ">
            <img
              src={booking}
              alt="booking"
              className="w-full h-[50%] px-4 py-6 rounded-[50px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-[#08355c] text-[15px] md:text-[30px] font-[600] mb-3">
                Trip To Greece
              </h3>
              <p className="text-gray-600 font-[500]  text-lg md:text-xl">
                14-29 June | by Robbin joseph
              </p>
              <div className="flex gap-7 items-center mt-[15px]">
                <div className="w-[55px] h-[55px] bg-gray-300 rounded-full flex items-center justify-center">
                  <a href="#">
                    <img src={leaf} alt="leaf" className="w-[20px] h-[20px]" />
                  </a>
                </div>
                <div className="w-[55px] h-[55px] bg-gray-300 rounded-full flex items-center justify-center">
                  <a href="#">
                    <img src={map} alt="map" className="w-[20px] h-[20px]" />
                  </a>
                </div>
                <div className="w-[55px] h-[55px] bg-gray-300 rounded-full flex items-center justify-center">
                  <a href="#">
                    <img src={send} alt="send" className="w-[20px] h-[20px]" />
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[15px] p-4">
                <div className="flex gap-6 items-center">
                  <img
                    src={building}
                    alt="building"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="font-[600] text-gray-500 text-[15px] md:text-[25px]">
                    24 people going
                  </p>
                </div>
                {/* The button to open modal */}
                <div>
                  <label
                    htmlFor="my_modal_7"
                    className="btn cursor-pointer hover:bg-amber-500 "
                  >
                    <img
                      src={heart}
                      alt="heart"
                      className="w-[30px] h-[30px]"
                    />
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my_modal_7"
                    className="modal-toggle"
                  />
                  <div className="modal" role="dialog">
                    <div className="modal-box rounded-3xl flex items-center justify-center gap-8">
                      <img
                        src={favourite}
                        alt="favourite"
                        className="rounded-full w-[60px] h-[60px]"
                      />
                      <div>
                        <h3 className="text-lg font-600 text-gray-400">
                          Ongoing <br />
                          <span className="capitalize font-700 text-[32px] text-[#0c0c0c]">
                            trip to rome
                          </span>
                        </h3>
                        <p className="py-2 font-700 text-[20px]">
                          40% completed
                        </p>
                        <div className="progress-container">
                          <div
                            className="progress-bar"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">
                      Close
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
