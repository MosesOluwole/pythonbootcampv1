// src/components/Footer.js
import React from "react";
import { Container, Typography, Link, Box, Grid } from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  WhatsApp,
  Telegram,
} from "@mui/icons-material";

const Footer = () => (
  <Box sx={{ backgroundColor: "#306998", color: "#fff", py: 6 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            CodeWithMide
          </Typography>
          <Typography variant="body2">
            Empowering you to achieve your programming goals.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Link href="https://facebook.com" color="inherit" sx={{ mx: 1 }}>
              <Facebook />
            </Link>
            <Link href="https://twitter.com" color="inherit" sx={{ mx: 1 }}>
              <Twitter />
            </Link>
            <Link href="https://linkedin.com" color="inherit" sx={{ mx: 1 }}>
              <LinkedIn />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">
            Email:{" "}
            <Link href="mailto:info@CodeWithMide.com" color="inherit">
              info@CodeWithMide.com
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link
              href="https://wa.me/35699939930"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <WhatsApp style={{ marginRight: 8 }} />
              WhatsApp
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link
              href="https://t.me/pythondev2025"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Telegram style={{ marginRight: 8 }} />
              Telegram
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} CodeWithMide. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
