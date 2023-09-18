import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#2e2e2e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ddb218',
      contrastText: '#fff',
    },
  },
});

export default theme;
