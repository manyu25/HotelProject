import React from "react";
import heroImage from '../Images/hero.jpg';

 const Hero = () => {
    return (
        <div
          className="bg-start bg-cover bg-no-repeat sm:bg-cover sm:h-[35rem] h-[20rem] p-4 flex justify-center sm:items-end items-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <input
            type="text"
            className="sm:mb-14 border-2 border-gray-300 rounded-sm px-4 py-2 w-[25rem] sm:w-[33rem] text-lg placeholder:text-gray-400 placeholder:font-semibold"
            placeholder="Where to next?"
          />
            
        </div>
    )
};

export default Hero;