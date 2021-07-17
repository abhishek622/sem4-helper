import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './adm-calculate-func/inversion';

export default function InversionSeq() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [sol, setSol] = useState('');

  const resetForm = () => {
    setValue('');
    setSol('');
  };

  useEffect(() => {
    if (value !== '') {
      setSol(calculate(value));
    } else {
      setSol('');
    }
  }, [value]);

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Controls.Input
        type="number"
        label="Enter Permutation"
        placeholder="1234"
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
          <b>Solution</b>: {sol}
        </Typography>
      </Box>
    </Container>
  );
}
