import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './adm-calculate-func/divs';

const initialValues = {
  a: '',
  b: '',
};

export default function Division() {
  const classes = useStyles();
  const [values, setValues] = useState(initialValues);
  const [sol, setSol] = useState([]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.b = values.b === 0 ? '' : 'Divisor must not be zero';

    setErrors({
      ...temp,
    });

    return Object.values(temp).every(x => x === '');
  };

  useEffect(() => {
    if (values.a !== '' && values.b !== '' && values.b !== 0) {
      setSol(calculate(values.a, values.b));
    } else {
      setSol([]);
    }
  }, [values]);

  const resetForm = () => {
    setValues(initialValues);
    setSol([]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      setSol(calculate(values.a, values.b));
    }
  };

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Typography variant="subtitle2">
          Dividend = Divisor x Quotient + Remainder
        </Typography>
      </Box>
      <div className={classes.whiteSpace} />
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="Dividend"
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
              label="Divisor"
              name="b"
              value={values.b}
              error={errors.b}
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
          <b>Quotient</b>: {sol[0]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Remainder</b>: {sol[1]}
        </Typography>
      </Box>
    </Container>
  );
}
