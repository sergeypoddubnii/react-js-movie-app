import preloaderReducer from './preloaderReducer';
import preloaderSelector from './preloaderSelectors';
import moviesTypes from '../../movies/moviesTypes';

describe('preloader', () => {
  describe('preloaderReducer', () => {
    describe('add true to isLoading', () => {
      const initialState = {
        isLoading: false,
      };
      it('GET_MOVIES_BY_QUERY_PAGINATION_START should add true to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_START,
          }),
        ).toEqual({ isLoading: true });
      });
      it('GET_MOVIES_POPULAR_PAGINATION_START should add true to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_START,
          }),
        ).toEqual({ isLoading: true });
      });
      it('GET_POPULAR_MOVIES_START should add true to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_POPULAR_MOVIES_START,
          }),
        ).toEqual({ isLoading: true });
      });
      it('GET_MOVIES_BY_QUERY_START should add true to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_BY_QUERY_START,
          }),
        ).toEqual({ isLoading: true });
      });
    });
    describe('add false to isLoading', () => {
      const initialState = {
        isLoading: true,
      };
      it('GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_SUCCESS,
          }),
        ).toEqual({ isLoading: false });
      });
      it('GET_MOVIES_POPULAR_PAGINATION_SUCCESS should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_SUCCESS,
          }),
        ).toEqual({ isLoading: false });
      });
      it('GET_POPULAR_MOVIES_SUCCESS should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_POPULAR_MOVIES_SUCCESS,
          }),
        ).toEqual({ isLoading: false });
      });
      it('GET_MOVIES_BY_QUERY_SUCCESS should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_BY_QUERY_SUCCESS,
          }),
        ).toEqual({ isLoading: false });
      });
      it('GET_MOVIES_BY_QUERY_PAGINATION_ERROR should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_BY_QUERY_PAGINATION_ERROR,
          }),
        ).toEqual({ isLoading: false });
      });
      it('GET_MOVIES_POPULAR_PAGINATION_ERROR should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_POPULAR_PAGINATION_ERROR,
          }),
        ).toEqual({ isLoading: false });
      });
      it('GET_POPULAR_MOVIES_ERROR should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_POPULAR_MOVIES_ERROR,
          }),
        ).toEqual({ isLoading: false });
      });
      it('GET_MOVIES_BY_QUERY_ERROR should add false to isLoading', () => {
        expect(
          preloaderReducer(initialState, {
            type: moviesTypes.GET_MOVIES_BY_QUERY_ERROR,
          }),
        ).toEqual({ isLoading: false });
      });
    });
  });
  describe('preloaderSelector', () => {
    const state = {
      preloader: {
        isLoading: false,
      },
    };
    it('preloaderSelector should get isLoading', () => {
      expect(preloaderSelector(state)).toEqual(false);
    });
  });
});
