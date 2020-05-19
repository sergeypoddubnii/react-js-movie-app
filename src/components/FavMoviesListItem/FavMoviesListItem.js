import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import favMovieActions from '../../redux/favMovies/favMoviesActions';
import routes from '../../routes';
import './FavMoviesListItem.scss';

const FavMoviesListItem = ({ title, id, location, removeFavMovie, poster }) => {
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
      <button type="button" onClick={() => removeFavMovie(id)}>
        delete
      </button>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFavMovie: id => dispatch(favMovieActions.deleteFavMovie(id)),
  };
};

export default connect(null, mapDispatchToProps)(FavMoviesListItem);
