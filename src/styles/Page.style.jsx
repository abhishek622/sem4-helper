import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  pageCenter: {
    [theme.breakpoints.up('lg')]: {
      margin: 'auto',
      width: '50%',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      margin: 'auto',
      width: '70%',
    },
  },
}));
