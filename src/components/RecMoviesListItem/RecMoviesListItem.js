import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const RecMoviesListItem = ({ title, id, location }) => {
  return (
    <NavLink
      to={{
        pathname: `${routes.DETAILS_PAGE}/${id}`,
        state: { from: location },
      }}
    >
      <h3>{title}</h3>
    </NavLink>
  );
};

export default RecMoviesListItem;
