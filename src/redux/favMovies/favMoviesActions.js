import favMoviesTypes from './favMoviesTypes';

const addToFavMoviesStart = () => {
  return {
    type: favMoviesTypes.ADD_TO_FAV_MOVIES_START,
  };
};

const addToFavMoviesSuccess = (movie, id) => {
  return {
    type: favMoviesTypes.ADD_TO_FAV_MOVIES_SUCCESS,
    payload: {
      movie,
      id,
    },
  };
};

const addToFavMoviesError = err => {
  return {
    type: favMoviesTypes.ADD_TO_FAV_MOVIES_ERROR,
    payload: {
      err,
    },
  };
};

const deleteFavMovie = id => {
  return {
    type: favMoviesTypes.REMOVE_FROM_FAV_MOVIES,
    payload: {
      id,
    },
  };
};

export default {
  addToFavMoviesStart,
  addToFavMoviesSuccess,
  addToFavMoviesError,
  deleteFavMovie,
};
