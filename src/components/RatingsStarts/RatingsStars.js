import React from 'react';
import StarRatings from 'react-star-ratings';

function RatingsStars({ rating }) {
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
}

export default RatingsStars;
