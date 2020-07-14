import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moviesOperations from '../../redux/movies/moviesOperations';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import HomePageList from '../../components/HomePageList/HomePageList';
import HomePageForm from '../../components/HomePageForm/HomePageForm';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import './HomePage.scss';

const HomePage = ({ history, location }) => {
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('query'));
  const [pageNumber, setPageNumber] = useState(2);
  const genres = useSelector(moviesSelectors.getGenres);
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
    console.log('query', query);
    if (query) {
      dispatch(moviesOperations.getMoviesByQueryPagination(query, pageNumber));
      return;
    }
    dispatch(moviesOperations.getPopularMoviesWithPagination(pageNumber));
    console.log('genres', genres);
  };

  useEffect(loadMovies, [query]);

  return (
    <div className="homePage">
      <HomePageForm setSearchQuery={setSearchQuery} />
      <HomePageList location={location} />
      <LoadMoreBtn handlerLoadMore={handlerLoadMore} />
    </div>
  );
};

export default HomePage;
