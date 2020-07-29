import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../../routes';
import addToFavMoviesOperations from '../../redux/favMovies/favMoviesOperations';
import './HomePageListItem.scss';

const HomePageListItem = ({ title, id, location, isFav, poster }) => {
  const dispatch = useDispatch();
  return (
    <li className="galleryItem">
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={title}
        className="galleryItem__img"
      />
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
        <button onClick={() => dispatch(addToFavMoviesOperations.addToFavMovies(id))}>
          add
        </button>
      </div>
      {isFav && <p>isFav</p>}
    </li>
  );
};

export default HomePageListItem;
