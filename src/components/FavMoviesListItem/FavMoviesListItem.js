import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import favMovieActions from '../../redux/favMovies/favMoviesActions';
import routes from '../../routes';

const FavMoviesListItem = ({ title, id, location, removeFavMovie }) => {
  return (
    <>
      <NavLink
        to={{
          pathname: `${routes.DETAILS_PAGE}/${id}`,
          state: { from: location },
        }}
      >
        <li>
          <p>{title}</p>
        </li>
      </NavLink>
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
