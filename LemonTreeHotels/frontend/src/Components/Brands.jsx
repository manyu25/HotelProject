import React from 'react';
import { FaPlus } from "react-icons/fa";
import OurBrandsImg from '../Images/our-brands.jpg';

const Brands = () => {
  return (
    <div className="px-2 my-6 sm:px-6 md:px-16 lg:px-24 xl:px-32 h-auto w-full">
    <h1 className="text-center text-4xl py-5 font-semibold text-gray-700">
      OUR BRANDS
    </h1>
    <div className="h-auto w-full flex md:flex-row gap-6 flex-col-reverse justify-center items-start">
      {/* Left Section: Image */}
      <div className="p-4 h-[30rem] md:h-[35rem] w-full md:w-1/2 rounded-tr-3xl rounded-bl-3xl shadow-sm shadow-gray-600">
        <img
          src= {OurBrandsImg}
          className="rounded-tr-3xl rounded-bl-3xl shadow-sm shadow-gray-600 h-full w-full"
          alt="Our Brands"
        />
      </div>

      {/* Right Section: List */}
      <div className="flex flex-col gap-2 justify-center items-start w-full md:w-1/2">
        {Array(6)
          .fill("ABCD EFGH")
          .map((brand, index) => (
            <div
              key={index}
              className="shadow-sm shadow-gray-500 flex py-2 px-6 items-center w-full"
            >
              <h4 className="text-gray-600 font-bold font-mono self-start">
                {brand}
              </h4>
              <FaPlus
                className="rounded-full self-end ml-auto hover:cursor-pointer hover:scale-110 hover:shadow-sm shadow-gray-500 bg-black text-white p-1"
                size={16} 
              />
            </div>
          ))}
      </div>
    </div>
  </div>
  )
}

export default Brands
