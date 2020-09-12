import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moviesOperations from '../../redux/movies/moviesOperations';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import HomePageList from '../../components/HomePageList/HomePageList';
import HomePageForm from '../../components/HomePageForm/HomePageForm';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import './HomePage.scss';

const HomePage = ({ history, location }) => {
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('query'));
  const [pageNumber, setPageNumber] = useState(2);
  const movies = useSelector(moviesSelectors.getMovies);
  const dispatch = useDispatch();

  const loadMovies = () => {
    dispatch(moviesOperations.getAllGenres());
    setPageNumber(2);
    if (query) {
      dispatch(moviesOperations.getMoviesByQuery(query));
      return;
    }
    dispatch(moviesOperations.getPopularMoviesOperation());
  };

  const setSearchQuery = value => {
    if (!value) {
      return;
    }
    history.push({
      ...location,
      search: `query=${value}`,
    });
    setQuery(value);
  };

  const handlerLoadMore = () => {
    setPageNumber(pageNumber + 1);
    if (query) {
      dispatch(moviesOperations.getMoviesByQueryPagination(query, pageNumber));
      return;
    }
    dispatch(moviesOperations.getPopularMoviesWithPagination(pageNumber));
  };

  useEffect(loadMovies, [query]);

  return (
    <div className="homePage">
      <HomePageForm setSearchQuery={setSearchQuery} />
      <HomePageList location={location} />
      {movies.length !== 0 ? <LoadMoreBtn handlerLoadMore={handlerLoadMore} /> : null}
    </div>
  );
};

export default HomePage;
