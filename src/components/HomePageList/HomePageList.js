import React from 'react';
import { connect } from 'react-redux';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import HomePageListItem from '../../components/HomePageListItem/HomePageListItem';

const HomePageList = ({ movies, location }) => {
  const list = movies.map(movie => (
    <HomePageListItem
      title={movie.title}
      key={movie.id}
      id={movie.id}
      location={location}
    />
  ));
  return (
    <>
      <div>{list}</div>
      {/* <button type="button">load more</button> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    movies: moviesSelectors.getMovies(state),
  };
};

export default connect(mapStateToProps, null)(HomePageList);
