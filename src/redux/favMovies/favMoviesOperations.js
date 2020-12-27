import favMoviesActions from '../favMovies/favMoviesActions';
import api from '../../services/api';

const addToFavMovies = id => dispatch => {
  dispatch(favMoviesActions.addToFavMoviesStart());
  return api
    .getMovieById(id)
    .then(({ data }) => {
      dispatch(favMoviesActions.addToFavMoviesSuccess(data, id));
    })
    .catch(() => {});
};

export default { addToFavMovies };
