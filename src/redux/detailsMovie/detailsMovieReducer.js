import detailsMovieTypes from './detailsMovieTypes';

const initialState = {
  detailsMovie: {},
  recommendedMovies: [],
};

const detailsMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS:
      return { ...state, detailsMovie: payload.movie.data };
    case detailsMovieTypes.GET_RECOMMENDED_MOVIES_SUCCESS:
      return { ...state, recommendedMovies: payload.movies };
    default:
      return state;
  }
};

export default detailsMovieReducer;
