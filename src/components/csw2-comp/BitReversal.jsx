import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './claculate-func/BitRevrs';

export default function BitReversal() {
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
        <Typography variant="subtitle2" color="primary" gutterBottom>
          After reversing
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Decimal Value:</b> {sol[1]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Binary Value:</b> {sol[2]}
        </Typography>
      </Box>
    </Container>
  );
}
