import React from 'react';
import Button from '@material-ui/core/Button';
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

export default LoadMoreBtn;
