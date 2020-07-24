import React from 'react';
import { useSelector } from 'react-redux';
import detailsSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import RecMoviesListItem from '../RecMoviesListItem/RecMoviesListItem';
import Slider from 'react-slick';

const RecMoviesList = ({ location }) => {
  const recMovies = useSelector(detailsSelectors.getRecommendedMovies);
  console.log('recMovies', recMovies);
  const list = recMovies.map(recMovie => (
    <RecMoviesListItem
      key={recMovie.id}
      title={recMovie.title}
      poster={recMovie.backdrop_path}
      id={recMovie.id}
      location={location}
    />
  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <>
      <br />
      <Slider {...settings}>{list}</Slider>

      {recMovies.length === 0 && <p>nothing to recommend</p>}
    </>
  );
};

export default RecMoviesList;
