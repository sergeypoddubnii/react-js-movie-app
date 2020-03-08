import favMoviesActions from '../favMovies/favMoviesActions';
import api from '../../services/api';

const addToFavMovies = id => dispatch => {
  dispatch(favMoviesActions.addToFavMoviesStart());
  api
    .getMovieById(id)
    .then(data => {
      console.log(data);
      dispatch(favMoviesActions.addToFavMoviesSuccess(data, id));
    })
    .catch(err => dispatch(favMoviesActions.addToFavMoviesError(err)));
};

export default { addToFavMovies };
