import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './RecMoviesListItem.scss';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

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
        title={title}
      />
    </NavLink>
  );
};

RecMoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  poster: PropTypes.string.isRequired,
};

export default RecMoviesListItem;
