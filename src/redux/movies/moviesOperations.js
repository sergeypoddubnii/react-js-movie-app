import moviesActions from './moviesActions';
import api from '../../services/api';

const getPopularMoviesOperation = () => dispatch => {
  moviesActions.getPopularMoviesStart();
  api
    .getPopularMovies()
    .then(({ results }) => {
      console.log(results);
      dispatch(moviesActions.getPopularMoviesSuccess(results));
    })
    .catch(err => moviesActions.getPopularMoviesError(err));
};

export default { getPopularMoviesOperation };
