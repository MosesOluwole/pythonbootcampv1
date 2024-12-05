// src/components/EnrollmentPage.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const EnrollmentPage = () => {
  const handlePayment = async () => {
    const stripe = await stripePromise;

    const response = await fetch('http://localhost:4242/create-checkout-session', {
      method: 'POST',
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Enrollment Page
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Complete your enrollment by proceeding to payment.
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handlePayment}
        >
          Proceed to Payment
        </Button>
      </Box>
    </Container>
  );
};

export default EnrollmentPage;
