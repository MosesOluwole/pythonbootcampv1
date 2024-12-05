// src/components/FAQs.js
import React from 'react';
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'Do I need prior programming experience?',
    answer: 'No prior experience is necessary. We start from the basics.',
  },
  {
    question: 'What is the duration of the course?',
    answer: 'The course lasts for 12 weeks with weekly live sessions.',
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Yes, you will receive a certificate upon successful completion.',
  },
  // Add more FAQs as needed
];

const FAQs = () => (
  <Box sx={{ py: 8 }} id="faqs">
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

export default FAQs;
