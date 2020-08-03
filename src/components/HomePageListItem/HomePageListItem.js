import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../../routes';
import addToFavMoviesOperations from '../../redux/favMovies/favMoviesOperations';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import notificationsActions from '../../redux/global/notifications/notificationsActions';
import './HomePageListItem.scss';

const HomePageListItem = ({ title, id, location, isFav, poster }) => {
  const dispatch = useDispatch();

  const addToFavorite = () => {
    dispatch(addToFavMoviesOperations.addToFavMovies(id));
    console.log('add');
    dispatch(notificationsActions.addNotification('added to favorite', 'default'));
  };

  return (
    <li className="galleryItem">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={title}
        title={title}
        className="galleryItem__img"
      />
      {isFav ? (
        <NavLink to={routes.FAVOTIRE_MOVIES_PAGE} className="galleryItem__isFav">
          <FavoriteBorderIcon color="secondary" fontSize="large" />
        </NavLink>
      ) : null}
      <div className="galleryItem__wrap">
        <NavLink
          to={{
            pathname: `${routes.DETAILS_PAGE}/${id}`,
            state: { from: location },
          }}
          className="galleryItem__link"
        >
          <h3 className="galleryItem__title">{title}</h3>
        </NavLink>
        <button
          title="add to favorite list"
          className="galleryItem__btn"
          onClick={addToFavorite}
        >
          <AddCircleOutlineIcon color="action" fontSize="large" />
        </button>
      </div>
    </li>
  );
};

export default HomePageListItem;
