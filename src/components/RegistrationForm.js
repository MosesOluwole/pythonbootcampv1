// src/components/RegistrationForm.js
import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const RegistrationForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          experience: data.experience,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess(true);
          reset();
        },
        (err) => {
          console.error("FAILED...", err);
          alert("An error occurred. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }} id="register">
      {success ? (
        <Typography variant="h5" align="center">
          Thank you for registering! We'll be in touch soon.
        </Typography>
      ) : (
        <>
          <Typography variant="h4" align="center" gutterBottom>
            Register for the Python Bootcamp
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {/* Full Name Field */}
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  {...register("fullName", {
                    required: "Full Name is required",
                  })}
                  fullWidth
                  error={!!errors.fullName}
                  helperText={errors.fullName?.message}
                />
              </Grid>
              {/* Email Field */}
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Grid>
              {/* Phone Number Field */}
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  {...register("phone", {
                    required: "Phone Number is required",
                  })}
                  fullWidth
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                />
              </Grid>
              {/* Experience Field */}
              <Grid item xs={12}>
                <TextField
                  label="Previous Programming Experience"
                  {...register("experience")}
                  multiline
                  rows={4}
                  fullWidth
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
                  startIcon={loading && <CircularProgress size={20} />}
                >
                  {loading ? "Submitting..." : "Submit Registration"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Container>
  );
};

export default RegistrationForm;
