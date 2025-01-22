import React, {useEffect} from "react";
import offer1Img from '../Images/offer-promotion1.webp';
import offer2Img from "../Images/offer-promotion2.webp";
import offer3Img from "../Images/offer-promotion3.webp";
import offer4Img from "../Images/offer-promotion4.webp";
import PartnerOfferImg1 from "../Images/partnersOffer1.jpg";
import PartnerOfferImg2 from "../Images/partnersOffer2.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const OffersPage = () => {
    useEffect(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
    
        // Animation for #opbtn1 button
        gsap.from("#opbtn1 button", {
          scrollTrigger: {
            scroller: "body",
            trigger: "#opbtn1",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 0,
          translateY: 100,
        });
    
        // Animation for #opbtn2 button
        gsap.from("#opbtn2 button", {
          scrollTrigger: {
            scroller: "body",
            trigger: "#opbtn2",
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
          opacity: 0,
          translateY: 100,
        });
      }, []);
  return (
    <div className="font-macondo">
      {/* Sub Navigation */}
      <div className="w-full text-lg px-[2rem] py-3 font-semibold text-gray-700 text-center md:text-left border border-gray-200">
        <a href="http://127.0.0.1:5500/src/index.html">Home</a> /{" "}
        <span className="text-gray-500">Special Offer</span>
      </div>

      {/* Offers and Promotions */}
      <div className="px-2 py-6 sm:px-6 md:px-16 lg:px-24 xl:px-32 h-auto w-full bg-gray-200">
        <h1 className="text-center text-4xl py-5 font-semibold text-gray-700">
          Offers & Promotions
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="w-full h-[15rem] relative rounded-tr-3xl rounded-bl-3xl"
            >
              <img
                src= {item === 1 ? offer1Img : item === 2 ? offer2Img : item === 3 ? offer3Img : offer4Img}
                className="h-full rounded-tr-3xl rounded-bl-3xl w-full absolute"
                alt=""
              />
              <div className="absolute flex w-full z-10 bg-gray-700/75 py-3 text-white bottom-0 right-0 rounded-bl-3xl justify-around items-center">
                <h2 className="text-lg">Lorem, ipsum.</h2>
                <button className="bg-[#d7b56d] hover:bg-[#dda734] p-1 px-2 text-md font-medium self-end rounded-md text-gray-700 border border-gray-700">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner's Offers */}
      <div className="px-2 py-6 sm:px-6 md:px-16 lg:px-24 xl:px-32 h-auto w-full">
        <h1 className="text-center text-4xl py-5 font-semibold text-gray-700">
          Partner's Offers
        </h1>
        <p className="text-md font-semibold text-gray-600 text-center md:px-[10rem]">
          Enjoy a wide range of benefits thanks to our partner's exclusive offers
          and services. Join our loyalty program today and discover an all-new
          world of personalised offers and exclusive discounts tailored to your
          needs.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center py-6">
          <div
            className="w-full relative md:w-1/2 p-4 shadow-md shadow-gray-400"
            id="opbtn1"
          >
            <img
              src={PartnerOfferImg1}
              className="shadow-sm shadow-gray-300"
              alt=""
            />
            <button className="px-6 py-2 outline outline-offset-2 rounded-lg outline-white text-white text-md font-medium absolute bottom-6 right-6">
              Explore
            </button>
          </div>
          <div
            className="w-full relative md:w-1/2 p-4 shadow-md shadow-gray-400"
            id="opbtn2"
          >
            <img
              src={PartnerOfferImg2}
              className="shadow-sm shadow-gray-300"
              alt=""
            />
            <button className="px-6 py-2 outline outline-offset-2 rounded-lg outline-white text-white text-md font-medium absolute bottom-6 right-6">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
