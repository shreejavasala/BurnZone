import React, { useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard'


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts, onClickItem}) => {
  const firstItem = isBodyParts ? data[0] : data[0].exerciseId;

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    );
  };

    const RightArrow = () => {
      const { scrollNext } = useContext(VisibilityContext);

      return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
          <img src={RightArrowIcon} alt="right-arrow" />
        </Typography>
      )
    };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} visibilityObserverProps={{root: null, threshold: 0.5}} selected={firstItem}>
      {data.map((item) => {
        let id;
        if(isBodyParts) {
          id = item;
        }else {
          id = item.exerciseId || item.name;
        }
      return (
        <Box   
        key = {id}
        itemId={id}
        title={item.name}
        m = "0 40px"
        onClick={() => !isBodyParts && onClickItem?.(item)}
        sx={{cursor: !isBodyParts ? 'pointer' : 'default'}}
        >
          {isBodyParts ? 
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} 
          />
          : <ExerciseCard exercise={item} />}
        </Box>
      )
     }
    )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar