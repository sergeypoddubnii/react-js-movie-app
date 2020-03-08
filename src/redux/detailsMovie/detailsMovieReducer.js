import detailsMovieTypes from './detailsMovieTypes';

const detailsMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS:
      return payload.movie;
    default:
      return state;
  }
};

export default detailsMovieReducer;
