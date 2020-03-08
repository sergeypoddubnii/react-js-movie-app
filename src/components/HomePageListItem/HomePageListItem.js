import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../routes';
import addToFavMoviesOperations from '../../redux/favMovies/favMoviesOperations';

const HomePageListItem = ({ title, id, addToFavMovies, location }) => {
  return (
    <li>
      <NavLink
        to={{
          pathname: `${routes.DETAILS_PAGE}/${id}`,
          state: { from: location },
        }}
      >
        <h3>{title}</h3>
      </NavLink>
      <button onClick={() => addToFavMovies(id)}>add</button>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavMovies: id => dispatch(addToFavMoviesOperations.addToFavMovies(id)),
  };
};

export default connect(null, mapDispatchToProps)(HomePageListItem);
