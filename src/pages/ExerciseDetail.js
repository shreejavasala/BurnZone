import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'


import { exercisesOptions, fetchData, youtubeOptions } from '../utils/fetchData.js';
import Detail from '../components/Detail.js';
import ExerciseVideos from '../components/ExerciseVideos.js';
import SimilarExercises from '../components/SimilarExercises.js';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { exerciseId } = useParams();
  // console.log(exerciseId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://www.exercisedb.dev/api/v1';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${exerciseId}`, exercisesOptions);
      setExerciseDetail(exerciseDetailData.data);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.data.name}`, youtubeOptions);
      console.log(exerciseVideosData)
      setExerciseVideos(exerciseVideosData.contents);

      const targetMusclesExercisesData = await fetchData(`${exerciseDbUrl}/muscles/${exerciseDetailData.data.targetMuscles[0]}/exercises?offset=0&limit=20`, exercisesOptions);
      setTargetMuscleExercises(targetMusclesExercisesData.data)

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/equipments/${exerciseDetailData.data.equipments[0]}/exercises?offset=0&limit=20`, exercisesOptions);
      setEquipmentExercises(equipmentExercisesData.data);
    }

    fetchExercisesData();
  }, [exerciseId]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <Box id="similar-exercises">
        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
      </Box>
    </Box>
  )
}

export default ExerciseDetail