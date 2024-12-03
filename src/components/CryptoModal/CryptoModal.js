import React from 'react';
import { Dialog, DialogContent, Typography, Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Ícono de cierre

const CryptoModal = ({ open, onClose, crypto }) => {
  if (!crypto) return null;

  // Función para obtener un valor específico del array `fields`
  const getField = (fields, key) => {
    const field = fields.find((f) => f.key === key);
    return field ? field.value : null;
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      sx={{
        '.MuiDialog-paper': {
          borderRadius: '16px',
          background: 'linear-gradient(135deg, #1c2734, #2b3545)',
          padding: '16px',
          boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.6)',
          color: '#d1d5db',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #394451',
          paddingBottom: 2,
          marginBottom: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <img
            src={getField(crypto.fields, 'icon')} // Obtener dinámicamente el campo `icon`
            alt={crypto.slug} // Cambiado de `name` a `slug`
            style={{
              width: '28px',
              height: '28px',
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {crypto.slug} {/* Cambiado de `name` a `slug` */}
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: '#d1d5db' }}>
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>
      </Box>
      <DialogContent>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'justify',
            fontSize: '1rem',
            color: '#d1d5db',
          }}
        >
          {getField(crypto.fields, 'description')} {/* Obtener dinámicamente la descripción */}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default CryptoModal;
