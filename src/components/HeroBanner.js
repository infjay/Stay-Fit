import React from 'react'
import { Box,Stack,Typography ,Button, AppBar} from '@mui/material'
import HeroBannerImage from "../assets/images/banner1.jpg"

const HeroBanner = () => {
  return (
    
    <Box sx={{
        mt: {lg:"212px" , xs:"70px"},
        ml: {sm:"50px"}
    }} position="relative" p="20px">
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px">
            Your Journy To Your Better Self
        </Typography>
        <Typography fontWeight="700" sx={{ fontSize: { lg:'40px', xs: '30px'}}}
        mb="23px" mt="40px">
            Pain Goes Away <br />
            Pride Stays FOREVER
        </Typography>
        <Typography fontSize="22px" lineHeight="35px" mb={4}>
            Check out the superhuman Exercises
        </Typography>
        <Button variant="contained" color="error" href='#exercises' 
        sx={{ backgroundColor:'#ff2526',padding:'10px'}}>EXPLORE EXERCISES</Button>
        <Typography fontWeight={600}
        color="#ff2625"
        sx={{
            opacity: 0.1,
            display:{ lg: 'block',xs:'none' }
        }}
        fontSize="200px"
        >Exercise</Typography>
        <img src={HeroBannerImage} alt="banner" 
        className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner