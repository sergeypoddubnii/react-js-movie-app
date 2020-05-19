import React from 'react';
import { connect } from 'react-redux';
import moviesSelectors from '../../redux/movies/moviesSelectors';
import favMoviesSelectors from '../../redux/favMovies/favMoviesSelectors';
import HomePageListItem from '../../components/HomePageListItem/HomePageListItem';
import './HomePageList.scss';

const HomePageList = ({ movies, location, favMovies }) => {
  const list = movies.map(movie => {
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
  });
  return (
    <>
      <div className="home-gallery">{list}</div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    movies: moviesSelectors.getMovies(state),
    favMovies: favMoviesSelectors.getFavMovies(state),
  };
};

export default connect(mapStateToProps, null)(HomePageList);
