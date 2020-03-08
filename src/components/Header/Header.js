import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Header = () => {
  return (
    <div>
      <NavLink to={routes.HOME_PAGE}>home</NavLink>
      <NavLink to={routes.FAVOTIRE_MOVIES_PAGE}>favorite</NavLink>
    </div>
  );
};

export default Header;
