import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Formula from '../general/Formula';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './adm-calculate-func/bt';

const initialValues = {
  a: '',
  b: '',
  c: '',
};

export default function BinomialTheorem() {
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
        <Typography variant="h6">Formula</Typography>
        <Formula
          tex={`\\left(x+y\\right)^{n}=C^{n}_{0}y^{0}+C^{n}_{1}x^{n-1}y^{1}+....+C^{n}_{n}x^{0}y^{n}`}
        />
      </Box>
      <div className={classes.whiteSpace} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Controls.Input
            type="number"
            label="x"
            name="a"
            value={values.a}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controls.Input
            type="number"
            label="y"
            name="b"
            value={values.b}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controls.Input
            type="number"
            label="n"
            name="c"
            value={values.c}
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
          <b>Output</b>: {sol}
        </Typography>
      </Box>
    </Container>
  );
}
