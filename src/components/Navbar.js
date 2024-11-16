// src/components/NavBar.js
import React from 'react';
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
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navLinks = [
    { title: "What You'll Learn", path: '#features' },
    { title: 'Course Details', path: '#course-details' },
    { title: 'Why Join?', path: '#why-join' },
    { title: 'Careers', path: '#careers' },
    // { title: 'Register', path: '#register' },
    { title: 'Contact', path: '#contact' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      onClick={handleDrawerToggle}
      role="presentation"
    >
      <Typography variant="h6" sx={{ my: 2, textAlign: 'center' }}>
        PYTHONBOOTCAMP
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
      <AppBar
        position="sticky" // Changed from "static" or "relative" to "sticky"
        color="default"
        elevation={4}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            PYTHONBOOTCAMP
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

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default NavBar;
