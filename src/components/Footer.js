// src/components/Footer.js
import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => (
  <Box sx={{ backgroundColor: '#f5f5f5', py: 4 }}>
    <Container maxWidth="md">
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Link href="#" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        <Link href="#" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        <Link href="#" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>
    </Container>
  </Box>
);

export default Footer;
