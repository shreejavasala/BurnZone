import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name}) => {

  // console.log(exerciseVideos);

  return (
    <Box sx={{marginTop: { lg: '150px', xs: '20px'}}} p="30px">
      <Typography variant="h4" mb={5} fontWeight="bold" >
        Watch <span style={{color: "#FF2625", textTransform:"capitalize"}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="center" flexWrap="wrap" alignItems="center"c
      sx={{ flexDirection: { lg: 'row'},
              gap: { lg : '100px', xs: '0'},
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box sx={{color:"#FFF3F4"}}>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h6"  color="#FF2625" fontWeight="bold">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos

