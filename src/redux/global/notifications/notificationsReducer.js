import notificationsTypes from './notificationsTypes';

const initialState = {
  message: undefined,
  variant: undefined,
};

const notificationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case notificationsTypes.ADD_NOTIFICATION:
      return { message: payload.message, variant: payload.variant };
    case notificationsTypes.REMOVE_NOTIFICATION:
      return { message: undefined, variant: undefined };
    default:
      return state;
  }
};

export default notificationReducer;
