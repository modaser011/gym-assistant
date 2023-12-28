import React from 'react';
import "./app.css";
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/system';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ExcerciseDetail from './Pages/ExcerciseDetail';
import Footer from './components/Footer';

const App = () => {
    return (
        <Box width="400px" sx={{width: {xl: "1488px"}}} m="auto">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExcerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    )
}

export default App