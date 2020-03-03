import moviesTypes from './moviesTypes';

const getPopularMoviesStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_START,
  };
};

const getPopularMoviesSuccess = movies => {
  console.log(movies);
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

export default { getPopularMoviesStart, getPopularMoviesSuccess, getPopularMoviesError };
