// src/components/WhyJoin.js
import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { Build, School, Verified } from '@mui/icons-material';

const benefits = [
  {
    icon: <Build fontSize="large" color="primary" />,
    title: 'Hands-on Projects',
    description: 'Apply your skills in real-world scenarios.',
    image: 'projects.jpg',
  },
  {
    icon: <School fontSize="large" color="primary" />,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals.',
    image: 'teachers.jpg',
  },
  {
    icon: <Verified fontSize="large" color="primary" />,
    title: 'Certificate Upon Completion',
    description: 'Earn a certificate to showcase your skills.',
    image: 'certificate.jpg',
  },
];

const WhyJoin = () => (
  <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }} id="why-join">
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Why Join?
      </Typography>
      <Grid container spacing={4}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: 'auto', '&:hover': { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="180"
                image={benefit.image}
                alt={benefit.title}
              />
              <CardContent>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                  {benefit.icon}
                </Box>
                <Typography variant="h6" gutterBottom align="center">
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default WhyJoin;
