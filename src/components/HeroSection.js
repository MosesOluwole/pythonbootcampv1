// src/components/HeroSection.js
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    title: "Python Programming Course",
    subtitle:
      "Learn to Code with Python – From Basics to Full-Stack Development",
    background: "/hero-bg.jpg",
    cta: "#register",
  },
  {
    title: "Python Essentials",
    subtitle:
      "Master the language of the web and become a Full-Stack Developer",
    background: "/hero-bg2.jpg",
    cta: "#register",
  },
  {
    title: "Data Science with Python",
    subtitle: "Delve into Data Analysis, Visualization, and Machine Learning",
    background: "/hero-bg3.jpg",
    cta: "#register",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "#fff",
            py: { xs: 8, md: 20 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h2" gutterBottom>
              {slide.title}
            </Typography>
            <Typography variant="h5" paragraph>
              {slide.subtitle}
            </Typography>
            <Button variant="contained" color="primary" href={slide.cta}>
              Enroll Now
            </Button>
          </Container>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSection;
