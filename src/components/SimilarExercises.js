import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar.js';
import Loader from './Loader.js';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: {lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5} px={5}>
        Exercises that Target that same muscle group
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : 
        <Loader />}
      </Stack>

      <Typography variant="h3" mb={5} px={5} mt="120px">
        Exercises that use the same Equipment
      </Typography>
      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : 
        <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises