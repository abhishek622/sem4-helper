import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Formula from '../general/Formula';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const initialValues = {
  a: '',
  b: '',
  c: '',
  d: '',
  e: '',
};

export default function TtoT() {
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

  useEffect(() => {
    if (
      values.a !== '' &&
      values.b !== '' &&
      values.c !== '' &&
      values.d !== '' &&
      values.e !== ''
    ) {
      setSol(
        (
          parseFloat(values.a) *
          (parseFloat(values.b) + parseFloat(values.c) * parseFloat(values.d)) *
          parseFloat(values.e)
        ).toFixed(4)
      );
    } else {
      setSol('');
    }
  }, [values]);

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Formula
          tex={`T\\ =\\ I_{c}\\times \\left[p+\\left(m\\times k\\right)\\right]\\times \\tau`}
        />
      </Box>
      <div className={classes.whiteSpace} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Ic"
            name="a"
            value={values.a}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="processor cycles (p)"
            name="b"
            value={values.b}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="memory references (m)"
            name="c"
            value={values.c}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Ratio (k)"
            name="d"
            value={values.d}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="&#120591;"
            name="e"
            value={values.e}
            onChange={handleInputChange}
            required
            fullWidth
          />
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

      <Box mt={1}>
        <Divider style={{ margin: '8px 0px' }} />
        <Typography variant="body1" gutterBottom>
          <b>Solution</b>: {sol}
        </Typography>
      </Box>
    </Container>
  );
}
