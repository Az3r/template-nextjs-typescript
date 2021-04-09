import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

export const light = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ff88d9',
      },
      secondary: {
        main: '#1976d2',
      },
    },
  })
);

export const dark = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#212121',
      },
      secondary: {
        main: '#757575',
      },
    },
  })
);
