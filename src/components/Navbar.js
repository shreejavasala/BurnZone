import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo4.jpg';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isDetailPage = location.pathname.includes('/exercise');

  const handleScroll = () => {
    if(isDetailPage) {
      const target = document.getElementById('similar-exercises');
      if(target) {
        target.scrollIntoView({behavior: "smooth"});
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById('exercises');
        if(target) {
          target.scrollIntoView({behavior: 'smooth'});
        }
      }, );
    }
  }
  return (
    <Stack 
      direction="row"
      justifyContent="space-around"
      sx={{gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}}
      px="20px"
    >
      <Link to="/" style={{textDecoration:"none"}}>
          <img src={Logo} alt="logo" style = { {width: '50px', height: '50px', margin: '0 20px', borderRadius: '50%', }}/>
      </Link>
      
      <Stack 
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>
            Home
        </Link>
        <a onClick={handleScroll} style={{textDecoration: 'none', color: '#3A1212', cursor: 'pointer'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar