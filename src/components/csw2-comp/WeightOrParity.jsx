import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const calculate = a => {
  let value = parseFloat(a);
  let count = 0;
  let arr = [];
  arr.push(parseInt(value.toString(), 10).toString([2]));
  while (value !== 0) {
    if (value & 1) {
      count++;
    }

    value = value >>> 1;
  }
  if (count % 2 === 0) {
    arr.push(0);
  } else {
    arr.push(1);
  }
  arr.push(count);
  return arr;
};

export default function WeightOrParity() {
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
        type="number"
        label="Enter Decimal Number"
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
          <b>Binary Value:</b> {sol[0]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Weight:</b> {sol[2]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Parity:</b> {sol[1]}
        </Typography>
      </Box>
    </Container>
  );
}
