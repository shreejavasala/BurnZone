import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar.js';
import Loader from './Loader.js';
import Detail from './Detail.js';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: {lg: '100px', xs: '10'}}}>
      <Typography variant="h4" mb={5} px={5}  fontWeight="bold">
        Similar <span style={{color: "#FF2625"}}>Target Muscle </span>exercises
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}} onClick={}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : 
        <Loader />}
      </Stack>

      <Typography variant="h4" mb={5} px={5} sx={{ mt: {lg: '100px', xs: '10', fontWeight: "bold"}}}>
        Similar <span style={{color: "#FF2625", }}>Equipment</span> Exercises
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : 
        <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises