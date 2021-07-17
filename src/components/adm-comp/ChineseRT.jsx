import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const initialValues = {
  a: '',
  b: '',
};

function calculate(num, rem) {
  num.split('');
  rem.split('');
  let k = num.length;
  var x = 1;
  while (true) {
    var j;
    for (j = 0; j < k; j++) if (x % num[j] !== rem[j]) break;

    if (j === k) return x;
    x++;
  }
}

export default function ChineseRT() {
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

  useEffect(() => {
    if (
      values.a !== '' &&
      values.b !== '' &&
      values.a.length >= 2 &&
      values.a.length === values.b.length
    ) {
      setSol(calculate(values.a, values.b));
    } else {
      setSol('');
    }
  }, [values]);

  const resetForm = () => {
    setValues(initialValues);
    setSol('');
  };

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controls.Input
            type="number"
            label="Enter num"
            placeholder="a1a2a3..."
            name="a"
            value={values.a}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            type="number"
            label="Enter rem"
            placeholder="b1b2b3..."
            name="b"
            value={values.b}
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
          <b>x</b> = {sol}
        </Typography>
      </Box>
    </Container>
  );
}
