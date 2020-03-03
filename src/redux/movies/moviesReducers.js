import moviesTypes from './moviesTypes';

const moviesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case moviesTypes.GET_POPULAR_MOVIES_SUCCESS:
      return payload.movies;
    default:
      return state;
  }
};

export default moviesReducer;
