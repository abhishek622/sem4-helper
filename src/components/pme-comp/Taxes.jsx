import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Formula from '../general/Formula';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';

const initialValues = {
  a: '',
  b: '',
};

export default function Taxes() {
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
    if (values.a !== '' && values.b !== '') {
      setSol(
        (parseFloat(values.a) - parseFloat(values.b)).toLocaleString('en-US', {
          maximumFractionDigits: 3,
        })
      );
    } else {
      setSol('');
    }
  }, [values]);

  return (
    <Container component="main">
      <Box mt={2}>
        <Typography variant="h6">Formula</Typography>
        <Formula tex={`Taxes\\ =\\ G\\ -\\ B`} />
      </Box>
      <div className={classes.whiteSpace} />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Goverment spend (G)"
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
            label="Budget (B)"
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
          <b>Solution</b>: {sol}
        </Typography>
      </Box>
    </Container>
  );
}
