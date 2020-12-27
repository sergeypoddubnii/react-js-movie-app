import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from '../../pages/HomePage/HomePage';
import FavoriteMoviesPage from '../../pages/FavMoviesPage/FavMoviesPage';
import DetailsPage from '../../pages/DetailsPage/DetailsPage';
import Header from '../Header/Header';
import routes from '../../routes';
import Preloader from '../../components/Preloader/Preloader';
import getIsLoading from '../../redux/global/preloader/preloaderSelectors';
import useNotifications from '../../hooks/useNotifications';

const App = () => {
  const isLoading = useSelector(state => getIsLoading(state));
  useNotifications();
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Preloader isLoading={isLoading} />
          <Switch>
            <Route exact path={routes.HOME_PAGE} component={HomePage} />
            <Route
              path={routes.FAVOTIRE_MOVIES_PAGE}
              component={FavoriteMoviesPage}
            />
            <Route
              path={`${routes.DETAILS_PAGE}/:movieId`}
              component={DetailsPage}
            />
            <Redirect to={routes.HOME_PAGE} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
