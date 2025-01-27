import { createTheme } from '@mui/material';

// Create rtl custom theme(by Mina Nazari)
export const theme = createTheme({
    direction: 'rtl',
    palette: {
        primary: {
            main: '#e43192'
        }
    },
    typography: {
        fontFamily: [
            'vazir',
            'tahoma',
            'Roboto',
            'Arial'
        ].join(',')
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
             @font-face {
          font-family: 'vazir';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('/fonts/Vazir.woff2') format('woff2'),
               url('/fonts/Vazir.woff') format('woff');
        }
          `,
        },
    },
})




