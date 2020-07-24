import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const RecMoviesListItem = ({ title, id, location, poster }) => {
  return (
    <NavLink
      to={{
        pathname: `${routes.DETAILS_PAGE}/${id}`,
        state: { from: location },
      }}
    >
      <img src={`https://image.tmdb.org/t/p/w400${poster}`} alt={title} />
    </NavLink>
  );
};

export default RecMoviesListItem;
