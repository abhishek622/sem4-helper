import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculator } from './coa-calc/Arithmetic';

const radioBtn = [
  { id: 'plus', title: '+' },
  { id: 'minus', title: '-' },
];

const baseType = [
  { id: '1', title: 'BIN' },
  { id: '2', title: 'OCT' },
  { id: '3', title: 'HEX' },
  { id: '4', title: 'BCD' },
];

const initialValues = {
  a: '',
  b: '',
  optn: 'plus',
  baseId: '',
};

export default function Operations() {
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
    setSol(calculator(values.a, values.b, values.optn, values.baseId));
  };

  return (
    <Container component="main">
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="text"
              label="num1"
              name="a"
              value={values.a}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="text"
              label="num2"
              name="b"
              value={values.b}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.RadioGroup
              name="optn"
              label="Operation"
              value={values.optn}
              onChange={handleInputChange}
              items={radioBtn}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Select
              name="baseId"
              label="Base"
              value={values.baseId}
              onChange={handleInputChange}
              options={baseType}
              required
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
