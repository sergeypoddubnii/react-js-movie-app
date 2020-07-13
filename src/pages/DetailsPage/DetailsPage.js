import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import detailsMovieSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import detailsMovieOperations from '../../redux/detailsMovie/detailsMovieOperations';
import RecMoviesList from '../../components/RecMoviesList/RecMoviesList';

const DetailsPage = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const movie = useSelector(detailsMovieSelectors.getDetailsMovies);

  const loadMovie = () => {
    dispatch(detailsMovieOperations.getMovieById(match.params.movieId));
    dispatch(detailsMovieOperations.getRecommendedMovies(match.params.movieId));
  };

  const handlerGoBack = () => {
    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }
    history.push('/home');
  };

  useEffect(loadMovie, [match.params.movieId]);

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

export default DetailsPage;
