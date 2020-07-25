import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import favMoviesSelectors from '../../redux/favMovies/favMoviesSelectors';
import HomePageListItem from '../../components/HomePageListItem/HomePageListItem';
import './HomePageList.scss';

const HomePageList = ({ location }) => {
  const favMovies = useSelector(favMoviesSelectors.getFavMovies);
  const movies = useSelector(moviesSelectors.getMovies);

  const list = useMemo(
    () =>
      movies.map(movie => {
        if (favMovies.find(favMovie => favMovie.id === movie.id)) {
          return (
            <HomePageListItem
              isFav={true}
              title={movie.title}
              poster={movie.poster_path}
              key={movie.id}
              id={movie.id}
              location={location}
            />
          );
        }
        return (
          <HomePageListItem
            isFav={false}
            title={movie.title}
            poster={movie.poster_path}
            key={movie.id}
            id={movie.id}
            location={location}
          />
        );
      }),
    [favMovies, location, movies],
  );
  return (
    <>
      <div className="home-gallery">{list}</div>
    </>
  );
};

export default HomePageList;
