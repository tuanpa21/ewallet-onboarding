import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function LoadingScreen() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh' }}
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingScreen;
