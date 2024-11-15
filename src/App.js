// src/App.js
import React from 'react';
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import WhyJoin from './components/WhyJoin';
import CareerOpportunities from './components/CareerOpportunities';

function App() {
  return (
    <>
     <Helmet>
        <title>Python Programming Course | MyBrand</title>
        <meta name="description" content="Learn to code with our comprehensive Python bootcamp." />
     </Helmet>
      <NavBar />
      <HeroSection />
      <Features />
      <WhyJoin />
      <CareerOpportunities />
      {/* <Testimonials />
      <Pricing /> */}
      <Footer />
    </>
  );
}

export default App;
