import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { doBaseCon } from './coa-calc/BaseConvt';

const initialValues = {
  a: '',
  b: '',
  c: '',
};

export default function Converter() {
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
    setSol(doBaseCon(values.a, values.b, values.c));
  };

  return (
    <Container component="main">
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controls.Input
              type="text"
              label="Number"
              name="a"
              value={values.a}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              type="number"
              label="From Base"
              name="b"
              value={values.b}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              type="number"
              label="To Base"
              name="c"
              value={values.c}
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
