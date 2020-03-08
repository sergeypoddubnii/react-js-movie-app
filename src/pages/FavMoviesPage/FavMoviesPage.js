import React from 'react';
import FavMoviesList from '../../components/FavMoviesPageList/FavMoviesPageList';

const FavMoviesPage = ({ location }) => {
  return (
    <div>
      <h1>favorite</h1>
      <FavMoviesList location={location} />
    </div>
  );
};

export default FavMoviesPage;
