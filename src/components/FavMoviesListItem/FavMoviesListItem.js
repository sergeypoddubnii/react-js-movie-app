import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import favMovieActions from '../../redux/favMovies/favMoviesActions';
import routes from '../../routes';
import './FavMoviesListItem.scss';

const FavMoviesListItem = ({
  title,
  id,
  location,
  removeFavMovie,
  releaseDate,
  overview,
  poster,
}) => {
  return (
    <>
      <li className="favMovies__item">
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          alt={title}
          className="favMovies__poster"
        />
        <p className="favMovies__releaseDate">{releaseDate}</p>
        <NavLink
          to={{
            pathname: `${routes.DETAILS_PAGE}/${id}`,
            state: { from: location },
          }}
        >
          <h3 className="favMovies__title">{title}</h3>
        </NavLink>
        <p className="favMovies__overview">{overview}</p>
      </li>

      <button type="button" onClick={() => removeFavMovie(id)}>
        delete
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeFavMovie: id => dispatch(favMovieActions.deleteFavMovie(id)),
  };
};

export default connect(null, mapDispatchToProps)(FavMoviesListItem);
