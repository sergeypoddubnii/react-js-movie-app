const notificationConstants = {
  variant: {
    info: 'Info',
    success: 'Success',
    error: 'Error',
  },
  message: {
    addedToFavorite(title) {
      return `${title} successfully added to favorit movies!`;
    },
    removedFromFavorite(title) {
      return `${title} removed from favorit movies!`;
    },
  },
};

export default notificationConstants;
