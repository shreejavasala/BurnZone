import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.exerciseId}`}>
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy"></img>
      <Stack direction="row">
        <Button sx={{ml: '21px', color: '#FFF', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
          {exercise.bodyParts[0]}
        </Button>
        <Button sx={{ml: '21px', color: '#FFF', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
          {exercise.targetMuscles[0]}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px">
        {exercise.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard