import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Formula from '../general/Formula';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

// Returns a natural TeX string for the polylogarithmic expression (n^k log^i n).
function formatPolyLog(k, i) {
  // Process n^k
  var result = null;
  if (typeof k === 'number') {
    if (k === 0 && i !== 0) result = '';
    else if (k === 0 && i === 0) result = '1';
    else if (k === 0.5) result = '\\sqrt{n}';
    else if (k === 1) result = 'n';
    else k = k.toString();
  }
  if (result !== null);
  else if (typeof k === 'string') result = 'n^{' + k + '}';
  else throw new Error('Invalid argument');

  // Process log^i n
  if (i !== 0) {
    if (result !== '') result += ' ';
    result += '\\log';
    if (i !== 1) result += '^{' + i + '}';
    result += ' n';
  }

  return result;
}

function floatEquals(x, y) {
  return Math.abs(x - y) < 1e-9;
}

const initialFValues = {
  a: '',
  b: '',
  k: '',
  i: 0,
};

export default function MasterTheorem() {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialFValues);
  const [sol, setSol] = useState('');
  const [exp, setExp] = useState('');

  const validate = () => {
    let temp = {};
    temp.a = parseFloat(values.a) >= 0 ? '' : 'a must be non-negative';
    temp.b = parseFloat(values.b) > 1 ? '' : 'b must be greater than 1';
    temp.k = parseFloat(values.k) >= 0 ? '' : 'k must be at least 0';
    temp.i = parseFloat(values.i) >= 0 ? '' : 'i must be at least 0';

    setErrors({
      ...temp,
    });

    return Object.values(temp).every(x => x === '');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
    setExp('');
    setSol('');
  };

  const print = (p, q, r, s) => {
    var a = parseFloat(p);
    var b = parseFloat(q);
    var k = parseFloat(r);
    var i = parseFloat(s);

    return (
      'T(n)  =  ' +
      (a !== 1 ? a : '') +
      ' T(n' +
      (b !== 1 ? ' / ' + b : '') +
      ') +  \u0398(' +
      formatPolyLog(k, i) +
      ')'
    );
  };

  const calculate = (l, m, n, o) => {
    var a = parseFloat(l);
    var b = parseFloat(m);
    var k = parseFloat(n);
    var i = parseFloat(o);

    var p = Math.log(a) / Math.log(b);
    var result = 'T  \u2208  \u0398(';
    if (floatEquals(p, k)) result += formatPolyLog(k, i + 1);
    else if (p < k) result += formatPolyLog(k, i);
    else if (p > k) {
      if (floatEquals(Math.round(p), p))
        result += formatPolyLog(Math.round(p), 0);
      else
        result +=
          formatPolyLog('\\log_{' + b + '} ' + a, 0) +
          ') \\approx \u0398(' +
          formatPolyLog(p.toFixed(3), 0);
    } else result = null;
    if (result !== null) result += ')';
    else result = 'Arithmetic error';

    return result;
  };

  useEffect(() => {
    if (
      values.a !== '' &&
      values.a >= 0 &&
      values.b !== '' &&
      values.b > 1 &&
      values.k !== '' &&
      values.k >= 0 &&
      values.i !== '' &&
      values.i >= 0
    ) {
      setExp(print(values.a, values.b, values.k, values.i));
      setSol(calculate(values.a, values.b, values.k, values.i));
    } else {
      setExp('');
      setSol('');
    }
  }, [values]);

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      // window.alert("testing...");
      setExp(print(values.a, values.b, values.k, values.i));
      setSol(calculate(values.a, values.b, values.k, values.i));
    }
  };

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Formula
          tex={`T(n)\\ =\\ aT\\left(n/b\\right)\\ +\\ \\theta\\left(n^{k}\\left(\\lg{n}\\right)^{i}\\right)`}
        />
      </Box>
      <div className={classes.whiteSpace} />

      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="a"
              name="a"
              value={values.a}
              onChange={handleInputChange}
              error={errors.a}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="b"
              name="b"
              value={values.b}
              onChange={handleInputChange}
              error={errors.b}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="k"
              name="k"
              value={values.k}
              onChange={handleInputChange}
              error={errors.k}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controls.Input
              type="number"
              label="i"
              name="i"
              value={values.i}
              onChange={handleInputChange}
              error={errors.i}
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
        {/* <Typography variant="subtitle2">Output</Typography> */}
        <Divider style={{ margin: '8px 0px' }} />
        <Typography variant="body1" gutterBottom>
          Recurrence:
        </Typography>
        <Formula tex={exp} />
        <Typography variant="body1" gutterBottom>
          Time Complexity:
        </Typography>
        <Formula tex={sol} />
      </Box>
    </Container>
  );
}
