import React from 'react';
import HeroSection from '../Components/Hero';
import Destinations from '../Components/Destination';
import OfferandPromotions from '../Components/Offers';
import WhatsNew from '../Components/WhatsNew';
import OurRewards from '../Components/OurRewards';
import Brands from '../Components/Brands';
import Video from '../Components/Video';
import UpcomingHotels from '../Components/UpcomingHotels';

const Home = () => {
  return (
    <div className='font-macondo'>
      
    {/* Hero Section */}
     <HeroSection />

   {/* Destination Section */}
      <Destinations />


    {/* Upcoming Hotels Section */}
      <UpcomingHotels/>    

    {/*Offers and Promotions Section */}
    <OfferandPromotions/>

    {/*What's New Section */}
    
    <WhatsNew/>

    {/*Our rewards */}
    <OurRewards/>

    {/*Our Brands Start */}     
      <Brands />


   {/* Video Section */}
    <Video/>

    </div>
  );
}

export default Home;