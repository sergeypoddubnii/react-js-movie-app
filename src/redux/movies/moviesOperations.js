import moviesActions from './moviesActions';
import api from '../../services/api';

const getPopularMoviesOperation = () => dispatch => {
  moviesActions.getPopularMoviesStart();
  api
    .getPopularMovies()
    .then(({ data }) => {
      dispatch(moviesActions.getPopularMoviesSuccess(data.results));
    })
    .catch(err => moviesActions.getPopularMoviesError(err));
};

const getMoviesByQuery = query => dispatch => {
  moviesActions.getMoviesByQueryStart();
  api
    .getMoviesByQuery(query)
    .then(({ data }) => {
      dispatch(moviesActions.getMoviesByQuerySuccess(data.results));
    })
    .catch(err => {
      dispatch(moviesActions.getMoviesByQueryError(err));
    });
};

const getPopularMoviesWithPagination = pageNumber => dispatch => {
  moviesActions.getPopularMoviesWithPaginationStart();
  api
    .getPopularMoviesWithPagination(pageNumber)
    .then(({ data }) => {
      dispatch(moviesActions.getPopularMoviesWithPaginationSuccess(data.results));
    })
    .catch(err => dispatch(moviesActions.getPopularMoviesWithPaginationError(err)));
};

const getMoviesByQueryPagination = (query, pageNumber) => dispatch => {
  moviesActions.getMoviesByQueryPaginationStart();
  api
    .getMoviesByQueryWithPagination(query, pageNumber)
    .then(({ data }) => dispatch(moviesActions.getMoviesByQueryPaginationSuccess(data.results)))
    .catch(err => dispatch(moviesActions.getMoviesByQueryPaginationError(err)));
};

const getAllGenres = () => dispatch => {
  moviesActions.getAllGenresStart();
  api
    .getGenresMovies()
    .then(data => dispatch(moviesActions.getAllGenresSuccess(data)))
    .catch(err => dispatch(moviesActions.getAllGenresError(err)));
};

export default {
  getPopularMoviesOperation,
  getMoviesByQuery,
  getPopularMoviesWithPagination,
  getMoviesByQueryPagination,
  getAllGenres,
};
