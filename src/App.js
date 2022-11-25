import React from 'react'
import {Route,Routes} from "react-router-dom";
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Footer from './components/Footer';
import './App.css';
import { AddBox } from '@mui/icons-material';
import ResponsiveAppBar from "./components/appBar";
import Navbar from "./components/Navbar";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Box width="400px" sx={{width: { xl: '1448px' }}} m="auto">
        <ResponsiveAppBar />
         <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/exercise/:id" element={<ExerciseDetail />}/>
         </Routes>
         <Footer />
    </Box>
    </ThemeProvider>
  )
}

export default App