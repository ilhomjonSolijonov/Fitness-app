import React from 'react'
import { Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg:'212px', xs: '70px'}, 
      ml: {sm: '50px'}
    }} position="realtive" p='20px'>
      <Typography color='#ff2625' fontsWeight='600' fontSize='24px'>
        Fitness Club
      </Typography>
      <Typography fontWeight="700"
        sx={{
          fontSize: {lg: '44px', xs: '40px'}
        }}
      >
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography 
        fontSize='22px'
        lineHeight='35px'
        mb={3}
      >
        Check out the most Effective exercises
      </Typography>
      <Button variant="contained" color="error">Explore Exercises</Button>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner