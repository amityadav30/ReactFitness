import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useContext } from 'react';
import { userContext } from '../App';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import logoutIcon from '../assets/icons/logout_FILL0_wght400_GRAD0_opsz48.png';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import  { useState, createContext } from 'react';



import Logo from '../assets/images/Hanuman1.png';

const Navbar = (props) => {
  const userInfo = useContext(userContext);
  const navigate= useNavigate();

  const onlogoutfun =() => {

    props.handleLogin('',false)
    setLoginStatus(false)
    navigate('/')
    console.log('functions worked')

  }
  
  return (
    <Stack direction="row" justifyContent="space-around" sx={{  }} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '68px', height: '68px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        
        <Link to='/exercises' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Exercises</Link>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Exercises Dashboard</Link>
        <Link to="/MealDashboard" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Meal Dashboard</Link>
        <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>BMI</Link>
        <Link to="/ChatModule" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Chat</Link>



      </Stack>
      <Stack  direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end" justifyContent='none'>
      <Typography component="p" variant='h5' >
        {userInfo.username}
      </Typography>

      <LogoutIcon fontSize='large' onClick = {onlogoutfun}>
          </LogoutIcon>
      </Stack>
    </Stack>)
};

export default Navbar;
