import React from 'react';
import { useSelector } from 'react-redux';
import detailsSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import RecMoviesListItem from '../RecMoviesListItem/RecMoviesListItem';

const RecMoviesList = ({ location }) => {
  const recMovies = useSelector(detailsSelectors.getRecommendedMovies);

  const list = recMovies.map(recMovie => (
    <RecMoviesListItem
      key={recMovie.id}
      title={recMovie.title}
      id={recMovie.id}
      location={location}
    />
  ));
  return (
    <>
      <br />
      <ul>{list}</ul>
      {recMovies.length === 0 && <p>nothing to recommend</p>}
    </>
  );
};

export default RecMoviesList;
