import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  makeStyles,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiAccordionDetails-root': {
      backgroundColor: '#232323',
    },
    '& .MuiBox-root': {
      marginTop: 0,
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const AccordionLayout = props => {
  const { title, formSection } = props;
  const classes = useStyles();

  return (
    <Accordion className={classes.root}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{formSection}</AccordionDetails>
    </Accordion>
  );
};
