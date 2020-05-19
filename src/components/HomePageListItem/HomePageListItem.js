import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../routes';
import addToFavMoviesOperations from '../../redux/favMovies/favMoviesOperations';
import './HomePageListItem.scss';

const HomePageListItem = ({ title, id, addToFavMovies, location, isFav, poster }) => {
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
            <button type="button" onClick={() => addToFavMovies(id)}>
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

const mapDispatchToProps = dispatch => {
  return {
    addToFavMovies: id => dispatch(addToFavMoviesOperations.addToFavMovies(id)),
  };
};

export default connect(null, mapDispatchToProps)(HomePageListItem);
