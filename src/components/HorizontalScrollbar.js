import React, { useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

import ExerciseCard from './ExerciseCard'


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts ,onClickItem}) => {

  const firstItemId = data?.exerciseId || data?.[0];
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
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

    const InitialScroll = () => {
      const { scrollToItem } = useContext(VisibilityContext);

      useEffect(() => {
        const timeout = setTimeout(() => {
          if(firstItemId) {
            scrollToItem(firstItemId, "smooth", "start");
          }
        }, 200);

        return () => clearTimeout(timeout);
      }, [firstItemId, scrollToItem])
    }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} selected={firstItemId}>
      <initialScroll />
      {data.map((item) => (
        <Box   
        key={item.exerciseId || item.name}
        itemId={item.exerciseId || item.name}
        title={item.exerciseId || item.name}
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
    )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar