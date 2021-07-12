import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import { calculate } from './adm-calculate-func/coefficient';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const initialValues = {
  a: '',
  b: '',
  c: '',
};

export default function Coeff() {
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
    if (values.a !== '' && values.b !== '' && values.c !== '') {
      setSol(calculate(values.a, values.b, values.c));
    } else {
      setSol('');
    }
  }, [values]);

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Example</Typography>
        <Typography variant="caption" display="block" gutterBottom>
          &#40;2x<sub>1</sub> - 3x<sub>2</sub> + 5x<sub>3</sub>&#41;<sup>6</sup>
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Coefficient of Expansion = 2,-3,5
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Power of Expansion = 6
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          x<sub>1</sub>
          <sup>3</sup>x<sub>2</sub>x<sub>3</sub>
          <sup>2</sup>
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          Coefficient of eq = 3,1,2
        </Typography>
      </Box>
      <div className={classes.whiteSpace} />

      <Grid container spacing={2}>
        <Grid item sm={8} xs={12}>
          <Controls.Input
            type="text"
            label="Coefficient of Expansion"
            name="a"
            value={values.a}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Controls.Input
            type="number"
            label="Power of Expansion"
            name="b"
            value={values.b}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="text"
            label="Coefficient of eq"
            name="c"
            value={values.c}
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
