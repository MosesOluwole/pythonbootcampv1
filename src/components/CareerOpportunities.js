// src/components/CareerOpportunities.js
import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Box, Button } from '@mui/material';

const careers = [
  {
    title: 'Software Developer',
    description: 'Build applications in various industries.',
    image: '/images/software-developer.jpg',
  },
  {
    title: 'Data Analyst',
    description: 'Analyze data to drive business decisions.',
    image: '/images/data-analyst.jpg',
  },
  {
    title: 'AI & Machine Learning Engineer',
    description: 'Develop intelligent systems and models.',
    image: '/images/ai-engineer.jpg',
  },
];

const CareerOpportunities = () => (
  <Box sx={{ py: 8 }} id="careers">
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        What You Can Do After the Course
      </Typography>
      <Grid container spacing={4}>
        {careers.map((career, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: 'auto', '&:hover': { boxShadow: 6 } }}>
              <CardMedia
                component="img"
                height="180"
                image={career.image}
                alt={career.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {career.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {career.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" href="#register">
          Start Your Journey
        </Button>
      </Box>
    </Container>
  </Box>
);

export default CareerOpportunities;
