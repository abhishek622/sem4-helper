import React, { useState } from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';

import Formula from '../general/Formula';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const calculateA = (x, y, z) => {
  let i = parseFloat(x);
  let n = parseFloat(y);
  let f = parseFloat(z);
  var a = f * (i / 100 / (Math.pow(1 + i / 100, n) - 1));
  return a.toLocaleString('en-US', { maximumFractionDigits: 4 });
};
const calculateF = (x, y, z) => {
  let i = parseFloat(x);
  let n = parseFloat(y);
  let a = parseFloat(z);
  var f = a * ((Math.pow(1 + i / 100, n) - 1) / (i / 100));
  return f.toLocaleString('en-US', { maximumFractionDigits: 4 });
};

export default function ForA() {
  const classes = useStyles();
  const [f, setF] = useState('');
  const [i, setI] = useState('');
  const [n, setN] = useState('');
  const [a, setA] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.f =
      (!isNaN(parseFloat(f)) && isFinite(f)) || f === ''
        ? ''
        : 'F must be number';
    temp.i = i >= 0 ? '' : 'i must be at least 0';
    temp.n = n >= 0 ? '' : 'n must be at least 0';
    temp.a =
      (!isNaN(parseFloat(a)) && isFinite(a)) || a === ''
        ? ''
        : 'A must be number';

    setErrors({
      ...temp,
    });

    return Object.values(temp).every(x => x === '');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'f':
        setF(value);
        break;
      case 'i':
        setI(value);
        break;
      case 'n':
        setN(value);
        break;
      case 'a':
        setA(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setF('');
    setI('');
    setN('');
    setA('');
    setErrors({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      if (f === '') {
        setF(calculateF(i, n, a));
      } else if (a === '') {
        setA(calculateA(i, n, f));
      }
    }
  };

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Formula tex={`F=A\\left[\\left(1+i\\right)^{N}-1\\ /\\ i\\right]`} />
      </Box>
      <div className={classes.whiteSpace} />

      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="text"
              label="Future Value (F)"
              name="f"
              value={f}
              error={errors.f}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="Interest %age (i)"
              name="i"
              value={i}
              error={errors.i}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="Years (N)"
              name="n"
              value={n}
              error={errors.n}
              onChange={handleInputChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="text"
              label="Annual Value (A)"
              name="a"
              value={a}
              error={errors.a}
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
};
