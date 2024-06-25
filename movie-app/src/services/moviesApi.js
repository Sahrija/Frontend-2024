import axios from 'axios';

const READ_ACCESS_TOKEN = import.meta.env.VITE_API_READ_ACCESS_TOKEN;
const API_KEY = import.meta.env.VITE_API_KEY  ;
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
  return response.data.results;
}

export async function fetchTopRatedMovies(page = 1) {
  const URL = `${BASE_URL}/upcoming?language=en-US&page=${page}`;
  const response = await axios(URL, config);
  return response.data.results;
}

export async function fetchUpcomingMovies(page = 1) {
  const URL = `${BASE_URL}/upcoming?language=en-US&page=${page}`;
  const response = await axios(URL, config);
  return response.data.results;
}

export async function fetchMovie(id) {
  const params = `?api_key=${API_KEY}&append_to_response=videos`;
  const url = `https://api.themoviedb.org/3/movie/${id}${params}`;
  const response = await axios(url);
  return response.data;
}
