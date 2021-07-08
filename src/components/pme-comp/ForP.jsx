import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';

import Formula from '../general/Formula';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const calculateP = (x, y, z) => {
  let i = parseFloat(x);
  let n = parseFloat(y);
  let f = parseFloat(z);
  var p = f / Math.pow(1 + i / 100, n);
  return p.toLocaleString('en-US', { maximumFractionDigits: 4 });
};
const calculateF = (x, y, z) => {
  let i = parseFloat(x);
  let n = parseFloat(y);
  let p = parseFloat(z);
  var f = p * Math.pow(1 + i / 100, n);
  return f.toLocaleString('en-US', { maximumFractionDigits: 4 });
};

export default function ForP() {
  const classes = useStyles();
  const [f, setF] = useState('');
  const [i, setI] = useState('');
  const [n, setN] = useState('');
  const [p, setP] = useState('');
  const [errors, setErrors] = useState({});
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);

  const validate = () => {
    let temp = {};
    temp.f =
      (!isNaN(parseFloat(f)) && isFinite(f)) || f === ''
        ? ''
        : 'F must be number';
    temp.i = i >= 0 ? '' : 'i must be at least 0';
    temp.n = n >= 0 ? '' : 'n must be at least 0';
    temp.p =
      (!isNaN(parseFloat(p)) && isFinite(p)) || p === ''
        ? ''
        : 'P must be number';

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
      case 'p':
        setP(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (f !== '') {
      setInput2(true);
    } else if (p !== '') {
      setInput1(true);
    } else {
      setInput1(false);
      setInput2(false);
    }
  }, [f, p]);

  const resetForm = () => {
    setF('');
    setI('');
    setN('');
    setP('');
    setInput1(false);
    setInput2(false);
    setErrors({});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      if (f === '') {
        setF(calculateF(i, n, p));
      } else if (p === '') {
        setP(calculateP(i, n, f));
      }
    }
  };

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Formula tex={`F=P\\left(1+i\\right)^{N}`} />
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
              InputProps={{
                readOnly: input1,
              }}
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
              label="Present Value (P)"
              name="p"
              value={p}
              error={errors.p}
              InputProps={{
                readOnly: input2,
              }}
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
