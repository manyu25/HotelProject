import React from "react";
import { Link } from 'react-router-dom';
import LogoImg from '../Images/logo.png';


const Navbar = () => {
  return (
    <nav className="top-0 w-full sticky z-20 font-macondo">
      <div className="bg-blend-darken backdrop-blur-md bg-white/30 border h-18 p-2 flex justify-center items-center sm:flex-col md:flex-row shadow-sm shadow-gray-500">
        {/* Hamburger Menu for smaller screens */}
        <div className="sm:hidden md:hidden text-2xl flex justify-start items-center px-6 w-1/3">
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Logo */}
        <a
          href="../index.html"
          className="h-full flex justify-center items-center sm:w-full md:w-1/12 w-1/3 hover:scale-125 duration-300"
        >
          <img className="h-[3rem] w-[4.5rem]" src={LogoImg} alt="Logo"/>
        </a>

        {/* Navigation Links */}
        <div className="sm:flex md:flex justify-evenly items-center gap-4 px-5 sm:w-full md:w-9/12 sm:text-sm md:text-lg font-semibold hidden text-gray-800">
  <Link
    to="/"
    className="w-auto px-2 py-2 hover:scale-125 duration-300"
  >
    Home
  </Link>
  <Link
    to="/hotels"
    className="w-auto px-2 py-2 hover:scale-125 duration-300"
  >
    Hotel
  </Link>
  <Link
    to="/offers-and-promotions"
    className="w-auto px-2 py-2 hover:scale-125 duration-300"
  >
    Offers & Promotions
  </Link>
  <Link
    to="/rewards-program"
    className="w-auto px-2 py-2 hover:scale-125 duration-300"
  >
    Rewards Program
  </Link>
  <Link
    to="/our-brands"
    className="w-auto px-2 py-2 hover:scale-125 duration-300"
  >
    Our Brands
  </Link>
  <Link
    to="/sustainability"
    className="w-auto px-2 py-2 hover:scale-125 duration-300"
  >
    Sustainability
  </Link>
</div>


        {/* Call-to-Action and User Icon */}
        <div className="sm:w-full md:w-2/12 w-1/3 md:flex justify-evenly items-center sm:hidden">
          <button className="bg-[#d7b56d] hover:bg-[#dda734] p-1 px-2 text-md font-medium rounded-md text-gray-700">
            Book Now
          </button>
          <i className="fa-solid fa-user p-2 text-white bg-gray-700 rounded-full hover:cursor-pointer hidden sm:block"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
