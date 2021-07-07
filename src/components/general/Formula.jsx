import { makeStyles } from '@material-ui/core';
import React from 'react';
import MathJax from 'react-mathjax';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      maxWidth: 290,
      overflowY: 'hidden',
      fontSize: '0.74rem',
    },
    fontSize: '1rem',
    padding: '0px 2px 6px 2px',
  },
}));

function Formula(props) {
  const classes = useStyles();

  return (
    <MathJax.Provider>
      <div className={classes.root}>
        <MathJax.Node inline formula={props.tex} />
      </div>
    </MathJax.Provider>
  );
}

export default Formula;
