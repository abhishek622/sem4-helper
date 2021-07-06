import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  whiteSpace: {
    marginBottom: theme.spacing(2),
  },
  col: {
    alignItems: 'center',
  },
  btnGrp: {
    [theme.breakpoints.down('xs')]: {
      '& .MuiButton-root': {
        fontSize: '14px',
        padding: '4px 7px',
      },
    },
  },
}));
