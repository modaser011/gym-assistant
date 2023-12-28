import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        
        <Box sx={{mt: {lg: '212px' , xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
            <Typography color="#ff2526" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{ fontSize: {lg: "44px", xs: "40px" }}} mb="23px" mt="30px">
                Sweat, Smile <br/> and Repeat 
            </Typography>
            <Typography fontSize="24px" lineHeight="35px" mb={4}>
                Check out the most effective excercises 
            </Typography>
            <Button variant="contained" color="error" href="#excercises" sx={{backgroundColor: "#ff2526" , padding: "10px"}}>
                Explore Excercises
            </Button>
            <Typography fontWeight={600} color="#ff2625" sx={{opacity:"0.1" , display: {lg: "block" , xs:"none"}, marginTop: "2rem" }} fontSize="200px">
                Excercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
        </Box>

    )
}

export default HeroBanner