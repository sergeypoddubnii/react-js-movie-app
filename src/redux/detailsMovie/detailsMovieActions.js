import detailsMovieTypes from './detailsMovieTypes';

const getMovieByIdStart = () => {
  return {
    type: detailsMovieTypes.GET_MOVIE_BY_ID_START,
  };
};

const getMovieByIdSuccess = movie => {
  return {
    type: detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS,
    payload: {
      movie,
    },
  };
};

const getMovieByIdError = err => {
  return {
    type: detailsMovieTypes.GET_MOVIE_BY_ID_ERROR,
    payload: {
      err,
    },
  };
};

const getRecommendedMoviesStart = () => {
  return {
    type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_START,
  };
};

const getRecommendedMoviesSuccess = movies => {
  console.log('recMovies', movies);
  return {
    type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_SUCCESS,
    payload: {
      movies,
    },
  };
};

const getRecommendedMoviesError = err => {
  return {
    type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_ERROR,
    payload: {
      err,
    },
  };
};

export default {
  getMovieByIdStart,
  getMovieByIdSuccess,
  getMovieByIdError,
  getRecommendedMoviesStart,
  getRecommendedMoviesSuccess,
  getRecommendedMoviesError,
};
