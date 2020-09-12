import moviesTypes from './moviesTypes';

//popular movies

const getPopularMoviesStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_START,
  };
};

const getPopularMoviesSuccess = movies => {
  return {
    type: moviesTypes.GET_POPULAR_MOVIES_SUCCESS,
    payload: {
      movies,
    },
  };
};

const getPopularMoviesError = err => {
  return {
    type: moviesTypes.GET_POPULAR_MOVIES_ERROR,
    payload: {
      err,
    },
  };
};

// by query movies

const getMoviesByQueryStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_START,
  };
};

const getMoviesByQuerySuccess = movies => {
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS,
    payload: {
      movies,
    },
  };
};

const getMoviesByQueryError = err => {
  console.log('getMoviesByQueryError');
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_ERROR,
    payload: {
      err,
    },
  };
};

// popular with pagination movies
const getPopularMoviesWithPaginationStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_START,
  };
};

const getPopularMoviesWithPaginationSuccess = movies => {
  return {
    type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS,
    payload: {
      movies,
    },
  };
};

const getPopularMoviesWithPaginationError = () => {
  return {
    type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_ERROR,
  };
};

// by query with pagination movies
const getMoviesByQueryPaginationStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_START,
  };
};

const getMoviesByQueryPaginationSuccess = movies => {
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS,
    payload: {
      movies,
    },
  };
};

const getMoviesByQueryPaginationError = err => {
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_START,
    payload: {
      err,
    },
  };
};

// all genres
const getAllGenresStart = () => {
  return {
    type: moviesTypes.GET_ALL_GENRES_START,
  };
};

const getAllGenresSuccess = genres => {
  return {
    type: moviesTypes.GET_ALL_GENRES_SUCCESS,
    payload: {
      genres,
    },
  };
};

const getAllGenresError = err => {
  return {
    type: moviesTypes.GET_ALL_GENRES_ERROR,
    payload: {
      err,
    },
  };
};

export default {
  getPopularMoviesStart,
  getPopularMoviesSuccess,
  getPopularMoviesError,
  getMoviesByQueryStart,
  getMoviesByQuerySuccess,
  getMoviesByQueryError,
  getPopularMoviesWithPaginationStart,
  getPopularMoviesWithPaginationSuccess,
  getPopularMoviesWithPaginationError,
  getMoviesByQueryPaginationStart,
  getMoviesByQueryPaginationSuccess,
  getMoviesByQueryPaginationError,
  getAllGenresStart,
  getAllGenresSuccess,
  getAllGenresError,
};
