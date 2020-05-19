import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import moviesOperations from '../../redux/movies/moviesOperations';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import HomePageList from '../../components/HomePageList/HomePageList';
import HomePageForm from '../../components/HomePageForm/HomePageForm';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import './HomePage.scss';

const HomePage = ({
  getPopularMovies,
  getMovieByQuery,
  history,
  location,
  getPopularMoviesPagination,
  getMoviesByQueryPagination,
  getAllGenres,
  genres,
}) => {
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('query'));
  const [pageNumber, setPageNumber] = useState(2);

  const loadMovies = () => {
    getAllGenres();
    setPageNumber(2);
    if (query) {
      getMovieByQuery(query);
      return;
    }
    getPopularMovies();
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
      getMoviesByQueryPagination(query, pageNumber);
      return;
    }
    getPopularMoviesPagination(pageNumber);
    console.log('genres', genres);
  };

  useEffect(loadMovies, [query]);

  return (
    <div className="homePage">
      <HomePageForm setSearchQuery={setSearchQuery} />
      <HomePageList location={location} />
      {/* <button type="button" className="loadMore__btn" onClick={handlerLoadMore}>
        load more
      </button> */}
      <LoadMoreBtn handlerLoadMore={handlerLoadMore} />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getPopularMovies: () => dispatch(moviesOperations.getPopularMoviesOperation()),
    getMovieByQuery: query => dispatch(moviesOperations.getMoviesByQuery(query)),
    getPopularMoviesPagination: pageNumber =>
      dispatch(moviesOperations.getPopularMoviesWithPagination(pageNumber)),
    getMoviesByQueryPagination: (query, pageNumber) =>
      dispatch(moviesOperations.getMoviesByQueryPagination(query, pageNumber)),
    getAllGenres: () => dispatch(moviesOperations.getAllGenres()),
  };
};

const mapStateToProps = state => {
  return {
    movies: moviesSelectors.getMovies(state),
    genres: moviesSelectors.getGenres(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
