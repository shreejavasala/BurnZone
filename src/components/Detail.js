import React from 'react'
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  // console.log(exerciseDetail);
  const { bodyParts=[], gifUrl, name, targetMuscles=[], equipments=[] } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyParts[0]
    },
    {
      icon: TargetImage,
      name: targetMuscles[0]
    },
    {
      icon: EquipmentImage,
      name: equipments[0]
    }
  ]
  return (
    <Stack gap="60px" sx={{flexDirection: { lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt={name} Loading="lazy" className="detail-image" />
      <Stack sx={{gap: { lg: '35px', xs: '20px' }}}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. <span style={{textTransform:"capitalize"}}>{name}</span> {` `} is one of the exercises to target your {targetMuscles[0]}. It will help you improve your mood and gain energy
        </Typography>
        {extraDetail.map((item) => (
          <Stack key= {item.name} direction="row" gap="24px" alignItems="center">
            <Button sx={{background: "#FFF2DB", borderRadius: "50%", width: "100px", height: "100px"}}>
              <img src={item.icon} alt={item.name} style={{width: "50px", height: "50px"}}/>
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
          )
        )}
      </Stack>
    </Stack>
  )
}

export default Detail