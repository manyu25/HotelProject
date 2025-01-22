import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../Images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="top-0 w-full sticky z-20 font-macondo">
      <div className="bg-blend-darken backdrop-blur-md bg-white/30 border h-18 p-2 flex justify-between items-center shadow-sm shadow-gray-500">
        {/* Logo */}
        <a
          href="../index.html"
          className="h-full flex justify-center items-center hover:scale-125 duration-300"
        >
          <img className="h-[3rem] w-[4.5rem]" src={LogoImg} alt="Logo" />
        </a>

        {/* Navigation Links for larger screens */}
        <div className="hidden sm:flex justify-evenly items-center gap-4 sm:w-full md:w-auto font-semibold text-gray-800">
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

        {/* Book Now Button and User Icon */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="bg-[#d7b56d] hover:bg-[#dda734] px-4 py-2 text-sm font-medium rounded-md text-gray-700">
            Book Now
          </button>
          <i className="fa-solid fa-user p-2 text-white bg-gray-700 rounded-full hover:cursor-pointer"></i>
        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="sm:hidden flex items-center">
          <i
            className="fa-solid fa-bars text-2xl cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col bg-white shadow-md text-gray-800 font-semibold px-5 py-4">
          <Link
            to="/"
            className="py-2 hover:bg-gray-100 rounded-md duration-300"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Home
          </Link>
          <Link
            to="/hotels"
            className="py-2 hover:bg-gray-100 rounded-md duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Hotel
          </Link>
          <Link
            to="/offers-and-promotions"
            className="py-2 hover:bg-gray-100 rounded-md duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Offers & Promotions
          </Link>
          <Link
            to="/rewards-program"
            className="py-2 hover:bg-gray-100 rounded-md duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Rewards Program
          </Link>
          <Link
            to="/our-brands"
            className="py-2 hover:bg-gray-100 rounded-md duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Brands
          </Link>
          <Link
            to="/sustainability"
            className="py-2 hover:bg-gray-100 rounded-md duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Sustainability
          </Link>

          {/* Book Now and User Icon for Smaller Screens */}
          <button className="bg-[#d7b56d] hover:bg-[#dda734] px-4 py-2 mt-2 text-sm font-medium rounded-md text-gray-700">
            Book Now
          </button>
          <i className="fa-solid fa-user mt-2 p-2 text-white bg-gray-700 rounded-full hover:cursor-pointer"></i>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
