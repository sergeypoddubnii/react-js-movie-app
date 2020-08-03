import { combineReducers } from 'redux';
import moviesReducer from '../redux/movies/moviesReducers';
import favMoviesReducer from '../redux/favMovies/favMoviesReducer';
import detailsMovieReducer from '../redux/detailsMovie/detailsMovieReducer';
import preloaderReducer from '../redux/global/preloader/preloaderReducer';
import notificationReducer from '../redux/global/notifications/notificationsReducer';

const rootReducer = combineReducers({
  favMovies: favMoviesReducer,
  movies: moviesReducer,
  detailsMovie: detailsMovieReducer,
  preloader: preloaderReducer,
  notifications: notificationReducer,
});

export default rootReducer;
