import moviesActions from './moviesActions';
import moviesOperations from './moviesOperations';
import moviesReducers from './moviesReducers';
import moviesSelectors from './moviesSelectors';
import moviesTypes from './moviesTypes';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import api from '../../services/api';

const middlewars = [thunk];
const mockStore = configStore(middlewars);
const store = mockStore({});
const mock = new MockAdapter(axios);

describe('movies', () => {
  beforeEach(() => {
    store.clearActions();
    mock.reset();
  });
  describe('moviesActions', () => {
    describe('moviesActions popular movies', () => {
      it('getPopularMoviesStart should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_START,
        };
        expect(moviesActions.getPopularMoviesStart()).toEqual(expectedAction);
      });

      it('getPopularMoviesSuccess should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_POPULAR_MOVIES_SUCCESS,
          payload: {
            movies: 1,
          },
        };
        expect(moviesActions.getPopularMoviesSuccess(1)).toEqual(
          expectedAction,
        );
      });

      it('getPopularMoviesError should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_POPULAR_MOVIES_ERROR,
          payload: {
            err: 1,
          },
        };
        expect(moviesActions.getPopularMoviesError(1)).toEqual(expectedAction);
      });
    });

    describe('moviesActions by query movies', () => {
      it('getMoviesByQueryStart should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_BY_QUERY_START,
        };
        expect(moviesActions.getMoviesByQueryStart()).toEqual(expectedAction);
      });

      it('getPopularMoviesStart should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS,
          payload: {
            movies: 1,
          },
        };
        expect(moviesActions.getMoviesByQuerySuccess(1)).toEqual(
          expectedAction,
        );
      });

      it('getMoviesByQueryError should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_BY_QUERY_ERROR,
          payload: {
            err: 1,
          },
        };
        expect(moviesActions.getMoviesByQueryError(1)).toEqual(expectedAction);
      });
    });

    describe('moviesActions popular with pagination', () => {
      it('getPopularMoviesWithPaginationStart should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_START,
        };
        expect(moviesActions.getPopularMoviesWithPaginationStart()).toEqual(
          expectedAction,
        );
      });

      it('getPopularMoviesWithPaginationSuccess should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS,
          payload: {
            movies: 1,
          },
        };
        expect(moviesActions.getPopularMoviesWithPaginationSuccess(1)).toEqual(
          expectedAction,
        );
      });

      it('getPopularMoviesWithPaginationError should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_ERROR,
        };
        expect(moviesActions.getPopularMoviesWithPaginationError()).toEqual(
          expectedAction,
        );
      });
    });
    describe('moviesActions by query with pagination', () => {
      it('getPopularMoviesWithPaginationStart should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_START,
        };
        expect(moviesActions.getMoviesByQueryPaginationStart()).toEqual(
          expectedAction,
        );
      });

      it('getPopularMoviesWithPaginationSuccess should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS,
          payload: {
            movies: 1,
          },
        };
        expect(moviesActions.getPopularMoviesWithPaginationSuccess(1)).toEqual(
          expectedAction,
        );
      });

      it('getMoviesByQueryPaginationError should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_ERROR,
        };
        expect(moviesActions.getMoviesByQueryPaginationError()).toEqual(
          expectedAction,
        );
      });
    });

    describe('moviesActions genres', () => {
      it('getAllGenresStart should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_ALL_GENRES_START,
        };
        expect(moviesActions.getAllGenresStart()).toEqual(expectedAction);
      });

      it('getAllGenresSuccess should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_ALL_GENRES_SUCCESS,
          payload: {
            genres: 1,
          },
        };
        expect(moviesActions.getAllGenresSuccess(1)).toEqual(expectedAction);
      });

      it('getMoviesByQueryPaginationError should create correct action', () => {
        const expectedAction = {
          type: moviesTypes.GET_ALL_GENRES_ERROR,
        };
        expect(moviesActions.getAllGenresError()).toEqual(expectedAction);
      });
    });
  });

  describe('moviesSelectors', () => {
    const state = { movies: { movies: 'movies', genres: 'genres' } };
    it('getMovies should return movies', () => {
      expect(moviesSelectors.getMovies(state)).toEqual('movies');
    });
    it(' getGenres should  return genres', () => {
      expect(moviesSelectors.getGenres(state)).toEqual('genres');
    });
  });

  describe('moviesReducers', () => {
    describe('moviesReducer', () => {
      describe('get movies success', () => {
        const initialState = {
          movies: [],
          genres: [],
        };
        const expectedState = {
          movies: ['batman', 'superman'],
          genres: [],
        };
        it('GET_POPULAR_MOVIES_SUCCESS', () => {
          const action = {
            type: moviesTypes.GET_POPULAR_MOVIES_SUCCESS,
            payload: {
              movies: ['batman', 'superman'],
            },
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });

        it('GET_MOVIES_BY_QUERY_SUCCESS', () => {
          const action = {
            type: moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS,
            payload: {
              movies: ['batman', 'superman'],
            },
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });
      });
      describe('get movies with pagination success', () => {
        const initialState = {
          movies: ['batman', 'superman'],
          genres: [],
        };
        const expectedState = {
          movies: ['batman', 'superman', 'forest gump'],
          genres: [],
        };
        it('GET_MOVIES_POPULAR_PAGINATION_SUCCESS', () => {
          const action = {
            type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS,
            payload: {
              movies: ['forest gump'],
            },
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });

        it('GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS', () => {
          const action = {
            type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS,
            payload: {
              movies: ['forest gump'],
            },
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });
      });
      describe('get movies error', () => {
        const initialState = {
          movies: ['batman', 'superman'],
          genres: [],
        };
        const expectedState = {
          movies: [],
          genres: [],
        };
        it('GET_POPULAR_MOVIES_ERROR', () => {
          const action = {
            type: moviesTypes.GET_POPULAR_MOVIES_ERROR,
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });
        it('GET_MOVIES_POPULAR_PAGINATION_ERROR', () => {
          const action = {
            type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_ERROR,
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });
        it('GET_MOVIES_BY_QUERY_ERROR', () => {
          const action = {
            type: moviesTypes.GET_MOVIES_BY_QUERY_ERROR,
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });
        it('GET_MOVIES_BY_QUERY_PAGINATION_ERROR', () => {
          const action = {
            type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_ERROR,
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });
      });
      describe('get genres', () => {
        const initialState = {
          movies: [],
          genres: [],
        };
        const expectedState = {
          movies: [],
          genres: [1, 2, 3],
        };
        it('GET_ALL_GENRES_SUCCESS', () => {
          const action = {
            type: moviesTypes.GET_ALL_GENRES_SUCCESS,
            payload: { genres: [1, 2, 3] },
          };
          expect(moviesReducers(initialState, action)).toEqual(expectedState);
        });
      });
    });
  });
});
