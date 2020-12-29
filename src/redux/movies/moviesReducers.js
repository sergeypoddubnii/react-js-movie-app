import moviesTypes from './moviesTypes';
import produce from 'immer';

const initialState = {
  movies: [],
  genres: [],
};

const moviesReducer = (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case moviesTypes.GET_POPULAR_MOVIES_SUCCESS:
      case moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS:
        draft.movies = payload.movies;
        break;
      case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS:
      case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS:
        draft.movies = [...state.movies, ...payload.movies];
        break;
      case moviesTypes.GET_POPULAR_MOVIES_ERROR:
      case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_ERROR:
      case moviesTypes.GET_MOVIES_BY_QUERY_ERROR:
      case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_ERROR:
        draft.movies = [];
        break;
      case moviesTypes.GET_ALL_GENRES_SUCCESS:
        draft.genres = payload.genres;
        break;
      default:
        return state;
    }
  });

export default moviesReducer;
