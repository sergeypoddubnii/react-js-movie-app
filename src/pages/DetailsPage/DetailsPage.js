import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import detailsMovieSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import detailsMovieOperations from '../../redux/detailsMovie/detailsMovieOperations';

const DetailsPage = ({ movie, getMovieById, match, location, history }) => {
  const loadMovie = () => {
    getMovieById(match.params.movieId);
  };

  useEffect(loadMovie, []);

  const handlerGoBack = () => {
    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }
    history.push('/home');
  };

  return (
    <>
      <button type="button" onClick={handlerGoBack}>
        back
      </button>
      <h1>DetailsPage</h1>
      <p>{movie.title}</p>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieById: id => dispatch(detailsMovieOperations.getMovieById(id)),
  };
};

const mapStateToProps = state => {
  return {
    movie: detailsMovieSelectors.getDetailsMovies(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
