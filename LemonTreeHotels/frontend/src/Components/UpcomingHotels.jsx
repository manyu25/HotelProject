import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hotel1Img from "../Images/hotel_image1.jpg";
import Hotel2Img from "../Images/hotel_image2.jpg";
import Hotel3Img from "../Images/hotel_image3.jpg";
import Hotel4Img from "../Images/hotel_image4.jpg";
import Hotel5Img from "../Images/hotel_image5.jpg";
import Hotel6Img from "../Images/hotel_image6.jpg";

const UpcomingHotels = () => {
  const images = [
    Hotel1Img,
    Hotel2Img,
    Hotel3Img,
    Hotel4Img,
    Hotel5Img,
    Hotel6Img,
  ];

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides visible
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Autoplay speed
    responsive: [
      {
        breakpoint: 768, // Mobile screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // Tablet screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="px-2 my-10 sm:px-6 md:px-16 lg:px-24 xl:px-32 h-auto w-full">
      <div className="flex flex-col sm:flex-col md:flex-row justify-evenly items-center">
        <div className="w-full md:w-1/3">
          <h2 className="text-3xl md:text-4xl sm:font-semibold text-gray-700 text-center sm:text-left">
            Upcoming Hotels
          </h2>
          <p className="my-4 text-gray-800">
            The renowned hospitality chain is all set to unveil a collection of
            new hotels, promising unforgettable experiences for travelers...
          </p>
          <a href="#" className="hover:text-blue-500 underline font-medium">
            Explore..
          </a>
        </div>
        <div className="w-full md:w-2/3 mt-4 sm:mt-4 md:mt-0">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="rounded-tr-3xl rounded-bl-3xl shadow-md h-[15rem] relative"
              >
                <img
                  className="rounded-tr-3xl rounded-bl-3xl h-full w-full object-cover"
                  src={image}
                  alt={`Hotel ${index + 1}`}
                />
                <p className="bg-gray-700/75 text-sm text-center text-white p-4 absolute z-10 bottom-0 rounded-bl-3xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Animi, laboriosam.
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default UpcomingHotels;
