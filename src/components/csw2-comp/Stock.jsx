import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './claculate-func/BuyAndSell';

export default function Stock() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [sol, setSol] = useState([]);

  const resetForm = () => {
    setValue('');
    setSol([]);
  };

  useEffect(() => {
    if (value !== '') {
      setSol(calculate(value));
    } else {
      setSol([]);
    }
  }, [value]);

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Controls.Input
        type="text"
        label="Enter the array"
        name="value"
        value={value}
        onChange={e => setValue(e.target.value)}
        required
        fullWidth
      />
      <div className={classes.whiteSpace} />
      <Controls.Button
        fullWidth
        color="default"
        onClick={resetForm}
        text="Clear"
      />
      <Box mt={1}>
        <Divider style={{ margin: '8px 0px' }} />
        <Typography variant="body1" gutterBottom>
          <b>First Sell</b>: {sol[0]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Second Sell</b>: {sol[1]}
        </Typography>
      </Box>
    </Container>
  );
}
