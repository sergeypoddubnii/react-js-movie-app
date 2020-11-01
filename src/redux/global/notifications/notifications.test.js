import notificationsActions from './notificationsActions';
import notificationsReducer from './notificationsReducer';
import notificationsSelectors from './notificationsSelectors';
import notificationsTypes from './notificationsTypes';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewars = [thunk];
const mockStore = configStore(middlewars);
const store = mockStore({});
const mock = new MockAdapter(axios);

describe('notifications', () => {
  beforeEach(() => {
    mock.reset();
    store.clearActions();
  });
  describe('notificationsActions', () => {
    it('addNotification should create correct action', () => {
      const expectedAction = {
        type: notificationsTypes.ADD_NOTIFICATION,
        payload: {
          message: 'message',
          variant: 'variant',
        },
      };
      expect(
        notificationsActions.addNotification('message', 'variant'),
      ).toEqual(expectedAction);
    });
    it('removeNotification should create correct action', () => {
      const expectedAction = {
        type: notificationsTypes.REMOVE_NOTIFICATION,
      };
      expect(notificationsActions.removeNotification()).toEqual(expectedAction);
    });
  });

  describe('notificationsSelectors', () => {
    const state = { notifications: { message: 'message', variant: 'variant' } };
    it('getMessageNotification should return message', () => {
      expect(notificationsSelectors.getMessageNotification(state)).toEqual(
        'message',
      );
    });
    it('getVariantNotification should return variant', () => {
      expect(notificationsSelectors.getVariantNotification(state)).toEqual(
        'variant',
      );
    });
  });
  describe('notificationsReducer', () => {
    const initialState = {
      message: undefined,
      variant: undefined,
    };

    it('notificationReducer should return correct state ADD_NOTIFICATION', () => {
      const action = {
        type: notificationsTypes.ADD_NOTIFICATION,
        payload: { message: 'message', variant: 'variant' },
      };
      expect(notificationsReducer(initialState, action)).toEqual({
        message: 'message',
        variant: 'variant',
      });
    });
    it('notificationReducer should return correct state ADD_NOTIFICATION', () => {
      const action = {
        type: notificationsTypes.REMOVE_NOTIFICATION,
      };
      expect(notificationsReducer(initialState, action)).toEqual({
        message: undefined,
        variant: undefined,
      });
    });
  });
});
