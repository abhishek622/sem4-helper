import React, { useState } from 'react';
import { Container, Box, Grid, Typography, Divider } from '@material-ui/core';

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

  const handleSubmit = e => {
    e.preventDefault();
    setSol(countDer(value));
  };

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Controls.Input
          type="number"
          label="Enter Number"
          name="value"
          value={value}
          InputProps={{
            inputProps: {
              max: 20,
              min: 1,
            },
          }}
          onChange={e => setValue(e.target.value)}
          required
          fullWidth
        />

        <div className={classes.whiteSpace} />
        <Grid container spacing={1}>
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
          <b>Solution</b>: {sol}
        </Typography>
      </Box>
    </Container>
  );
}
