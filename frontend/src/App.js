import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import { Box, Grid } from '@mui/material';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Services from './Components/Services/Services';

let theme = createTheme();
theme = responsiveFontSizes(theme);


function App() {
  let navigate = useNavigate()
  useEffect(() => {
    if(window.location.pathname == '/'){
      navigate("./home")
    }
  },[])
  return (
    <ThemeProvider theme={theme}>
    <Box className='app-container' sx={{xs: '100%', sm: '45%', md: '30%' }} style={{minHeight: '100vh',minWidth: '100vh'
    // background: '-webkit-linear-gradient(to right, #ec4e48 0%, #e804bd 100%)',
    // background: '-moz-linear-gradient(to right, #ec4e48 0%, #e804bd 100%)'
    }}>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
    </main>
    </Box>
    </ThemeProvider>
  );
}

export default App;
