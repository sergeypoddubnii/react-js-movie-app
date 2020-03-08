import { combineReducers } from 'redux';
import moviesReducer from '../redux/movies/moviesReducers';
import favMoviesReducer from '../redux/favMovies/favMoviesReducer';
import detailsMovieReducer from '../redux/detailsMovie/detailsMovieReducer';

const rootReducer = combineReducers({
  favMovies: favMoviesReducer,
  movies: moviesReducer,
  detailsMovie: detailsMovieReducer,
});

export default rootReducer;
