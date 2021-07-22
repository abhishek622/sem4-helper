import React from 'react';
import { Container } from '@material-ui/core';

import HelperTable from '../general/HelperTable';

import { useStyles } from '../../styles/Form.style';

function createData(id, title, res) {
  return { id, title, res };
}

const rows = [
  createData(1, 'Worst-case', 'O(nlog n)'),
  createData(3, 'Best-case', 'O(nlog n)'),
  createData(5, 'Average', 'O(nlog n)'),
  createData(11, 'MaxHeapify', 'O(log n)'),
  createData(12, 'Build MaxHeap', 'O(n)'),
  createData(7, 'Space complexity', 'O(1) auxiliary'),
  createData(8, 'Stable', 'No'),
  createData(9, 'In place', 'Yes'),
  createData(2, 'Height of heap', '\u230alog n\u230b'),
  createData(4, 'No. of leaves', '\u2308log n\u2309'),
];

export default function MinHeap() {
  const classes = useStyles();

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      {/* <Typography variant="subtitle1" gutterBottom>
        Min Heap
      </Typography> */}
      <HelperTable rows={rows} />
    </Container>
  );
}
