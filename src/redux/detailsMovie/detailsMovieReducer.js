import detailsMovieTypes from './detailsMovieTypes';
import produce from 'immer';

const initialState = {
  detailsMovie: {},
  recommendedMovies: [],
};

const detailsMovieReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS:
        draft.detailsMovie = payload.movie.data;
        break;
      case detailsMovieTypes.GET_RECOMMENDED_MOVIES_SUCCESS:
        draft.recommendedMovies = payload.movies;
        break;
      default:
        return state;
    }
  });

export default detailsMovieReducer;
