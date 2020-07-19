import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import detailsMovieSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import detailsMovieOperations from '../../redux/detailsMovie/detailsMovieOperations';
import RecMoviesList from '../../components/RecMoviesList/RecMoviesList';
import './DetailsPage.scss';

const DetailsPage = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const movie = useSelector(detailsMovieSelectors.getDetailsMovies);
  console.log('details movie', movie);

  const handlerGoBack = () => {
    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }
    history.push('/home');
  };

  useEffect(() => {
    dispatch(detailsMovieOperations.getMovieById(match.params.movieId));
    dispatch(detailsMovieOperations.getRecommendedMovies(match.params.movieId));
  }, [match.params.movieId, dispatch]);

  return (
    <div className="detailsPage">
      <button type="button" onClick={handlerGoBack} className="goBackBtn">
        back
      </button>
      <div className="watch">
        <div className="description">
          <h2 className="description__title">{movie.title}</h2>
          <ul className="description__generalInfo">
            <li className="description__generalInfoItem">{movie.vote_average}</li>
            <li className="description__generalInfoItem">{movie.vote_count}</li>
            <li className="description__generalInfoItem">{movie.runtime}</li>
            <li className="description__generalInfoItem">{movie.release_date}</li>
          </ul>
          <p className="description__overview">{movie.overview}</p>
          <ul className="description__peopleInfo">
            <li className="description__peopleInfoItem">Genres: ...</li>
            <li className="description__peopleInfoItem">Languages: ...</li>
            <li className="description__peopleInfoItem">
              Original language:{movie.original_language}
            </li>
          </ul>
        </div>
        <div className="poster">
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
        </div>
      </div>
      <RecMoviesList location={location} />
    </div>
  );
};

export default DetailsPage;
