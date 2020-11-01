import axios from 'axios';

const basicUrl = 'https://api.themoviedb.org/3';
const key = 'api_key=9c953f3573341a23695016165970ec50';

const urlCreator = {
  popular: {
    getMovies: () => `${basicUrl}/movie/popular?${key}&language=en-US&page=1`,
    getMoviesPagination: pageNumber =>
      `${basicUrl}/movie/popular?${key}&language=en-US&page=${pageNumber}`,
  },
  query: {
    getMovies: query =>
      `${basicUrl}/search/movie?${key}&query=${query}&language=en-US&page=1&include_adult=false`,
    getMoviesPagination: (query, pageNumber) =>
      `${basicUrl}/search/movie?${key}&query=${query}&language=en-US&page=1&include_adult=false&page=${pageNumber}`,
  },
  byId: {
    getMovie: id => `${basicUrl}/movie/${id}?${key}&language=en-US`,
    getRecomendationMovies: id =>
      `${basicUrl}/movie/${id}/recommendations?${key}&language=en-US&page=1`,
  },

  getGenresMoviesUrl: () =>
    `${basicUrl}/genre/movie/list?${key}&language=en-US`,
};

const getPopularMovies = () => axios.get(urlCreator.popular.getMovies());

const getPopularMoviesWithPagination = pageNumber =>
  axios.get(urlCreator.popular.getMoviesPagination(pageNumber));

const getMoviesByQuery = query => axios.get(urlCreator.query.getMovies(query));

const getMoviesByQueryWithPagination = (query, pageNumber) =>
  axios.get(urlCreator.query.getMoviesPagination(query, pageNumber));

const getMovieById = id => axios.get(urlCreator.byId.getMovie(id));

const getRecomendationMoviesById = id =>
  axios.get(urlCreator.byId.getRecomendationMovies(id));

const getGenresMovies = () => axios.get(urlCreator.getGenresMoviesUrl());

export default {
  getPopularMovies,
  getPopularMoviesWithPagination,
  getMoviesByQuery,
  getMoviesByQueryWithPagination,
  getMovieById,
  getGenresMovies,
  getRecomendationMoviesById,
  urlCreator,
};
