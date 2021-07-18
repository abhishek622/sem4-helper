import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './adm-calculate-func/cMultiset';

const initialValues = {
  a: '',
  b: '',
};

export default function Multiset() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [sol, setSol] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialValues);
    setSol('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSol(calculate(values.a, values.b));
  };

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controls.Input
              type="number"
              label="No of Combination"
              placeholder="10"
              name="a"
              value={values.a}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Controls.Input
              type="text"
              label="Enter Sequence"
              placeholder="1,2,3,4"
              helperText="min = 2, max = 4 no."
              name="b"
              value={values.b}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
        </Grid>
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
