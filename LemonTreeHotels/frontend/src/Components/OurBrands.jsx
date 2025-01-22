import React from 'react';
import RewardsImg from '../Images/rewards_banner_1.jpg';
import HotelImg1 from '../Images/hotel_image1.jpg';
import HotelImg2 from '../Images/hotel_image2.jpg';
import HotelImg3 from '../Images/hotel_image3.jpg';
import HotelImg4 from '../Images/hotel_image4.jpg';

const OurBrands = () => {
  const brands = [
    {
      name: 'Lemon Tree Premier',
      description:
        'Experience luxury at its best with premium services and sophisticated design.',
      img: HotelImg1,
      features: ['Upscale Comfort', 'Fine Dining', 'State-of-the-Art Facilities'],
    },
    {
      name: 'Lemon Tree Hotels',
      description:
        'Affordable elegance for business and leisure travelers alike.',
      img: HotelImg2,
      features: ['Midscale Comfort', '24/7 Services', 'Pet-Friendly Rooms'],
    },
    {
      name: 'Red Fox Hotels',
      description:
        'Smart and vibrant spaces for budget-conscious travelers.',
      img: HotelImg3,
      features: ['Budget-Friendly', 'Tech-Enabled Services', 'Youthful Vibe'],
    },
    {
      name: 'Keys Hotels',
      description:
        'A refreshing and modern approach to hospitality.',
      img: HotelImg4,
      features: ['Modern Design', 'Innovative Dining', 'Dynamic Spaces'],
    },
  ];

  return (
    <div className="bg-gray-50 font-macondo">
      
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${RewardsImg})`, 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Our Brands</h1>
          <p className="text-lg mb-6">
            Discover the unique experiences each of our hotel brands offers, crafted to cater to your diverse needs.
          </p>
          <button className="px-6 py-3 bg-green-600 rounded shadow-lg hover:bg-green-700 focus:ring-4 focus:ring-green-400">
            Book Now
          </button>
        </div>
      </div>

    
      <div className="p-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Explore Our Brands</h2>
          <p className="text-lg text-gray-600 mt-4">
            Each of our brands is uniquely tailored to provide a distinctive hospitality experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {brands.map((brand) => (
    <div
      key={brand.name}
      className="relative group bg-white shadow-lg rounded-lg overflow-hidden"
    >
      {/* Brand Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={brand.img}
          alt={brand.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60"></div>
      </div>

      {/* Brand Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{brand.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{brand.description}</p>

        {/* Features List */}
        <ul className="space-y-2">
          {brand.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        {/* Call-to-Action */}
        <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 focus:ring-4 focus:ring-green-400">
          Learn More
        </button>
      </div>

      {/* Hover Overlay for Interaction */}
      <div className="absolute inset-0 bg-green-600 bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-4xl font-extrabold">Click to Explore</p>
      </div>
    </div>
  ))}
</div>

      </div>

      <div className="bg-green-100 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">What Our Guests Say</h2>
          <p className="text-lg text-gray-600 mt-4">
            Hear from our guests who have experienced the unique charm of our brands.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 ">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105">
            <p className="italic text-gray-600">
              "Lemon Tree Premier offers an unparalleled luxury experience. I loved the attention to detail!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">- John Doe</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105">
            <p className="italic text-gray-600">
              "Red Fox Hotels were perfect for my budget and provided everything I needed for a comfortable stay."
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Jane Smith</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105">
            <p className="italic text-gray-600">
              "Keys Hotels surprised me with their vibrant designs and innovative services."
            </p>
            <p className="mt-4 font-semibold text-gray-800">- Michael Lee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBrands;
