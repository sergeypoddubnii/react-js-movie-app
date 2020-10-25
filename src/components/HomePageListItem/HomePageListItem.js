import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../../routes';
import addToFavMoviesOperations from '../../redux/favMovies/favMoviesOperations';
import notificationsActions from '../../redux/global/notifications/notificationsActions';
import notificationsConstants from '../../utils/notificationsConstants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import cutString from '../../helpers/cutString';
import './HomePageListItem.scss';

const HomePageListItem = ({ title, id, location, isFav, poster }) => {
  const dispatch = useDispatch();

  const addToFavorite = () => {
    dispatch(addToFavMoviesOperations.addToFavMovies(id));
    dispatch(
      notificationsActions.addNotification(
        notificationsConstants.message.addedToFavorite(title),
        notificationsConstants.variant.success,
      ),
    );
  };

  return (
    <li className="galleryItem">
      <NavLink
        to={{
          pathname: `${routes.DETAILS_PAGE}/${id}`,
          state: { from: location },
        }}
        className="galleryItem__link"
      >
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          alt={title}
          title={title}
          className="galleryItem__img"
        />
      </NavLink>
      <div className="galleryItem__wrap">
        <NavLink
          to={{
            pathname: `${routes.DETAILS_PAGE}/${id}`,
            state: { from: location },
          }}
          className="galleryItem__link"
        >
          <h3 className="galleryItem__title">{cutString(title, 16)}</h3>
        </NavLink>
        {!isFav ? (
          <button
            title="add to favorite list"
            className="galleryItem__btn"
            onClick={addToFavorite}
            disabled={isFav}
          >
            <FontAwesomeIcon
              icon={faFolderPlus}
              className="galleryItem__icon galleryItem__icon_add"
            />
          </button>
        ) : (
          <FontAwesomeIcon
            icon={faCheck}
            className="galleryItem__icon galleryItem__icon_hasAdded"
            title="added to your favorite list"
          />
        )}
      </div>
    </li>
  );
};

export default HomePageListItem;
