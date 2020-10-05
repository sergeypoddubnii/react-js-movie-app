import moviesTypes from '../../movies/moviesTypes';

const preloaderReducer = (state = { isLoading: false }, { type }) => {
  switch (type) {
    case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_START:
    case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_START:
    case moviesTypes.GET_POPULAR_MOVIES_START:
    case moviesTypes.GET_MOVIES_BY_QUERY_START:
      return { isLoading: true };
    case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS:
    case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS:
    case moviesTypes.GET_POPULAR_MOVIES_SUCCESS:
    case moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS:
    case moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_ERROR:
    case moviesTypes.GET_MOVIES_POPULAR_PAGINATION_ERROR:
    case moviesTypes.GET_POPULAR_MOVIES_ERROR:
    case moviesTypes.GET_MOVIES_BY_QUERY_ERROR:
      return { isLoading: false };
    default:
      return state;
  }
};

export default preloaderReducer;
