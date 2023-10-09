import { createTheme } from '@mui/material/styles'

export const appTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: '#109173',
      },
      secondary: {
        main: '#d2f7f6',
      },
      background: {
        paper: '#F6F6F6',
        default: '#ffffff',
      },
    },
    typography: () => ({
      h1: {
        fontFamily: ['Roboto', 'sans-serif'].join(','),
        fontSize: '20px',
        fontWeight: '400',
        color: '#ADAFB6',
      },
    }),
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: ['Belgrano'],
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderRadius: 0,
          },
        },
      },
    },
  })
