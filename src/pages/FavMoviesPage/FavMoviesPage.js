import React from 'react';
import FavMoviesList from '../../components/FavMoviesPageList/FavMoviesPageList';
import './FavMoviesPage.scss';

const FavMoviesPage = ({ location }) => {
  return (
    <div className="favMoviePage">
      <h1 className="favMoviePage__title">Favorite movies</h1>
      <FavMoviesList location={location} />
    </div>
  );
};

export default FavMoviesPage;
