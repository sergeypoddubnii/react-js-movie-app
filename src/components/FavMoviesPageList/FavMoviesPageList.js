import React from 'react';
import { connect } from 'react-redux';
import favMoviesSelectors from '../../redux/favMovies/favMoviesSelectors';
import FavMoviesListItem from '../FavMoviesListItem/FavMoviesListItem';
import './FavMoviesPageList.scss';

const FavMoviesPageList = ({ favMovies, location }) => {
  const favMoviesList = favMovies.map(favMovie => {
    return (
      <FavMoviesListItem
        location={location}
        key={favMovie.id}
        id={favMovie.id}
        title={favMovie.title}
        poster={favMovie.poster_path}
      />
    );
  });
  return <ul className="favMovies-gallery">{favMoviesList}</ul>;
};

const mapStateToProps = state => {
  return {
    favMovies: favMoviesSelectors.getFavMovies(state),
  };
};

export default connect(mapStateToProps, null)(FavMoviesPageList);
