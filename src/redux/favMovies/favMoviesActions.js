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

export default { addToFavMoviesStart, addToFavMoviesSuccess, addToFavMoviesError };
