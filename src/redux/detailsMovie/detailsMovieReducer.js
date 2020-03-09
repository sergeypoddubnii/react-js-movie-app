import detailsMovieTypes from './detailsMovieTypes';
import { combineReducers } from 'redux';

const detailsMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS:
      return payload.movie;
    default:
      return state;
  }
};

const recommendedMoviesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case detailsMovieTypes.GET_RECOMMENDED_MOVIES_SUCCESS:
      return payload.movies;
    default:
      return state;
  }
};

export default combineReducers({
  detailsMovie: detailsMovieReducer,
  recommendedMovies: recommendedMoviesReducer,
});
