import notificationsTypes from './notificationsTypes';

const addNotification = (message, variant) => {
  console.log(message, variant);
  return {
    type: notificationsTypes.ADD_NOTIFICATION,
    payload: {
      message,
      variant,
    },
  };
};

const removeNotification = () => {
  return {
    type: notificationsTypes.REMOVE_NOTIFICATION,
  };
};

export default { addNotification, removeNotification };
