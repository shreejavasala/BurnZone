import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar.js';
import Loader from './Loader.js';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <Box sx={{ mt: {lg: '100px', xs: '10'}, p: "10px 10px"}}>
      <Typography variant="h4" mt={2} mb={5} px={5}  fontWeight="bold">
        Similar <span style={{color: "#FF2625"}}>Target Muscle </span>exercises
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} onClickItem={handleExerciseClick}/> : 
        <Loader />}
      </Stack>

      <Typography variant="h4" mb={5} px={5} sx={{ mt: {lg: '100px', xs: '10', fontWeight: "bold"}}}>
        Similar <span style={{color: "#FF2625", }}>Equipment</span> Exercises
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}
        onClickItem={handleExerciseClick}/> : 
        <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises