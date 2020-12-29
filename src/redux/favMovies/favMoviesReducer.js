import favMoviesTypes from './favMoviesTypes';
import produce from 'immer';

const favMoviesReducer = (state = [], { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case favMoviesTypes.ADD_TO_FAV_MOVIES_SUCCESS:
        const sameMovie = state.find(movie => movie.id === payload.id);
        if (!sameMovie) {
          draft.push(payload.movie);
        }
        break;
      case favMoviesTypes.REMOVE_FROM_FAV_MOVIES:
        draft.splice(
          draft.findIndex(favMovie => favMovie.id === payload.id),
          1,
        );
        break;
      default:
        return state;
    }
  });

export default favMoviesReducer;
