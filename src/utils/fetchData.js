import { searchAliasMap } from "./searchAliasMap";

export const exercisesOptions = {
	method: 'GET',
	headers: {
		
	}
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  
  return data;
}

export const fetchFilteredExercises = async (term) => {

  const searchTerm = searchAliasMap[term] || term;
  // console.log(searchTerm);

  const url = `https://www.exercisedb.dev/api/v1/exercises/filter?offset=0&limit=30&sortBy=bodyParts&sortOrder=desc&search=${searchTerm}&equipments=${searchTerm}&bodyParts=${searchTerm}`;

  try {
    const response = await fetch(url, exercisesOptions);
    const data = await response.json();

    // console.log('API raw data:', data);
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching exercises:', error);
    return [];
  }

  /*
  const baseUrl = 'https://www.exercisedb.dev/api/v1/exercises/filter';

  const params = new URLSearchParams();
  params.append('offset', 0);
  params.append('limit', 30); // or whatever you want
  params.append('search', searchTerm);         // search against name
  params.append('muscles', searchTerm);        // search against muscles
  params.append('bodyParts', searchTerm);      // search against body parts
  params.append('equipment', searchTerm);      // search against equipment
  params.append('sortBy', 'name');
  params.append('sortOrder', 'desc');

  const url = `${baseUrl}?${params.toString()}`;
  console.log(searchTerm);
  console.log('Calling API with URL:', url);

  try {
    const data = await fetchData(url, exercisesOptions);
    return data?.data || [];
  } catch (error) {
    console.error('Error fetching filtered exercises:', error);
    return [];
  }
    */
};
