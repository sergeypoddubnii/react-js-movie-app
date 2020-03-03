import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import moviesOperations from '../../redux/movies/moviesOperations';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import HomePageList from '../../components/HomePageList/HomePageList';

const HomePage = ({ getPopularMovies }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getPopularMovies(), []);

  return (
    <>
      <h2 onClick={getPopularMovies}>home page</h2>
      <HomePageList />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getPopularMovies: () => dispatch(moviesOperations.getPopularMoviesOperation()),
  };
};
const mapStateToProps = state => {
  return {
    movies: moviesSelectors.getMovies(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
