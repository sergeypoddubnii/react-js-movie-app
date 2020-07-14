import React from 'react';
import { useSelector } from 'react-redux';
import favMoviesSelectors from '../../redux/favMovies/favMoviesSelectors';
import FavMoviesListItem from '../FavMoviesListItem/FavMoviesListItem';
import './FavMoviesPageList.scss';

const FavMoviesPageList = ({ location }) => {
  const favMovies = useSelector(favMoviesSelectors.getFavMovies);
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

export default FavMoviesPageList;
