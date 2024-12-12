// src/App.js
import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import WhyJoin from "./components/WhyJoin";
import CareerOpportunities from "./components/CareerOpportunities";
import RegistrationForm from "./components/RegistrationForm";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Helmet>
        <title>Python Programming Course | CodeWithMide</title>
        <meta
          name="description"
          content="Learn to code with our comprehensive Python bootcamp."
        />
      </Helmet>
      <NavBar />
      <HeroSection />
      <Features />
      <WhyJoin />
      <CareerOpportunities />
      <RegistrationForm />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
