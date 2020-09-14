import React from 'react';
import FavMoviesList from '../../components/FavMoviesPageList/FavMoviesPageList';
import ReactRouterPropTypes from 'react-router-prop-types';
import './FavMoviesPage.scss';

const FavMoviesPage = ({ location }) => {
  return (
    <div className="favMoviePage">
      <h1 className="favMoviePage__title">Favorite movies</h1>
      <FavMoviesList location={location} />
    </div>
  );
};

FavMoviesList.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default FavMoviesPage;
