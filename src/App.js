import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import { Card, Typography, Box, TextField } from '@mui/material';
import CryptoModal from './components/CryptoModal/CryptoModal';
import data from './data/data';

const getGridConfig = (screenWidth) => {
  if (screenWidth >= 1600) {
    return { columns: 6, panelWidth: `${100 / 6}%` };
  } else if (screenWidth >= 1440) {
    return { columns: 5, panelWidth: `${100 / 5}%` };
  } else if (screenWidth >= 1200) {
    return { columns: 4, panelWidth: `${100 / 4}%` };
  } else if (screenWidth >= 992) {
    return { columns: 3, panelWidth: `${100 / 3}%` };
  } else if (screenWidth >= 768) {
    return { columns: 2, panelWidth: `${100 / 2}%` };
  } else {
    return { columns: 1, panelWidth: '100%' };
  }
};

const Panel = ({ panel, panelWidth, onCardClick }) => (
  <Card
    variant="elevation"
    elevation={5}
    className="masonry-item"
    sx={{
      width: `calc(${panelWidth} - 20px)`,
      marginBottom: 4,
      background: 'linear-gradient(135deg, #1c2734, #2b3545)',
      borderRadius: '16px',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.4)',
      padding: 4,
      border: '1px solid #2f3946',
      userSelect: 'none',
    }}
  >
    <Typography
      variant="h5"
      sx={{
        color: '#d1d5db',
        fontWeight: 'bold',
        marginBottom: 3,
        textAlign: 'left',
        borderBottom: '1px solid #394451',
        paddingBottom: 2,
      }}
    >
      {panel.slug}
    </Typography>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {panel.children.map((card) => (
        <Card
          key={card.id}
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 2,
            borderRadius: '14px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#273141',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            userSelect: 'none',
            outline: 'none',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.5)',
            },
          }}
          onClick={() => onCardClick(card)}
        >
          <img
            src={card.fields.find((field) => field.key === 'icon')?.value || ''}
            alt={card.slug}
            style={{
              width: '48px',
              height: '48px',
              marginRight: '16px',
            }}
          />
          <Typography variant="body1" sx={{ fontWeight: '500', color: '#d8e2ef' }}>
            {card.slug}
          </Typography>
        </Card>
      ))}
    </Box>
  </Card>
);

const App = () => {
  const masonryRef = useRef(null);
  const masonryInstance = useRef(null);
  const [screenConfig, setScreenConfig] = useState(getGridConfig(window.innerWidth));
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // Estados para el buscador
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data.children);

  useEffect(() => {
    masonryInstance.current = new Masonry(masonryRef.current, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-item',
      percentPosition: true,
      gutter: 20,
      transitionDuration: '0.6s',
    });

    const handleResize = () => {
      setScreenConfig(getGridConfig(window.innerWidth));
      masonryInstance.current.layout();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Filtrar datos basados en la búsqueda
    if (searchQuery.trim() === '') {
      setFilteredData(data.children);
    } else {
      setFilteredData(
        data.children.map((panel) => ({
          ...panel,
          children: panel.children.filter((card) =>
            card.slug.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        })).filter((panel) => panel.children.length > 0)
      );
    }
  }, [searchQuery]);

  useEffect(() => {
    // Recalcular el diseño de Masonry cuando los datos cambian
    if (masonryInstance.current) {
      masonryInstance.current.reloadItems();
      masonryInstance.current.layout();
    }
  }, [filteredData]);

  const handleCardClick = (crypto) => {
    setSelectedCrypto(crypto);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCrypto(null);
    setModalOpen(false);
  };

  return (
    <Box
      sx={{
        padding: 6,
        background: 'radial-gradient(circle at center, #0f141a, #1a212e)',
        minHeight: '100vh',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#d1d5db',
          fontWeight: 'bold',
          marginBottom: 6,
          textShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          letterSpacing: '1px',
        }}
      >
        Blockchain Landscape
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Buscar"
        sx={{
          marginBottom: 4,
          backgroundColor: '#2b3545', // Fondo oscuro más coherente
          borderRadius: '24px', // Bordes redondeados completos
          '& .MuiOutlinedInput-root': {
            color: '#d1d5db', // Color del texto en el campo
            borderRadius: '24px', // Bordes redondeados completos para el campo
            paddingLeft: 2, // Espacio adicional para el ícono
            '& fieldset': {
              borderColor: '#394451', // Borde inicial
            },
            '&:hover fieldset': {
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4caf50', // Borde al enfocar
              borderWidth: '2px',
            },
          },
          '&::placeholder': {
            color: '#a0aec0', // Color del placeholder
            opacity: 1,
          },
        }}
        InputProps={{
          startAdornment: (
            <Box sx={{ marginLeft: 1, color: '#a0aec0', display: 'flex', alignItems: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                style={{ width: '24px', height: '24px' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Box>
          ),
        }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />


      <Box
        className="masonry-container"
        ref={masonryRef}
        sx={{
          display: 'grid',
          gridTemplateColumns: `repeat(${screenConfig.columns}, ${screenConfig.panelWidth})`,
          gap: 20,
          justifyContent: 'center',
        }}
      >
        {filteredData.map((panel) => (
          <Panel
            key={panel.id}
            panel={panel}
            panelWidth={screenConfig.panelWidth}
            onCardClick={handleCardClick}
          />
        ))}
      </Box>
      <CryptoModal open={isModalOpen} onClose={handleCloseModal} crypto={selectedCrypto} />
    </Box>
  );
};

export default App;
