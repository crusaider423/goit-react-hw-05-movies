import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '861668370d618b6ce53a2f12a0dc8b5b';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});
export const fetchMovies = async () => {
  const { data } = await instance.get('/trending/all/day');
  return data;
};

export const fetchMovieDitailed = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchMovieSearch = async query => {
  const { data } = await instance.get(`/search/movie`, { params: { query } }); //?query=${query}
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};

export const fetchMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};
