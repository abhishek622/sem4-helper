import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '2rem',
    fontWeight: 500,
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
}));

export const Header = ({ subName }) => {
  const classes = useStyles();

  return (
    <div>
      <Typography align="center" color="secondary" className={classes.title}>
        {subName}
      </Typography>
      <br />
    </div>
  );
};
