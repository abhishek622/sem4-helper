import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Formula from '../general/Formula';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const initialFValues = {
  c: '',
  i: '',
  g: '',
  nx: '',
};

const calculate = (w, x, y, z) => {
  let c = parseFloat(w);
  let i = parseFloat(x);
  let g = parseFloat(y);
  let nx = parseFloat(z);
  return (c + i + g + nx).toLocaleString('en-US', { maximumFractionDigits: 3 });
};

export default function Gdp() {
  const classes = useStyles();
  const [values, setValues] = useState(initialFValues);
  const [sol, setSol] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setSol('');
  };

  useEffect(() => {
    if (
      values.c !== '' &&
      values.i !== '' &&
      values.g !== '' &&
      values.nx !== ''
    ) {
      setSol(calculate(values.c, values.i, values.g, values.nx));
    } else {
      setSol('');
    }
  }, [values]);

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Formula tex={`GDP\\ =\\ C+I+G+NX`} />
      </Box>
      <div className={classes.whiteSpace} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Consumption (C)"
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
            label="Investment (I)"
            name="i"
            value={values.i}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Government Purchases (G)"
            name="g"
            value={values.g}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Net Exports (NX)"
            name="nx"
            value={values.nx}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
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
