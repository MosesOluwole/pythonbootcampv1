// src/components/NavBar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "What You'll Learn", path: "#features" },
    { title: "Why Join?", path: "#why-join" },
    { title: "Careers", path: "#careers" },
    { title: "Register", path: "#register" },
    { title: "FAQs", path: "#faqs" },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} onClick={handleDrawerToggle} role="presentation">
      <Typography
        variant="h6"
        sx={{ my: 2, textAlign: "center" }}
        href="#"
        component="a"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        CodeWithMide
      </Typography>
      <List>
        {navLinks.map((item, index) => (
          <ListItem button component="a" href={item.path} key={index}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" color="primary" elevation={4}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            href="#"
            component="a"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            CodeWithMide
          </Typography>
          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            navLinks.map((item, index) => (
              <Button color="inherit" href={item.path} key={index}>
                {item.title}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
