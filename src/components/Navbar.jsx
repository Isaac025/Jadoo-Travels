import React from "react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const links = [
  { title: "Service", to: "#serv" },
  { title: "Destination", to: "#dest" },
  { title: "Booking", to: "#book" },
  { title: "Testimonial", to: "#" },
  { title: "Login", to: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-30 relative">
      <div className="container flex gap-[8px] md:flex-row justify-between  md:items-center h-[80px]">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <div className="hidden lg:flex items-center gap-[49px]">
          {links.map((link, index) => {
            return (
              <a href={link.to} key={index} className="anchor">
                {link.title}
              </a>
            );
          })}
        </div>
        <button className="hidden lg:block border-2 border-black rounded-lg w-[120px] h-[40px] hover:bg-black hover:text-white cursor-pointer">
          Sign Up
        </button>
        <div className="block lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden block absolute top-[80px] bg-white p-2.5 w-1/2 left-0">
            <div className="flex flex-col items-center gap-[10px]">
              {links.map((link, index) => {
                return (
                  <a href={link.to} key={index} className="anchor">
                    {link.title}
                  </a>
                );
              })}
            </div>
            <button className="border-2 border-black rounded-lg w-[120px] h-[40px] hover:bg-black hover:text-white cursor-pointer">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
