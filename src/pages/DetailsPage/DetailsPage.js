import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import detailsMovieSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import detailsMovieOperations from '../../redux/detailsMovie/detailsMovieOperations';
import RecMoviesList from '../../components/RecMoviesList/RecMoviesList';
import RatingsStars from '../../components/RatingsStarts/RatingsStars';
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

  const countRunTime = minutes => {
    const hours = Math.floor(minutes / 60);
    const restMinutes = minutes % 60;
    return `${hours}h ${restMinutes}min`;
  };

  const genres = useMemo(
    () =>
      movie.genres &&
      movie.genres.map(genre => {
        return <span key={genre.id}>{genre.name}, &nbsp;</span>;
      }),
    [movie.genres],
  );

  const languages =
    movie.spoken_languages &&
    movie.spoken_languages.map(language => {
      return <span key={language.id}>{language.name}, &nbsp;</span>;
    });

  return (
    <div className="detailsPage">
      <div className="watch">
        <div className="description">
          <button type="button" onClick={handlerGoBack} className="goBackBtn">
            back
          </button>
          <h2 className="description__title">{movie.title}</h2>
          <ul className="description__generalInfo">
            <RatingsStars rating={movie.vote_average} />
            <li className="description__generalInfoItem">{movie.vote_average}</li>
            <li className="description__generalInfoItem">({movie.vote_count})</li>
          </ul>
          <p className="description__overview">{movie.overview}</p>
          <ul className="description__peopleInfo">
            <li className="description__peopleInfoItem">Genres: {genres}</li>
            <li className="description__peopleInfoItem">
              Original language: {movie.original_language}
            </li>
            <li className="description__peopleInfoItem">Languages: {languages}</li>
            <li className="description__peopleInfoItem">
              Run time: {countRunTime(movie.runtime)}
            </li>
            <li className="description__peopleInfoItem">
              Release date: {movie.release_date}
            </li>
          </ul>
        </div>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>
      <RecMoviesList location={location} />
    </div>
  );
};

export default DetailsPage;
