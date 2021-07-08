import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './claculate-func/Permutation';

const initialValues = {
  a: '',
  b: '',
};

export default function NextOrPrev() {
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
    setSol(calculate(values.a, values.b));
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
            label="Enter +ve Integer"
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
            label="Enter kth value"
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
          <b>Prev Permutation</b>: {sol[0]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Next Permutation</b>: {sol[1]}
        </Typography>
      </Box>
    </Container>
  );
}
