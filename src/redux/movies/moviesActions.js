import moviesTypes from './moviesTypes';

const getPopularMoviesStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_START,
  };
};

const getPopularMoviesSuccess = movies => {
  console.log('popular', movies);
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
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_ERROR,
    payload: {
      err,
    },
  };
};

const getPopularMoviesWithPaginationStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_START,
  };
};

const getPopularMoviesWithPaginationSuccess = movies => {
  console.log('popularPagination', movies);
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

const getMoviesByQueryPaginationStart = () => {
  return {
    type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_START,
  };
};
const getMoviesByQueryPaginationSuccess = movies => {
  console.log(`queryPagination`, movies);
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
};
