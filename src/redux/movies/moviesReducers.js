import moviesTypes from './moviesTypes';

const initialState = {
  movies: [],
  genres: [],
};

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case moviesTypes.GET_POPULAR_MOVIES_SUCCESS:
    case moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS:
      return { ...state, movies: payload.movies };
    case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS:
    case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS:
      return { ...state, movies: [...state.movies, ...payload.movies] };
    case moviesTypes.GET_POPULAR_MOVIES_ERROR:
    case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_ERROR:
    case moviesTypes.GET_MOVIES_BY_QUERY_ERROR:
    case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_ERROR:
      return { ...state, movies: [] };
    case moviesTypes.GET_ALL_GENRES_SUCCESS:
      return { ...state, genres: payload.genres };
    default:
      return state;
  }
};

export default moviesReducer;
