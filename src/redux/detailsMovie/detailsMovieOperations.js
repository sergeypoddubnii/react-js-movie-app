import detailsActions from './detailsMovieActions';
import api from '../../services/api';

const getMovieById = id => dispatch => {
  dispatch(detailsActions.getMovieByIdStart());
  return api
    .getMovieById(id)
    .then(data => {
      dispatch(detailsActions.getMovieByIdSuccess(data));
    })
    .catch(err => dispatch(detailsActions.getMovieByIdError(err)));
};

const getRecommendedMovies = id => dispatch => {
  dispatch(detailsActions.getRecommendedMoviesStart());
  return api
    .getRecomendationMoviesById(id)
    .then(({ data }) => {
      dispatch(detailsActions.getRecommendedMoviesSuccess(data.results));
    })
    .catch(err => dispatch(detailsActions.getRecommendedMoviesError(err)));
};

export default { getMovieById, getRecommendedMovies };
