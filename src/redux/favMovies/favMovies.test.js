import axios from 'axios';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import configStore from 'redux-mock-store';
import api from './../../services/api';
import favMoviesActions from './favMoviesActions';
import favMoviesOperations from './favMoviesOperations';
import favMoviesReducer from './favMoviesReducer';
import favMoviesTypes from './favMoviesTypes';
import favMoviesSelectors from './favMoviesSelectors';

const middlewars = [thunk];
const mockStore = configStore(middlewars);
const store = mockStore({});
const mock = new MockAdapter(axios);

describe('favMovies', () => {
  describe('favMovies Actions', () => {
    it(' addToFavMoviesStart should create correct action', () => {
      const expectedAction = {
        type: favMoviesTypes.ADD_TO_FAV_MOVIES_START,
      };
      expect(favMoviesActions.addToFavMoviesStart()).toEqual(expectedAction);
    });

    it('addToFavMoviesSuccess should create correct action', () => {
      const expectedAction = {
        type: favMoviesTypes.ADD_TO_FAV_MOVIES_SUCCESS,
        payload: {
          movie: 'movie',
          id: 'id',
        },
      };
      expect(favMoviesActions.addToFavMoviesSuccess('movie', 'id')).toEqual(
        expectedAction,
      );
    });

    it('addToFavMoviesError should  create correct action', () => {
      const expectedAction = {
        type: favMoviesTypes.ADD_TO_FAV_MOVIES_ERROR,
      };
      expect(favMoviesActions.addToFavMoviesError()).toEqual(expectedAction);
    });

    it('deleteFavMovie should create correct action ', () => {
      const expectedAction = {
        type: favMoviesTypes.REMOVE_FROM_FAV_MOVIES,
        payload: {
          id: 'id',
        },
      };
      expect(favMoviesActions.deleteFavMovie('id')).toEqual(expectedAction);
    });
  });

  describe('favMovies Selectors', () => {
    it('getFavMovies should return favMovies Array', () => {
      const state = {
        favMovies: 'favMovies',
      };
      expect(favMoviesSelectors.getFavMovies(state)).toEqual('favMovies');
    });
  });

  describe('favMovies Reducer', () => {
    const initialState = [
      { title: 'Batman', id: 1 },
      { title: 'Forest Gump', id: 2 },
      { title: 'IronMan', id: 3 },
    ];

    it('type ADD_TO_FAV_MOVIES_SUCCESS', () => {
      const action = {
        type: favMoviesTypes.ADD_TO_FAV_MOVIES_SUCCESS,
        payload: { id: 4, movie: { title: 'Superman', id: 4 } },
      };
      const expectedState = [
        { title: 'Batman', id: 1 },
        { title: 'Forest Gump', id: 2 },
        { title: 'IronMan', id: 3 },
        { title: 'Superman', id: 4 },
      ];
      expect(favMoviesReducer(initialState, action)).toEqual(expectedState);
    });

    it('type REMOVE_FROM_FAV_MOVIES ', () => {
      const initialState = [{ title: 'Batman', data: { id: 1 } }];

      const action = {
        type: favMoviesTypes.REMOVE_FROM_FAV_MOVIES,
        payload: { id: 1 },
      };

      expect(favMoviesReducer(initialState, action)).toEqual([]);
    });

    it('default', () => {
      const expectedState = [
        { title: 'Batman', id: 1 },
        { title: 'Forest Gump', id: 2 },
        { title: 'IronMan', id: 3 },
      ];
      const payload = { id: 2 };
      expect(favMoviesReducer(initialState, { payload })).toEqual(
        expectedState,
      );
    });
  });

  describe('favMovies operations', () => {
    it('addToFavMovies should call correct actions', () => {
      const id = '337401';
      const payload = 1;
      const expectedActions = [
        {
          type: favMoviesTypes.ADD_TO_FAV_MOVIES_START,
        },
        {
          type: favMoviesTypes.ADD_TO_FAV_MOVIES_SUCCESS,
          payload: {
            movie: payload,
            id,
          },
        },
      ];
      mock.onGet(api.urlCreator.byId.getMovie(id)).reply(200, { payload });
      store.dispatch(favMoviesOperations.addToFavMovies(id)).then(() => {
        const actions = store.actions();
        expect(actions).toEqual(expectedActions);
      });
    });
  });
});
