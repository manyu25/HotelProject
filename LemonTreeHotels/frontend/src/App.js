import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Rewards from './Components/Rewards';
import OurBrands from './Components/OurBrands';
import Sustainability from './Components/Sustainability';
import HotelComponent from './Components/Hotel';
import Home from './pages/Home';
import OffersPage from './Components/OffersAndPromotions';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelComponent />} />
        <Route path="/offers-and-promotions" element={<OffersPage />} />
        <Route path="/rewards-program" element={<Rewards />} />
        <Route path="/our-brands" element={<OurBrands />} />
        <Route path="/sustainability" element={<Sustainability />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
