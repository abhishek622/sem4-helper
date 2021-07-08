import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './claculate-func/Shifting';

const radioBtn = [
  { id: 'left', title: '\u226a\u00a0Left' },
  { id: 'right', title: '\u226b\u00a0Right' },
];

const initialValues = {
  a: '',
  b: '',
  optn: 'left',
};

export default function BitShifting() {
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

  useEffect(() => {
    if (values.a !== '' && values.b !== '') {
      setSol(calculate(values.a, values.b, values.optn));
    } else {
      setSol([]);
    }
  }, [values]);

  const resetForm = () => {
    setValues(initialValues);
    setSol([]);
  };

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Enter Decimal Number"
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
            label="Bits to shift"
            name="b"
            value={values.b}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.RadioGroup
            name="optn"
            label="Shift Direction"
            value={values.optn}
            onChange={handleInputChange}
            items={radioBtn}
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
          <b>Decimal Value</b>: {sol[0]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Binary Value</b>: {sol[1]}
        </Typography>
      </Box>
    </Container>
  );
}
