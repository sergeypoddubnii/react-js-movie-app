import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import FavoriteMoviesPage from '../../pages/FavoriteMoviesPage/FavoriteMoviesPage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import Header from '../Header/Header';
import routes from '../../routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path={routes.HOME_PAGE} component={HomePage} />
            <Route path={routes.FAVOTIRE_MOVIES_PAGE} component={FavoriteMoviesPage} />
            <Route path={routes.DETAILS_PAGE} component={DetailsPage} />
            <Redirect to={routes.HOME_PAGE} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
