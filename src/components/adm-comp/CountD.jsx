import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const countDer = n => {
  parseInt(n);
  if (n < 1) return 'Invalid input';
  if (n === 1) return 0;
  if (n === 2) return 1;

  // countDer(n) = (n-1)[countDer(n-1) + der(n-2)]
  return (n - 1) * (countDer(n - 1) + countDer(n - 2));
};

export default function CountD() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [sol, setSol] = useState('');

  const resetForm = () => {
    setValue('');
    setSol('');
  };

  useEffect(() => {
    if (value !== '') {
      setSol(countDer(value));
    } else {
      setSol('');
    }
  }, [value]);

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Controls.Input
        type="number"
        label="Enter Number"
        name="value"
        value={value}
        min="1"
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
          <b>Solution</b>: {sol}
        </Typography>
      </Box>
    </Container>
  );
}
