import React from "react";

const Sustainability = () => {
  const initiatives = [
    {
      title: "Energy Conservation",
      description:
        "We strive to reduce energy consumption by using renewable energy sources, implementing energy-efficient practices, and innovating technologies to power our facilities sustainably. Our solar panels and LED lighting systems are part of this mission.",
      img: "https://blog.fpuc.com/hubfs/K-S47-Chim-3370.png",
    },
    {
      title: "Water Management",
      description:
        "Our water recycling systems and rainwater harvesting initiatives ensure that we optimize water usage and minimize wastage. This commitment helps us preserve one of Earth's most vital resources.",
      img: "https://www.thestatesman.com/wp-content/uploads/2019/07/QT-O4.jpg",
    },
    {
      title: "Community Support",
      description:
        "Empowering local communities is at the heart of our sustainability mission. From education programs to creating job opportunities, we work closely with communities to enhance their quality of life.",
      img: "https://www.together-uk.org/wp-content/uploads/2023/08/3-People-Gardening-Stock-Image-for-Website-scaled.jpeg.webp",
    },
  ];

  const successStories = [
    {
      title: "Solar Panel Installation",
      description:
        "We installed 100+ solar panels across our properties, which now generate clean, renewable energy to power our operations. This initiative has significantly reduced our carbon footprint.",
      img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/04/14/Pictures/green-heros_69bb5788-5ec0-11e9-93dc-bd285d0e4b85.jpg",
    },
    {
      title: "Water Recycling Plant",
      description:
        "Our state-of-the-art water recycling plant processes over 10,000 liters daily, reducing water wastage and supporting our eco-friendly operations.",
      img: "https://th-i.thgim.com/public/incoming/gtmkk9/article66529532.ece/alternates/FREE_1200/N%20biren%20Water%20treatment%20plant.jpg",
    },
  ];

  const partners = [
    {
      name: "Green Future Alliance",
      img: "https://static.wixstatic.com/media/d197f9_7e5374ebd9d640229ece1528c03cec69~mv2.png/v1/fill/w_500,h_500,al_c/d197f9_7e5374ebd9d640229ece1528c03cec69~mv2.png",
    },
    {
      name: "Eco Warriors",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0OJMpausKixMbhk_JF5jRoW5-gUHXqEgKQ&s",
    },
    {
      name: "Healthy Life Foundation",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tpOixUwMXzYCYdiipfFbRoT_vCQpgBstmw&s",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 font-macondo">
      {/* Header Section */}
      <div className="relative h-96 bg-cover bg-center mb-12" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/community-support-kindness-people-depicted-cinematic-style-scene_23-2151253395.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              Sustainability
            </h1>
            <p className="text-xl text-gray-200">
              Our commitment to a greener, healthier future.
            </p>
          </div>
        </div>
      </div>

      {/* Our Initiatives Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Initiatives
        </h2>
        {initiatives.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Success Stories Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Success Stories
        </h2>
        {successStories.map((story, index) => (
          <div
            key={story.title}
            className={`flex flex-col md:flex-row items-center mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {story.title}
              </h3>
              <p className="text-gray-600">{story.description}</p>
            </div>
            <div className="md:w-1/2">
              <img
                src={story.img}
                alt={story.title}
                className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Our Partners Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="w-40 p-4 bg-white shadow-lg rounded-lg text-center hover:shadow-xl transition duration-300"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="mb-4 w-24 h-24 object-cover rounded-full mx-auto"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="p-6 bg-green-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Join Our Mission
        </h2>
        <p className="text-gray-700 mb-6">
          Be a part of the change. Sign up to volunteer, donate, or learn more
          about our sustainability initiatives.
        </p>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition duration-300">
          Get Involved
        </button>
      </div>
    </div>
  );
};

export default Sustainability;
