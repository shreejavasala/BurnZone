import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, TextField, Button} from '@mui/material';

import { exercisesOptions, fetchData, fetchFilteredExercises } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://www.exercisedb.dev/api/v1/bodyparts', exercisesOptions);

      if(Array.isArray(bodyPartsData.data)) {
        setBodyParts(['all', ...bodyPartsData.data.map((item) => item.name.toLowerCase())]);
      }else {
        console.log('Expected array', bodyPartsData);
      }
      // console.log(bodyParts);
    }
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    const searchTerm = search.toLowerCase().trim();

    const exercisesData = await fetchFilteredExercises(searchTerm);
    // console.log('Filtered Exercises:', exercisesData);
    setExercises(exercisesData); 

      // const searchedExercises = exercisesData.data.filter(
      //   (exercise) => exercise.name.toLowerCase().includes(normalizedSearch)

      //   || (Array.isArray(exercise.targetMuscles) && exercise.targetMuscles.some((muscle) => muscle.toLowerCase().includes(normalizedSearch)))

      //   || (Array.isArray(exercise.equipments) && exercise.equipments.some((equipment) => equipment.toLowerCase().includes(normalizedSearch)))

      //   || (Array.isArray(exercise.bodyParts) && exercise.bodyParts.some((bodyPart) => bodyPart.toLowerCase().includes(normalizedSearch)))
      // )
      
      // setSearch('');
      // setExercises(searchedExercises);
      
      // console.log('Search Term:', normalizedSearch);
      // console.log('Matched Exercises:', searchedExercises.map(e => ({
      //   name: e.name,
      //   targetMuscles: e.targetMuscles,
      //   bodyParts: e.bodyParts
      // })));

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
        onChange={(e) => setSearch(e.target.value)}
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
        onClick={handleSearch}>
        Search
      </Button>
    </Box>
    <Box sx={{
      position: 'relative', width: '100%', p: '20px'
    }}>
      <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
    </Stack>
  )
}

export default SearchExercises