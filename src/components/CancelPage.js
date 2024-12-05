// src/components/CancelPage.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CancelPage = () => (
  <Container maxWidth="sm" sx={{ py: 8 }}>
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Payment Canceled
      </Typography>
      <Typography variant="body1">
        Your payment was canceled. If you have any questions, please contact us.
      </Typography>
    </Box>
  </Container>
);

export default CancelPage;
