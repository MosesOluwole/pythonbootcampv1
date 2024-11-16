// src/components/Contact.js
import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Fade,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { database } from '../firebase';
import { ref, push, set, serverTimestamp } from 'firebase/database';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  phone: yup.string().required('Phone Number is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email Address is required'),
  location: yup.string().required('Location is required'),
  message: yup.string().required('Please enter a message'),
});

const Contact = () => {
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const successRef = React.useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const contactsRef = ref(database, 'contacts');
      const newContactRef = push(contactsRef);
      await set(newContactRef, {
        ...data,
        created: serverTimestamp(),
      });
      setSuccess(true);
      reset();
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (success && successRef.current) {
      successRef.current.focus();
    }
  }, [success]);

  return (
    <Container maxWidth="sm" sx={{ py: 8 }} id="contact">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>

      {success ? (
        <Fade in={success}>
          <Box
            sx={{ textAlign: 'center', mt: 4 }}
            tabIndex="-1"
            ref={successRef}
          >
            <Typography variant="h6" gutterBottom>
              Thank you for reaching out!
            </Typography>
            <Typography variant="body1" gutterBottom>
              Your message has been successfully sent. We will get back to you
              shortly.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSuccess(false)}
              sx={{ mt: 2 }}
            >
              Send Another Message
            </Button>
          </Box>
        </Fade>
      ) : (
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {/* First Name Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                {...register('firstName')}
                fullWidth
                required
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Grid>
            {/* Last Name Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                {...register('lastName')}
                fullWidth
                required
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Grid>
            {/* Phone Number Field */}
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                {...register('phone')}
                type="tel"
                fullWidth
                error={!!errors.phone}
                helperText={errors.phone?.message}
              />
            </Grid>
            {/* Email Field */}
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                {...register('email')}
                type="email"
                fullWidth
                required
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            {/* Location Field */}
            <Grid item xs={12}>
              <TextField
                label="Location"
                {...register('location')}
                fullWidth
                required
                error={!!errors.location}
                helperText={errors.location?.message}
              />
            </Grid>
            {/* Message Field */}
            <Grid item xs={12}>
              <TextField
                label="Message"
                {...register('message')}
                multiline
                rows={4}
                fullWidth
                required
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </Grid>
            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default Contact;
