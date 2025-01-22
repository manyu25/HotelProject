import React from "react";
import AhmedabadImg from '../Images/Ahmedabad.jpeg';
import BengaluruImg from '../Images/Bengaluru.jpeg';
import ChennaiImg from '../Images/Chennai.jpeg';
import DelhiImg from '../Images/Delhi.jpeg';
import GurugramImg from '../Images/Gurugram.jpeg';
import HyderabadImg from '../Images/Hyderabad.jpeg';
import MumbaiImg from '../Images/Mumbai.jpeg';
import PuneImg from '../Images/Pune.jpeg';


const destinations = [
    { name: "Ahmedabad", img: AhmedabadImg, hotels: 0 },
    { name: "Bengaluru", img: BengaluruImg, hotels: 0 },
    { name: "Chennai", img: ChennaiImg, hotels: 0 },
    { name: "Delhi", img: DelhiImg, hotels: 0 },
    { name: "Gurugram", img: GurugramImg, hotels: 0 },
    { name: "Hyderabad", img: HyderabadImg, hotels: 0 },
    { name: "Mumbai", img: MumbaiImg, hotels: 0 },
    { name: "Pune", img: PuneImg, hotels: 0 },
  ];




const Destinations =() =>{
    return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 h-auto w-full">
      <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 py-8">
        Choose Your Destination
      </h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {destinations.map((destination) => (
          <a
            key={destination.name}
            href="#"
            className="shadow-sm shadow-gray-600 rounded-md border sm:border-2 hover:scale-105 duration-300 bg-white"
          >
            <div className="flex items-center justify-start h-full">
              <div className="w-16 sm:w-20 md:w-24 h-14 sm:h-20 md:h-20">
                <img
                  className="h-full w-full rounded-md bg-cover bg-center"
                  src={`${destination.img}`}
                  alt={destination.name}
                />
              </div>
              <div className="px-3 py-2 text-left">
                <h4 className="text-gray-800 font-semibold text-sm sm:text-md md:text-lg lg:text-xl">
                  {destination.name}
                </h4>
                <p className="text-xs sm:text-sm">{destination.hotels} Hotels</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      <a
        href="#"
        className="block mt-6 text-center text-gray-800 underline hover:text-blue-500 hover:underline py-4"
      >
        Explore more destinations
      </a>
    </div>
)}

export default Destinations;