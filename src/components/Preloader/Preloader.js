import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    position: 'absolute',
  },
}));

const Preloader = ({ isLoading }) => {
  const classes = useStyles();
  return isLoading ? (
    <Box
      width="100%"
      height="100%"
      position="absolute"
      top="0"
      left="0"
      bgcolor="rgba(0,0,0,0.2)"
      zIndex="100"
    >
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </Box>
  ) : null;
};

Preloader.propTypes = {
  isLoading: PropTypes.bool,
};

export default Preloader;
