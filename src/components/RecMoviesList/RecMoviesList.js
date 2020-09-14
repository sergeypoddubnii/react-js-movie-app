import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import detailsSelectors from '../../redux/detailsMovie/detailsMovieSelectors';
import RecMoviesListItem from '../RecMoviesListItem/RecMoviesListItem';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import ReactRouterPropTypes from 'react-router-prop-types';

const RecMoviesList = ({ location }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const recMovies = useSelector(detailsSelectors.getRecommendedMovies);

  const list = useMemo(
    () =>
      recMovies.map(recMovie => (
        <RecMoviesListItem
          key={recMovie.id}
          title={recMovie.title}
          poster={recMovie.backdrop_path}
          id={recMovie.id}
          location={location}
        />
      )),
    [location, recMovies],
  );

  return (
    <>
      <br />
      <Slider {...settings}>{list}</Slider>
      {recMovies.length === 0 && <p>nothing to recommend</p>}
    </>
  );
};

RecMoviesList.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default RecMoviesList;
