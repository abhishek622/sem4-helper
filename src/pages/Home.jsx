import React from 'react';
import { Paper, Link as MuiLink } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Typography } from '@material-ui/core';
import { useStyles } from '../styles/Home.style';

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg_right}>
        <div className={classes.head}>
          <Typography
            variant="subtitle2"
            gutterBottom
            align="center"
            color="secondary"
          >
            Semster 4
          </Typography>
          <Typography variant="h4" align="center" gutterBottom>
            End <s style={{ fontWeight: 300 }}>Game</s> Sem
          </Typography>
        </div>
        <div className={classes.subject}>
          <MuiLink
            component={RouteLink}
            to="/adm"
            underline="none"
            color="inherit"
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">
                Advanced Discrete Mathematics
              </Typography>
              <ChevronRightIcon />
            </Paper>
          </MuiLink>

          <MuiLink
            component={RouteLink}
            to="/coa"
            underline="none"
            color="inherit"
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">
                Computer Organization and Architecture
              </Typography>
              <ChevronRightIcon />
            </Paper>
          </MuiLink>

          <MuiLink
            component={RouteLink}
            to="/ad1"
            underline="none"
            color="inherit"
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">Algorithms Design - 1</Typography>
              <ChevronRightIcon />
            </Paper>
          </MuiLink>

          <MuiLink
            component={RouteLink}
            to="/pme"
            underline="none"
            color="inherit"
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">Principles of Macroeconomics</Typography>
              <ChevronRightIcon />
            </Paper>
          </MuiLink>

          <MuiLink
            component={RouteLink}
            to="/csw2"
            underline="none"
            color="inherit"
          >
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6">
                Computer Science Workshop - 2
              </Typography>
              <ChevronRightIcon />
            </Paper>
          </MuiLink>
        </div>
      </div>
    </div>
  );
};
