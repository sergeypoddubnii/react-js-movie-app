import React from 'react';
import StarRatings from 'react-star-ratings';
import PropTypes from 'prop-types';

const RatingsStars = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="orange"
      starDimension="20px"
      starSpacing="0px"
      numberOfStars={10}
      name="rating"
    />
  );
};

RatingsStars.propTypes = {
  rating: PropTypes.number,
};

export default RatingsStars;
