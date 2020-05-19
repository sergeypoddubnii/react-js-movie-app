import { combineReducers } from 'redux';
import moviesReducer from '../redux/movies/moviesReducers';
import favMoviesReducer from '../redux/favMovies/favMoviesReducer';
import detailsMovieReducer from '../redux/detailsMovie/detailsMovieReducer';
import preloaderReducer from '../redux/global/preloader/preloaderReducer';

const rootReducer = combineReducers({
  favMovies: favMoviesReducer,
  movies: moviesReducer,
  detailsMovie: detailsMovieReducer,
  preloader: preloaderReducer,
});

export default rootReducer;
