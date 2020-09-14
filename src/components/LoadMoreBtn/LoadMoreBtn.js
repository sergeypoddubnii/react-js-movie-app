import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './LoadMoreBtn.scss';

function LoadMoreBtn({ handlerLoadMore }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handlerLoadMore}
      disableElevation
      size="large"
      fullWidth
    >
      Load more
    </Button>
  );
}

LoadMoreBtn.propTypes = {
  handlerLoadMore: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
