// src/components/HeroSection.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(/hero-bg.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        py: { xs: 8, md: 20 },
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Python Programming Course
        </Typography>
        <Typography variant="h5" paragraph>
          Learn to Code with Python – From Basics to Full-Stack Development
        </Typography>
        <Button variant="contained" color="primary" href="#register">
          Enroll Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
