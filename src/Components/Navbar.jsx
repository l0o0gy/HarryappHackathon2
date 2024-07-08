import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import DetailsBox from './Detailsbox';
import img from '../assets/img/logo.png'
import { useNavigate } from "react-router-dom";


export default function ButtonAppBar() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, margin: '10px 100px' }}>
        <AppBar position="static" sx={{ borderRadius: '20px' ,backgroundColor:"white", width:1150}}>
          <Toolbar> 
            <img src={img} style={{ width:100 }}/>
            <Box sx={{ flexGrow: 1 }} />
            <List sx={{ display: 'flex', flexDirection: 'row' }}>
              {['Home', 'History'].map((text) => (
                <ListItem key={text} disablePadding>
                  <ListItemText primary={text} sx={{ textAlign: 'right', padding: '0 10px' ,color:'blue'}}/>
                </ListItem>
              ))}
            </List>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="toggle dark mode"
              onClick={handleDarkModeToggle}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        {/* <DetailsBox darkMode={darkMode} /> */}
      </Box>
    </ThemeProvider>
  );
}
