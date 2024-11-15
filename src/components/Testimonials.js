// src/components/Testimonials.js
import React from 'react';
import { Container, Typography, Avatar, Grid } from '@mui/material';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'This service is fantastic! It has changed my life.',
    avatar: '/avatar1.jpg',
  },
  {
    name: 'John Smith',
    feedback: 'A game-changer in the industry.',
    avatar: '/avatar2.jpg',
  },
];

const Testimonials = () => (
  <Container maxWidth="md" sx={{ py: 8 }}>
    <Typography variant="h4" align="center" gutterBottom>
      What Our Clients Say
    </Typography>
    <Grid container spacing={4}>
      {testimonials.map((testimonial, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Avatar src={testimonial.avatar} sx={{ width: 56, height: 56, mx: 'auto' }} />
          <Typography variant="h6" align="center" gutterBottom>
            {testimonial.name}
          </Typography>
          <Typography variant="body1" align="center">
            "{testimonial.feedback}"
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Testimonials;
