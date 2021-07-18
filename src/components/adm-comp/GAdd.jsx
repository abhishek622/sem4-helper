import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './adm-calculate-func/underAdd';

const radioBtn = [
  { id: 'plus', title: '+' },
  { id: 'mul', title: '*' },
];

const initialValues = {
  a: '',
  optn: 'plus',
};

export default function GAdd() {
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
    if (values.a !== '') {
      setSol(calculate(values.a, values.optn));
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
        <Grid item xs={12}>
          <Controls.Input
            type="number"
            label="Enter Number"
            name="a"
            value={values.a}
            onChange={handleInputChange}
            InputProps={{
              inputProps: {
                min: 1,
              },
            }}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} align="center">
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
        {sol &&
          sol.map((item, i) => (
            <Typography variant="body1" gutterBottom key={i}>
              {item}
            </Typography>
          ))}
      </Box>
    </Container>
  );
}
