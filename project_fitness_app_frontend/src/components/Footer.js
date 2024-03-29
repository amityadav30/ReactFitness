import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Hanuman1.png';

const Footer = () => (
  <Box mt="50px" bgcolor="#FFF3F4">
    <Stack gap="30px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '120px', height: '80px', opacity:'80%' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️</Typography>
  </Box>
);

export default Footer;
