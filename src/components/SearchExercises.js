import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, TextField, Button} from '@mui/material';

const SearchExercises = () => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    // const exerciseDate = await fetchData();
  }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography 
      fontWeight={700} sx= {{
        fontSize: { lg: '44px', sx: '30px'}
      }}
      mb="50px" textAlign="center"
      >
      Awesome Exercises you <br />
      should know
    </Typography>
    <Box position="relative" mb="72px">
      <TextField 
        height="76px"
        sx= {{
          input: { 
            fontWeight: '700', 
            borderRadius: '4px', 
            border: 'none'
          },
          width: { lg: '800px', xs: '350px'},
          backgroundColor: "#FFF",
          borderRadius:'40px'
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises"
        type="text"
      />
      <Button className="search-btn"
        sx ={{
          bgcolor: '#FF2625',
          color: '#FFF',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px'},
          fontSize: { lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'
        }}
        onClick="handleSearch">
        Search
      </Button>
    </Box>
    </Stack>
  )
}

export default SearchExercises