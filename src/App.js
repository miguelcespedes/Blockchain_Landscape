import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import { Card, Typography, Box } from '@mui/material';
import CryptoModal from './components/CryptoModal/CryptoModal'; // Importa el modal
import data from './data/data';

const getGridConfig = (screenWidth) => {
  if (screenWidth >= 1600) {
    return {
      columns: 6,
      panelWidth: `${100 / 6}%`,
    };
  } else if (screenWidth >= 1440) {
    return {
      columns: 5,
      panelWidth: `${100 / 5}%`,
    };
  } else if (screenWidth >= 1200) {
    return {
      columns: 4,
      panelWidth: `${100 / 4}%`,
    };
  } else if (screenWidth >= 992) {
    return {
      columns: 3,
      panelWidth: `${100 / 3}%`,
    };
  } else if (screenWidth >= 768) {
    return {
      columns: 2,
      panelWidth: `${100 / 2}%`,
    };
  } else {
    return {
      columns: 1,
      panelWidth: '100%',
    };
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
      userSelect: 'none', // Evita que el texto sea seleccionable
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
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
            userSelect: 'none', // Evita que el texto sea seleccionable
            outline: 'none', // Elimina el cuadro azul
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.5)',
            },
          }}
          onClick={() => onCardClick(card)}
        >
          <img
            src={
              card.fields.find((field) => field.key === "icon")?.value || ""
            }
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
  const [screenConfig, setScreenConfig] = useState(getGridConfig(window.innerWidth));
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const masonryInstance = new Masonry(masonryRef.current, {
      itemSelector: '.masonry-item',
      columnWidth: '.masonry-item',
      percentPosition: true,
      gutter: 20,
      transitionDuration: '0.6s',
    });

    const handleResize = () => {
      setScreenConfig(getGridConfig(window.innerWidth));
      masonryInstance.layout();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        {data.children.map((panel) => (
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
