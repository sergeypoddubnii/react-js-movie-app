import moviesActions from './moviesActions';
import api from '../../services/api';

const getPopularMoviesOperation = () => dispatch => {
  moviesActions.getPopularMoviesStart();
  api
    .getPopularMovies()
    .then(({ results }) => {
      dispatch(moviesActions.getPopularMoviesSuccess(results));
    })
    .catch(err => moviesActions.getPopularMoviesError(err));
};

const getMoviesByQuery = query => dispatch => {
  moviesActions.getMoviesByQueryStart();
  api
    .getMoviesByQuery(query)
    .then(({ results }) => {
      dispatch(moviesActions.getMoviesByQuerySuccess(results));
    })
    .catch(err => {
      console.log(err);
      dispatch(moviesActions.getMoviesByQueryError(err));
    });
};

const getPopularMoviesWithPagination = pageNumber => dispatch => {
  moviesActions.getPopularMoviesWithPaginationStart();
  api
    .getPopularMoviesWithPagination(pageNumber)
    .then(({ results }) => {
      dispatch(moviesActions.getPopularMoviesWithPaginationSuccess(results));
    })
    .catch(err => dispatch(moviesActions.getPopularMoviesWithPaginationError(err)));
};

const getMoviesByQueryPagination = (query, pageNumber) => dispatch => {
  moviesActions.getMoviesByQueryPaginationStart();
  api
    .getMoviesByQueryWithPagination(query, pageNumber)
    .then(({ results }) =>
      dispatch(moviesActions.getMoviesByQueryPaginationSuccess(results)),
    )
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
