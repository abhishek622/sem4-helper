import { makeStyles } from '@material-ui/core';

import dp4 from '../images/dp4.png';
import dp5 from '../images/dp5.png';

export const useStyles = makeStyles(theme => ({
    root: {
      overflowY: 'hidden',
      height: '100vh',
      backgroundImage: `url(${dp5})`,
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '380px',
      [theme.breakpoints.down('xs')]: {
        backgroundSize: '150px',
      },
    },
    bg_right: {
      overflowY: 'hidden',
      height: '100vh',
      backgroundImage: `url(${dp4})`,
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '400px',
      [theme.breakpoints.down('xs')]: {
        backgroundSize: '150px',
      },
    },
    head: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },
    },
    subject: {
      margin: '0 auto',
      '& :hover': {
        background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        boxShadow: '0 3px 5px 2px rgba(255, 167, 38, .2)',
      },
      maxWidth: '30rem',
      [theme.breakpoints.down('xs')]: {
        width: '20rem',
        '& .MuiTypography-h6': {
          fontSize: '1rem',
        },
      },
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(2),
    },
  }));