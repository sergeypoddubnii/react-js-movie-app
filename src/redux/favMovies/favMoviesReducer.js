import favMoviesTypes from './favMoviesTypes';

const favMoviesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case favMoviesTypes.ADD_TO_FAV_MOVIES_SUCCESS:
      return [...state, payload.movie];
    default:
      return state;
  }
};

export default favMoviesReducer;
