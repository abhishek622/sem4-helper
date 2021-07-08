import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Typography, Divider } from '@material-ui/core';

import Controls from '../controls/Controls';
import { useStyles } from '../../styles/Form.style';
import { SwapDeci, SwapBin } from './claculate-func/Swap';

export default function SwapBit() {
  const classes = useStyles();
  const [dec, setDec] = useState('');
  const [bin, setBin] = useState('');
  const [i, setI] = useState('');
  const [j, setJ] = useState('');
  const [sol, setSol] = useState([]);
  const [input1, setInput1] = useState(false);
  const [input2, setInput2] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'dec':
        setDec(value);
        break;
      case 'bin':
        setBin(value);
        break;
      case 'i':
        setI(value);
        break;
      case 'j':
        setJ(value);
        break;
      default:
        break;
    }
  };

  const resetForm = () => {
    setDec('');
    setI('');
    setBin('');
    setJ('');
    setInput1(false);
    setInput2(false);
    setSol([]);
  };

  useEffect(() => {
    if (dec !== '') {
      setInput2(true);
    } else if (bin !== '') {
      setInput1(true);
    } else {
      setInput1(false);
      setInput2(false);
    }
    if (dec !== '' && i !== '' && j !== '') {
      setSol(SwapDeci(dec, i, j));
      setBin(Number(parseInt(dec).toString(2)));
    } else if (bin !== '' && i !== '' && j !== '') {
      setSol(SwapBin(bin, i, j));
      setDec(parseInt(String(bin), 2));
    } else {
      setSol([]);
    }
  }, [dec, bin, i, j]);

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Enter Decimal Number"
            name="dec"
            value={dec}
            InputProps={{
              readOnly: input1,
            }}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controls.Input
            type="number"
            label="Enter Binary Number"
            name="bin"
            value={bin}
            InputProps={{
              readOnly: input2,
            }}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            type="number"
            label="ith value"
            name="i"
            value={i}
            onChange={handleInputChange}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            type="number"
            label="jth value"
            name="j"
            value={j}
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
          <b>Decimal Value:</b> {sol[0]}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <b>Binary Value:</b> {sol[1]}
        </Typography>
      </Box>
    </Container>
  );
}
