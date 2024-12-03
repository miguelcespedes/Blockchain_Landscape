import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Azul claro como color principal
    },
    secondary: {
      main: '#f48fb1', // Rosa claro como color secundario
    },
  },
  typography: {
    h1: {
      fontSize: '3rem', // Ajuste para títulos principales
      fontWeight: 'bold',
      color: '#d1d5db',
      textShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    },
    h3: {
      fontSize: '2rem', // Ajuste para subtítulos principales
      fontWeight: 'bold',
      color: '#d1d5db',
      textShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
    },
    h5: {
      fontSize: '1.2rem', // Ajuste para títulos de paneles
      fontWeight: 'bold',
      color: '#d1d5db',
    },
    body1: {
      fontSize: '1rem', // Texto general
      color: '#d8e2ef',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '.masonry-item': {
          position: 'absolute', // Necesario para Masonry
          transition: 'transform 0.4s ease, opacity 0.4s ease', // Animaciones suaves
          willChange: 'transform, opacity', // Optimización de animaciones
        },
      },
    },
  },
});

export default theme;
