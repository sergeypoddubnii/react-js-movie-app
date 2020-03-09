import detailsActions from './detailsMovieActions';
import api from '../../services/api';

const getMovieById = id => dispatch => {
  dispatch(detailsActions.getMovieByIdStart());
  api
    .getMovieById(id)
    .then(data => {
      console.log(data);
      dispatch(detailsActions.getMovieByIdSuccess(data));
    })
    .catch(err => dispatch(detailsActions.getMovieByIdError(err)));
};

const getRecommendedMovies = id => dispatch => {
  dispatch(detailsActions.getRecommendedMoviesStart());
  api
    .getRecomendationMoviesById(id)
    .then(({ results }) => dispatch(detailsActions.getRecommendedMoviesSuccess(results)))
    .catch(err => dispatch(detailsActions.getRecommendedMoviesError(err)));
};

export default { getMovieById, getRecommendedMovies };
