import { searchAliasMap } from "./searchAliasMap";

export const exercisesOptions = {
	method: 'GET',
	headers: {
		
	}
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data
}

export const fetchFilteredExercises = async (term) => {

  const searchTerm = searchAliasMap[term] || term;

  try {

    const bodyPartsData = await fetchData('https://www.exercisedb.dev/api/v1/bodyparts', exercisesOptions);
    const equipmentData = await fetchData('https://www.exercisedb.dev/api/v1/equipments', exercisesOptions);
    const musclesData = await fetchData('https://www.exercisedb.dev/api/v1/muscles', exercisesOptions);

    console.log(bodyPartsData);
    console.log(equipmentData);
    console.log(musclesData);
    let matchType = null;
    
    if (bodyPartsData.data.some((bp) => bp.name.toLowerCase() === searchTerm)) {
      matchType = 'bodyPart';
    } else if (equipmentData.data.some((eq) => eq.name.toLowerCase() === searchTerm)) {
      matchType = 'equipment';
    } else if (musclesData.data.some((muscle) => muscle.name.toLowerCase() === searchTerm)) {
      matchType = 'muscle';
    }
    
    console.log(matchType);
    let url;

    switch(matchType) {
      case 'bodyPart':
        url = `https://www.exercisedb.dev/api/v1/bodyparts/${searchTerm}/exercises?offset=0&limit=100`;
        break;

      case 'equipment':
        url = `https://www.exercisedb.dev/api/v1/equipments/${searchTerm}/exercises?offset=0&limit=100`;
        break;

      case 'muscle':
        url = `https://www.exercisedb.dev/api/v1/muscles/${searchTerm}/exercises?offset=0&limit=100`;
        break;

      default: 
        url = `https://www.exercisedb.dev/api/v1/exercises/search?offset=0&limit=100&q=${searchTerm}&threshold=0.3`;
    }   

    console.log(url);
    const data = await fetchData(url, exercisesOptions);
    return data?.data || [];

  } catch (error) {
    console.log('Error fetching filtered exercises: ', error);
    return [];
  }

};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};