import { makeStyles } from '@material-ui/core';

import pic3 from '../images/pic3.svg';

export const useStyles = makeStyles(theme => ({
  root: {
    overflowY: 'hidden',
    height: '100vh',
    backgroundImage: `url(${pic3})`,
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '320px',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center bottom',
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
      backgroundColor: '#fc2f5f',
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
