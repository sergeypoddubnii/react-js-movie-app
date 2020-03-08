import React from 'react';
import { connect } from 'react-redux';
import favMoviesSelectors from '../../redux/favMovies/favMoviesSelectors';
import FavMoviesPageListItem from '../FavMoviesListItem/FavMoviesListItem';

const FavMoviesPageList = ({ favMovies, location }) => {
  const favMoviesList = favMovies.map(favMovie => {
    return (
      <FavMoviesPageListItem
        title={favMovie.title}
        key={favMovie.id}
        id={favMovie.id}
        location={location}
      />
    );
  });
  return <ul>{favMoviesList}</ul>;
};

const mapStateToProps = state => {
  return {
    favMovies: favMoviesSelectors.getFavMovies(state),
  };
};

export default connect(mapStateToProps, null)(FavMoviesPageList);
