// src/components/SuccessPage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const SuccessPage = () => (
  <Container maxWidth="sm" sx={{ py: 8 }}>
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Payment Successful!
      </Typography>
      <Typography variant="body1">
        Thank you for enrolling in our Python Bootcamp. We will contact you soon with more details.
      </Typography>
    </Box>
  </Container>
);

export default SuccessPage;
