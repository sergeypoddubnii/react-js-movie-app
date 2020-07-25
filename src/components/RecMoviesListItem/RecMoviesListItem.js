import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './RecMoviesListItem.scss';

const RecMoviesListItem = ({ title, id, location, poster }) => {
  return (
    <NavLink
      className="recMovie"
      to={{
        pathname: `${routes.DETAILS_PAGE}/${id}`,
        state: { from: location },
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={title}
        className="recMovie__img"
      />
    </NavLink>
  );
};

export default RecMoviesListItem;
