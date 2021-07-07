import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';

import Formula from '../general/Formula';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

export default function LittleLaw() {
  const classes = useStyles();
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.a =
      (!isNaN(parseFloat(a)) && isFinite(a)) || a === ''
        ? ''
        : 'L must be number';
    temp.b =
      (!isNaN(parseFloat(b)) && isFinite(b)) || b === ''
        ? ''
        : 'Lamda must be number';
    temp.c =
      (!isNaN(parseFloat(c)) && isFinite(c)) || c === ''
        ? ''
        : 'W must be number';

    setErrors({
      ...temp,
    });

    return Object.values(temp).every(x => x === '');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'a':
        setA(value);
        break;
      case 'b':
        setB(value);
        break;
      case 'c':
        setC(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setA('');
    setB('');
    setC('');
    setErrors({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      if (a === '') {
        setA((parseFloat(c) * parseFloat(b)).toFixed(3));
      } else if (b === '') {
        setB((parseFloat(a) / parseFloat(c)).toFixed(3));
      } else if (c === '') {
        setC((parseFloat(a) / parseFloat(b)).toFixed(3));
      }
    }
  };

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Formula tex={`L\\ =\\ \\lambda\\times W`} />
      </Box>
      <div className={classes.whiteSpace} />

      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="Item in queue (L)"
              name="a"
              value={a}
              onChange={handleInputChange}
              error={errors.a}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="Rate of item arriving (&lambda;)"
              name="b"
              value={b}
              error={errors.b}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="Waiting time (W)"
              name="c"
              value={c}
              error={errors.c}
              onChange={handleInputChange}
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
    </Container>
  );
}
