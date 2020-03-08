import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const FavMoviesListItem = ({ title, id, location }) => {
  return (
    <NavLink
      to={{
        pathname: `${routes.DETAILS_PAGE}/${id}`,
        state: { from: location },
      }}
    >
      <li>
        <p>{title}</p>
      </li>
    </NavLink>
  );
};

export default FavMoviesListItem;
