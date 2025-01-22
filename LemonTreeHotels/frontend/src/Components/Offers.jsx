import React from 'react';
import OfferImg1 from '../Images/offer-promotion1.webp';
import OfferImg2 from '../Images/offer-promotion2.webp';
import OfferImg3 from '../Images/offer-promotion3.webp';
import OfferImg4 from '../Images/offer-promotion4.webp';

const offers = [
    { id: 1, imgSrc: OfferImg1, title: "Lorem, ipsum." },
    { id: 2, imgSrc: OfferImg2, title: "Lorem, ipsum." },
    { id: 3, imgSrc: OfferImg3, title: "Lorem, ipsum." },
    { id: 4, imgSrc: OfferImg4, title: "Lorem, ipsum." },
  ];

const OfferandPromotions = () => {
    return (
        <div className="px-2 my-6 sm:px-6 md:px-16 lg:px-24 xl:px-32 h-auto w-full">
      <h1 className="text-center text-4xl py-5 font-semibold text-gray-700">
        Offers & Promotions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="w-full h-[15rem] relative rounded-tr-3xl rounded-bl-3xl"
          >
            <img
              src={offer.imgSrc}
              className="h-full rounded-tr-3xl rounded-bl-3xl w-full absolute"
              alt={offer.title}
            />
            <div className="absolute flex w-full z-10 bg-gray-700/75 py-3 text-white bottom-0 right-0 rounded-bl-3xl justify-around items-center">
              <h2 className="text-lg">{offer.title}</h2>
              <button className="bg-[#d7b56d] hover:bg-[#dda734] p-1 px-2 text-md font-medium self-end rounded-md text-gray-700 border border-gray-700">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default OfferandPromotions;