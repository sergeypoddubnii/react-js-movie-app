import React from 'react';
// import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import favMovieActions from '../../redux/favMovies/favMoviesActions';
import notificationsActions from '../../redux/global/notifications/notificationsActions';
import notificationsConstants from '../../utils/notificationsConstants';
import routes from '../../routes';
import './FavMoviesListItem.scss';

const FavMoviesListItem = ({ title, id, location, poster }) => {
  const dispatch = useDispatch();
  const removeFromFavorite = () => {
    dispatch(favMovieActions.deleteFavMovie(id));
    dispatch(
      notificationsActions.addNotification(
        notificationsConstants.message.removedFromFavorite(title),
        notificationsConstants.variant.error,
      ),
    );
  };

  return (
    <li className="favMovies__item">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={title}
        className="favMovies__poster"
      />
      <div className="favMovies__btnContainer">
        <NavLink
          to={{
            pathname: `${routes.DETAILS_PAGE}/${id}`,
            state: { from: location },
          }}
        >
          <h3 className="favMovies__title">{title}</h3>
        </NavLink>
        <button
          type="button"
          title="remove from favorite movies"
          onClick={removeFromFavorite}
          className="favMovies__btn_remove"
        >
          <DeleteOutlinedIcon color="secondary" fontSize="large" />
        </button>
      </div>
    </li>
  );
};

export default FavMoviesListItem;
