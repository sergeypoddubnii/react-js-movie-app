import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from '../../routes';
import addToFavMoviesOperations from '../../redux/favMovies/favMoviesOperations';
import './HomePageListItem.scss';

const HomePageListItem = ({ title, id, location, isFav, poster }) => {
  const dispatch = useDispatch();

  return (
    <li className="gallery-item">
      <NavLink
        to={{
          pathname: `${routes.DETAILS_PAGE}/${id}`,
          state: { from: location },
        }}
        className="gallery-item__link"
      >
        <div className="gallery-item__container">
          <img
            src={`https://image.tmdb.org/t/p/w200${poster}`}
            alt={title}
            className="gallery-item__img"
          />
          <div className="gallery-item__overlay">
            <button
              type="button"
              onClick={() => dispatch(addToFavMoviesOperations.addToFavMovies(id))}
            >
              add
            </button>
          </div>
        </div>
        <h3 className="home-gallery__title">{title}</h3>
      </NavLink>
      {isFav && <p>isFav</p>}
      {/* <button onClick={() => addToFavMovies(id)}>add</button> */}
    </li>
  );
};

export default HomePageListItem;
