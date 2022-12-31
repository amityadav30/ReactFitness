import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'


import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {

  const navigate= useNavigate()

  return(
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="800" fontSize="66px">Fitness+</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
    Power, Perseverance  <br />
    and Discipline.
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a onClick={()=>navigate('/exercises')} style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Workouts
    </Typography>
    <img src={HeroBannerImage} style={{top:'22%', height:'40rem', width: '32rem',borderRadius: '35px'}} alt="hero-banner" className="hero-banner-img" />
  </Box>
)};

export default HeroBanner;
