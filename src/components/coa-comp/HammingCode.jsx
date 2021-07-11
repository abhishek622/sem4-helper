import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './coa-calc/HamCode';

export default function HammingCode() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [sol, setSol] = useState('');

  const resetForm = () => {
    setValue('');
    setSol('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSol(calculate(value));
    //   console.log(calculate(value));
  };

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Controls.Input
              type="number"
              label="Enter digits"
              name="value"
              value={value}
              onChange={e => setValue(e.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Button fullWidth type="submit" text="Calculate" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Button
              fullWidth
              color="default"
              onClick={resetForm}
              text="Clear"
            />
          </Grid>
        </Grid>
      </form>
      <Box mt={1}>
        <Divider style={{ margin: '8px 0px' }} />
        <Typography variant="body1" gutterBottom>
          <b>Output: </b>
        </Typography>
        <Typography variant="body1" gutterBottom>
          {sol}
        </Typography>
      </Box>
    </Container>
  );
}
