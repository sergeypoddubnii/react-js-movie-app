import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import favMovieActions from '../../redux/favMovies/favMoviesActions';
import notificationsActions from '../../redux/global/notifications/notificationsActions';
import notificationsConstants from '../../utils/notificationsConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import cutString from '../../helpers/cutString';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';
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
      <NavLink
        to={{
          pathname: `${routes.DETAILS_PAGE}/${id}`,
          state: { from: location },
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          alt={title}
          title={title}
          className="favMovies__poster"
        />
      </NavLink>
      <div className="favMovies__btnContainer">
        <NavLink
          to={{
            pathname: `${routes.DETAILS_PAGE}/${id}`,
            state: { from: location },
          }}
        >
          <h3 className="favMovies__title" title={title}>
            {cutString(title, 16)}
          </h3>
        </NavLink>
        <button
          type="button"
          title="remove from favorite movies"
          onClick={removeFromFavorite}
          className="favMovies__btn_remove"
        >
          <FontAwesomeIcon icon={faTrashAlt} className="favMovies__icon" />
        </button>
      </div>
    </li>
  );
};

FavMoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  poster: PropTypes.string.isRequired,
};

export default FavMoviesListItem;
