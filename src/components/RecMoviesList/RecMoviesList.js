import React from 'react';
import { connect } from 'react-redux';
import detailsSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import RecMoviesListItem from '../RecMoviesListItem/RecMoviesListItem';

const RecMoviesList = ({ recMovies, location }) => {
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
      <p>recommended</p>
      <ul>{list}</ul>
    </>
  );
};

const mapStateToProps = state => {
  return {
    recMovies: detailsSelectors.getRecommendedMovies(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RecMoviesList);
