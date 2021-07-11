import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import {
  calculate1,
  calculate2,
  calculate3,
  calculate4,
} from './coa-calc/DirMap';

const initialValues = {
  s: '',
  w: '',
  r: '',
};

export default function DirectMap() {
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

  const resetForm = () => {
    setValues(initialValues);
    setSol([]);
  };

  useEffect(() => {
    if (values.s !== '' && values.w !== '' && values.r === '') {
      setSol(calculate1(values.s, values.w));
    } else if (values.s === '' && values.w !== '' && values.r !== '') {
      setSol(calculate2(values.w, values.r));
    } else if (values.s !== '' && values.w === '' && values.r !== '') {
      setSol(calculate3(values.s, values.r));
    } else if (values.s !== '' && values.w !== '' && values.r !== '') {
      setSol(calculate4(values.s, values.w, values.r));
    }
  }, [values]);

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="tag + line (s)"
            name="s"
            value={values.s}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Word (w)"
            name="w"
            value={values.w}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Line or Slot (r)"
            name="r"
            value={values.r}
            onChange={handleInputChange}
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
        {sol.map((val, i) => (
          <Typography variant="body2" gutterBottom key={i}>
            {val}
          </Typography>
        ))}
      </Box>
    </Container>
  );
}
