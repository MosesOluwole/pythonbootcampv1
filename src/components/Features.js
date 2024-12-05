// src/components/Features.js
import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import {
  Code,
  Storage,
  Api,
  Web,
} from '@mui/icons-material';

const features = [
  {
    icon: <Code fontSize="large" color="primary" />,
    title: 'Python Essentials',
    description: 'Core Syntax, Functions, Modules',
  },
  {
    icon: <Storage fontSize="large" color="primary" />,
    title: 'Database Applications',
    description: 'Build and Connect with SQL Databases',
  },
  {
    icon: <Api fontSize="large" color="primary" />,
    title: 'REST API Services',
    description: 'Develop APIs with Flask/Django',
  },
  {
    icon: <Web fontSize="large" color="primary" />,
    title: 'Full-Stack Web Development',
    description: 'Frontend + Backend Integration',
  },
];

const Features = () => (
  <Box sx={{ py: 8 }} id="features">
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        What You'll Learn
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={0}
              sx={{ textAlign: 'center', p: 4 }}
            >
              {feature.icon}
              <Typography variant="h6" gutterBottom>
                {feature.title}
              </Typography>
              <Typography variant="body1">
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Features;
