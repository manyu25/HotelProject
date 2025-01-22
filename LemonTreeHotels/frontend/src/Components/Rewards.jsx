import React from 'react';

const Rewards = () => {
  const tiers = [
    {
      name: 'Silver Tier',
      description: 'Start your journey with exclusive discounts and basic benefits.',
      img: 'https://www.lemontreehotels.com/assets/front/images/InfinityTierCardsSilver.svg',
      perks: ['5% Discount', 'Early Check-in', 'Basic Reward Points'],
    },
    {
      name: 'Gold Tier',
      description: 'Enjoy premium benefits and greater rewards.',
      img: 'https://www.lemontreehotels.com/assets/front/images/InfinityTierGold.svg',
      perks: ['10% Discount', 'Priority Check-in', 'Free Room Upgrade'],
    },
    {
      name: 'Platinum Tier',
      description: 'Experience the ultimate in luxury and privileges.',
      img: 'https://www.lemontreehotels.com/assets/front/images/InfinityTierPlatinum.svg',
      perks: ['15% Discount', 'Personalized Services', 'Complimentary Breakfast'],
    },
  ];

  return (
    <div className="bg-gray-50">
     
      <div
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center font-macondo"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/641448082/photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-sunshine.jpg?s=612x612&w=0&k=20&c=9PyitcP743oS7oGAoSW8iGDjf1goapy40Ol7PcCNv24=')`, 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Rewards Program</h1>
          <p className="text-lg mb-6">
            Discover a world of privileges and exclusive benefits tailored just for you.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-green-600 rounded shadow-lg hover:bg-green-700 focus:ring-4 focus:ring-green-400">
              Sign In
            </button>
            <button className="px-6 py-3 bg-white text-green-400 rounded shadow-lg hover:bg-slate-200 focus:ring-4 focus:ring-green-400">
              Join Now
            </button>
          </div>
        </div>
      </div>

     
      <div className="p-6 font-macondo">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Explore Our Tiers</h2>
          <p className="text-lg text-gray-600 mt-4">
            Choose a tier that best suits your lifestyle and enjoy tailored benefits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border rounded-lg p-6 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={tier.img}
                alt={tier.name}
                className="w-full h-48 object-cover rounded mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800">{tier.name}</h3>
              <p className="mt-4 text-gray-600">{tier.description}</p>
              <ul className="mt-4 space-y-2 text-gray-600">
                {tier.perks.map((perk, index) => (
                  <li key={index} className="flex items-center">
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
                    {perk}
                  </li>
                ))}
              </ul>
              <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:ring-4 focus:ring-green-400">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
