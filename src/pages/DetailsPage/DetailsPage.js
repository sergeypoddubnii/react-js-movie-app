import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import detailsMovieSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import detailsMovieOperations from '../../redux/detailsMovie/detailsMovieOperations';
import RecMoviesList from '../../components/RecMoviesList/RecMoviesList';

const DetailsPage = ({
  movie,
  getMovieById,
  getRecommendedMovies,
  match,
  location,
  history,
}) => {
  const loadMovie = () => {
    getMovieById(match.params.movieId);
    getRecommendedMovies(match.params.movieId);
  };

  useEffect(loadMovie, [match.params.movieId]);

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
      <RecMoviesList location={location} />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieById: id => dispatch(detailsMovieOperations.getMovieById(id)),
    getRecommendedMovies: id => dispatch(detailsMovieOperations.getRecommendedMovies(id)),
  };
};

const mapStateToProps = state => {
  return {
    movie: detailsMovieSelectors.getDetailsMovies(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
