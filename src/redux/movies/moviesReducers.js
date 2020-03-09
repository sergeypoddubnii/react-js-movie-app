import moviesTypes from './moviesTypes';
import { combineReducers } from 'redux';

const moviesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case moviesTypes.GET_POPULAR_MOVIES_SUCCESS:
    case moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS:
      return payload.movies;
    case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS:
    case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_START:
      return [...state, ...payload.movies];
    default:
      return state;
  }
};

const genresReducer = (state = [], { type, payload }) => {
  switch (type) {
    case moviesTypes.GET_ALL_GENRES_SUCCESS:
      return payload.genres;
    default:
      return state;
  }
};

export default combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
});
