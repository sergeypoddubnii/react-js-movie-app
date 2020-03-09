import React from 'react';
import { connect } from 'react-redux';
import favMoviesSelectors from '../../redux/favMovies/favMoviesSelectors';
import FavMoviesListItem from '../FavMoviesListItem/FavMoviesListItem';

const FavMoviesPageList = ({ favMovies, location }) => {
  const favMoviesList = favMovies.map(favMovie => {
    return (
      <FavMoviesListItem
        location={location}
        key={favMovie.id}
        id={favMovie.id}
        title={favMovie.title}
        releaseDate={favMovie.release_date}
        overview={favMovie.overview}
        poster={favMovie.poster_path}
      />
    );
  });
  return <ul className="favMovies__list">{favMoviesList}</ul>;
};

const mapStateToProps = state => {
  return {
    favMovies: favMoviesSelectors.getFavMovies(state),
  };
};

export default connect(mapStateToProps, null)(FavMoviesPageList);
