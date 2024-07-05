import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';

export default function BoxSx() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'start', marginLeft: '100px' }}>
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            margin: 1,
          }}
        />
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            margin: 1,
          }}
        />
        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: 1,
            bgcolor: 'primary.main',
            '&:hover': {
              bgcolor: 'primary.dark',
            },
            margin: 1,
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
