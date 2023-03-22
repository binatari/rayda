import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      xl: {
        color: '#101828',
        fontSize: '30px',
        lineHeight: '38px',
      },
      lg: {
        color: '#101828',
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight:600
      },
      md:{
        color: '#475467',
        fontSize: '16px',
        lineHeight: '18px',
      },
      sm: {
        color: '#344054',
        fontSize: '14px',
        lineHeight: '20px',
      },
      xs:{
        color: '#344054',
        fontSize: '12px',
        lineHeight: '18px',
      },
       h1: {
      fontWeight: 500,
      fontSize: "1.875rem",
      lineHeight: "1.5",
    },
    h2: {
      fontWeight: 500,
      fontSize: "1.5rem",
      lineHeight: "1.5",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.3125rem",
      lineHeight: "1.5",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.5",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1rem",
      lineHeight: "1.5",
    },
    h6: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: "1.5",
    },
      fontFamily: 'IBM Plex Sans, sans-serif',
      fontSize:14,
      lineHeight: 20,
    },
  
    palette: {
      primary: {
        main: '#004CCC',
      },
      secondary: {
        main: '#FF0000',
        dark: '#B30000',
        light:'#FFD1D1',
        lightest:'#FFF5F5'
      },
      error: {
        main: '#FF0000',
        dark: '#B30000',
        light:'#FFD1D1',
        lightest:'#FFF5F5'
      },
      warning:{
        main:'#FFAB00',
        dark:'#B37800',
        light:'#FFEECC',
        lightest:'#FFFAF0'
      },
      success:{
        main:'#00DB5B',
        dark:'#00A846',
        light:'#C2FFDB',
        lightest:'#F0FFF6'
      },
      grey:{
        main:'#425A70',
        dark:'#234361',
        light:'#66788A',
        lightest:'#C4CBD4',
        border30:'#EDF0F2',
        border40:'#E4E7EB',
        bg20:'#F5F6F7',
        bg10:'#FAFAFA'
      }
    },
  });
  
  export default theme;
  