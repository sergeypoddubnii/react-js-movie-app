import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configStore from 'redux-mock-store';
import detailsMovieActions from './detailsMovieActions';
import detailsMovieReducer from './detailsMovieReducer';
import detailsMovieOperations from './detailsMovieOperations';
import detailsMovieTypes from './detailsMovieTypes';
import detailsMoviesSelectors from './detailsMovieSelectors';
import api from './../../services/api';

const middlewars = [thunk];
const mockStore = configStore(middlewars);
const store = mockStore({});
const mock = new MockAdapter(axios);

describe('detailsMovie', () => {
  beforeEach(() => {
    mock.reset();
    store.clearActions();
  });

  describe('detailsMovies actions', () => {
    it('should getMovieByIdSuccess create correct action', () => {
      const data = {};
      const expectData = {
        type: detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS,
        payload: {
          movie: {},
        },
      };
      expect(detailsMovieActions.getMovieByIdSuccess(data)).toEqual(expectData);
    });
    it('should getRecommendedMoviesSuccess create correct action', () => {
      const data = [];
      const expectData = {
        type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_SUCCESS,
        payload: {
          movies: [],
        },
      };
      expect(detailsMovieActions.getRecommendedMoviesSuccess(data)).toEqual(
        expectData,
      );
    });
  });

  describe('detailsMovies operations', () => {
    describe('getMovieById', () => {
      it('getMovieById should call dispatch getMovieByIdSuccess on success responce', () => {
        const id = '337401';
        const payload = { movie: 1 };
        const expectedActions = [
          {
            type: detailsMovieTypes.GET_MOVIE_BY_ID_START,
          },
          {
            type: detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS,
            payload: { movie: 1 },
          },
        ];

        mock.onGet(api.urlCreator.byId.getMovie(id)).reply(200, { payload });
        store
          .dispatch(detailsMovieOperations.getMovieById(id))
          .then(() => {
            const actions = store.getActions();
            expect(actions).toEqual(expectedActions);
          })
          .catch(() => {});
      });

      it('getMovieById should call dispatch getMovieByIdError on failure responce', () => {
        const id = '337401';
        const payload = 1;
        const expectedActions = [
          {
            type: detailsMovieTypes.GET_MOVIE_BY_ID_START,
          },
          {
            type: detailsMovieTypes.GET_MOVIE_BY_ID_ERROR,
            payload,
          },
        ];

        mock.onGet(api.urlCreator.byId.getMovie(id)).reply(500, { payload });
        store
          .dispatch(detailsMovieOperations.getMovieById(id))
          .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
          })
          .catch(() => {});
      });
    });

    describe('getRecommendedMovies', () => {
      it('getRecommendedMovies should call dispatch getRecommendedMovies on success responce', () => {
        const id = '337401';
        const payload = 1;
        mock
          .onGet(api.urlCreator.byId.getRecomendationMovies(id))
          .reply(200, { payload });

        store
          .dispatch(detailsMovieOperations.getRecommendedMovies(id))
          .then(() => {
            const expectedActions = [
              {
                type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_START,
              },
              {
                type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_SUCCESS,
              },
            ];
            expect(store.getActions()).toEqual(expectedActions);
          })
          .catch(err => err);
      });

      it('getRecommendedMovies should call dispatch getRecommendedMoviesError on failure responce', () => {
        const id = '337401';
        const payload = 1;

        mock
          .onGet(api.urlCreator.byId.getRecomendationMovies(id))
          .reply(500, { payload });
        store
          .dispatch(detailsMovieOperations.getRecommendedMovies(id))
          .then(() => {
            const expectedActions = [
              {
                type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_START,
              },
              {
                type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_ERROR,
                payload,
              },
            ];
            expect(store.getActions()).toEqual(expectedActions);
          })
          .catch(err => err);
      });
    });
  });
  describe('detailsMovies selectors', () => {
    it('getDetailsMovies should return movie', () => {
      const state = {
        detailsMovie: {
          detailsMovie: 'details movie',
        },
      };
      expect(detailsMoviesSelectors.getDetailsMovies(state)).toEqual(
        'details movie',
      );
    });
    it('getDetailsMovies should return movie', () => {
      const state = {
        detailsMovie: {
          recommendedMovies: 'recommended movies',
        },
      };
      expect(detailsMoviesSelectors.getRecommendedMovies(state)).toEqual(
        'recommended movies',
      );
    });
  });
  describe('detailsMovies reducer', () => {
    const initialState = { detailsMovie: {}, recommendedMovies: [] };
    const payload = { movie: { data: 'movie' }, movies: 'movies' };

    it('detailsMovieReducer GET_MOVIE_BY_ID_SUCCESS', () => {
      expect(
        detailsMovieReducer(initialState, {
          type: detailsMovieTypes.GET_MOVIE_BY_ID_SUCCESS,
          payload,
        }),
      ).toEqual({ detailsMovie: 'movie', recommendedMovies: [] });
    });

    it('detailsMovieReducer GET_RECOMMENDED_MOVIES_SUCCESS', () => {
      expect(
        detailsMovieReducer(initialState, {
          type: detailsMovieTypes.GET_RECOMMENDED_MOVIES_SUCCESS,
          payload,
        }),
      ).toEqual({ detailsMovie: {}, recommendedMovies: 'movies' });
    });

    it('detailsMovieReducer default', () => {
      expect(detailsMovieReducer(initialState, { payload })).toEqual(
        initialState,
      );
    });
  });
});
