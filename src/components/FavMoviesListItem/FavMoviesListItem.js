import React from 'react';
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
        notificationsConstants.message.removedFromFavorite,
        notificationsConstants.variant.error,
      ),
    );
  };

  return (
    <li className="favMovies__item">
      <NavLink
        to={{
          pathname: `${routes.DETAILS_PAGE}/${id}`,
          state: { from: location },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          alt={title}
          className="favMovies__poster"
        />
        <h3 className="favMovies__title">{title}</h3>
      </NavLink>
      <button type="button" onClick={removeFromFavorite}>
        delete
      </button>
    </li>
  );
};

export default FavMoviesListItem;
