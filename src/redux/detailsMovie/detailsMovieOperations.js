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

export default { getMovieById };
