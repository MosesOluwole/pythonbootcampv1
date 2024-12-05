// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#306998', // Python Blue
    },
    secondary: {
      main: '#FFD43B', // Python Yellow
    },
  },
  typography: {
    fontFamily: 'Poppins, Roboto, Arial',
    h4: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
});

export default theme;
