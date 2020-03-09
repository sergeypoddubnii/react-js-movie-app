import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Header.scss';
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to={routes.HOME_PAGE} className="nav__link">
              home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={routes.FAVOTIRE_MOVIES_PAGE} className="nav__link">
              favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
