const notificationConstants = {
  variant: {
    info: 'Info',
    success: 'Success',
    error: 'Error',
  },
  message: {
    addedToFavorite(title) {
      return `${title} successfully added to favorite movies!`;
    },
    removedFromFavorite(title) {
      return `${title} removed from favorite movies!`;
    },
  },
};

export default notificationConstants;
