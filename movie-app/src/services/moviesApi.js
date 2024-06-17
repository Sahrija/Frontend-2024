import axios from 'axios';

const READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3/movie';

const config = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${READ_ACCESS_TOKEN}`
  }
};

export async function fetchPopularMovies(page = 1) {
  const URL = `${BASE_URL}/popular?language=en-US&page=${page}`;
  const response = await axios(URL, config);
  console.log(response);
  
  return response.data.results;
}

export async function fetchTopRatedMovies(page = 1) {
  const URL = `${BASE_URL}/upcoming?language=en-US&page=${page}`;
  const response = await axios(URL, config);
  console.log(response);
  return response.data.results;
}

export async function fetchUpcomingMovies(page = 1) {
  const URL = `${BASE_URL}/upcoming?language=en-US&page=${page}`;
  const response = await axios(URL, config);
  console.log(response);
  return response.data.results;
}
