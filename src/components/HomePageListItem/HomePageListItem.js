import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../../routes';
import addToFavMoviesOperations from '../../redux/favMovies/favMoviesOperations';

const HomePageListItem = ({ title, id, addToFavMovies }) => {
  return (
    <li>
      <NavLink to={routes.DETAILS_PAGE}>
        <h3>{title}</h3>
        <button onClick={() => addToFavMovies(id)}>add</button>
      </NavLink>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavMovies: id => dispatch(addToFavMoviesOperations.addToFavMovies(id)),
  };
};

export default connect(null, mapDispatchToProps)(HomePageListItem);
