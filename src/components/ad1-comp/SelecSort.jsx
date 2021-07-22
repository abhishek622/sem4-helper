import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Divider } from '@material-ui/core';

import HelperTable from '../general/HelperTable';
import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { calculate } from './ad1-calculate/ss';

function createData(id, title, res) {
  return { id, title, res };
}

const rows = [
  createData(1, 'Worst-case', 'O(n\u00b2) comparisons'),
  createData(2, 'Performance', 'O(n) swaps'),
  createData(3, 'Best-case', 'O(n\u00b2) comparisons'),
  createData(4, 'Performance', 'O(1) swaps'),
  createData(5, 'Average', 'O(n\u00b2) comparisons'),
  createData(6, 'Performance', 'O(n) swaps'),
  createData(7, 'Space complexity', 'O(1) auxiliary'),
  createData(8, 'Stable', 'Yes'),
  createData(9, 'In place', 'Yes'),
];

export default function SelecSort() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [sol, setSol] = useState([]);

  const resetForm = () => {
    setValue('');
    setSol([]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSol(calculate(value));
  };

  return (
    <Container component="main">
      <Box mt={2}>
        <HelperTable rows={rows} />
      </Box>
      <div className={classes.whiteSpace} />
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controls.Input
              type="text"
              label="Enter Sequence"
              placeholder="1,2,3,4"
              name="value"
              value={value}
              onChange={e => setValue(e.target.value)}
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
        <Divider style={{ margin: '8px 0px' }} />

        {sol &&
          sol.map((item, i) => (
            <Typography variant="body1" key={i} gutterBottom>
              {item}
            </Typography>
          ))}
      </Box>
    </Container>
  );
}
