import React from 'react'
import { Box, Stack, Typography } from '@mui/material';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <Typography variant="h5" fontWeight="bold" color="#FF2625" mb="-10px">
           BurnZone
          </Typography>
        <Typography variant="h6" pb="40px"> 
          Made with ❤️ by Shreeja Vasala
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer