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
import IconButton from '@mui/material/IconButton';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';



const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <ThemeProvider theme={theme}>
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