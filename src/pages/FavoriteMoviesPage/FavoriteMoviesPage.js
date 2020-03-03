import React from 'react';
import { connect } from 'react-redux';
import favMoviesSelectors from '../../redux/favMovies/favMoviesSelectors';

const FavoriteMoviesPage = ({ favMovies }) => {
  console.log(favMovies);
  return (
    <div>
      <h1>favorite</h1>
      <ul>hekki</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    favMovies: favMoviesSelectors.getFavMovies(state),
  };
};

export default connect(mapStateToProps, null)(FavoriteMoviesPage);
