import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Navbar } from './Navbar';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

export const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {children}
      </main>
    </>
  );
};
