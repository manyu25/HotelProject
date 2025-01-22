import React from 'react'
import rewardsImage from '../Images/rewards_banner_1.jpg';

const OurRewards = () => {
  return (
    <div className="my-6 h-auto w-full font-macondo">
          <h1 className="text-center text-4xl py-5 font-semibold text-gray-700">
            Our Rewards Program
          </h1>
          <div
            style={{
              backgroundImage: `url(${rewardsImage})`, 
            }}
            className="h-[30rem] bg-center bg-cover bg-no-repeat flex flex-col items-center md:items-start justify-center md:px-[10rem] px-[1rem] text-white gap-4 backdrop-blur-sm"
          >
            <p className="font-medium text-lg md:text-xl w-full md:w-1/2 md:text-left text-center">
              Members exclusive rewards and privileges with endless possibilities,
              from free stays and upgrades to special offers and previews, and much
              more...
            </p>
            <h1 className="font-medium text-3xl sm:text-5xl">Infinity Rewards</h1>
            <div className="mt-3">
              <button className="mx-2 bg-transparent p-1 px-7 text-md hover:bg-black text-white text-sm rounded-md border-2 border-white">
                Explore
              </button>
              <button className="bg-[#d7b56d] hover:bg-[#dda734] p-1 px-7 text-black text-md text-sm rounded-md border-2 border-white">
                Join Us
              </button>
            </div>
          </div>
        </div>
  )
}

export default OurRewards
