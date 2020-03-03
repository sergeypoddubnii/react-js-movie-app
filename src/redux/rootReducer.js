import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import moviesReducer from '../redux/movies/moviesReducers';
import favMoviesReducer from '../redux/favMovies/favMoviesReducer';

const moviesPersistConfig = {
  key: 'favMovies',
  storage,
};

const rootReducer = combineReducers({
  favMovies: persistReducer(moviesPersistConfig, favMoviesReducer),
  movies: moviesReducer,
});

export default rootReducer;
