import React from 'react';
import { Container, Typography } from '@material-ui/core';

import HelperTable from '../general/HelperTable';

import { useStyles } from '../../styles/Form.style';

function createData(id, title, res) {
  return { id, title, res };
}

const rows = [
  createData(1, 'Time to list all vertices adjacent to u', 'θ(V)'),
  createData(3, 'to determine if (u, v)', 'θ(1)'),
  createData(7, 'Space complexity', 'O(V\u00b2)'),
];

const rows2 = [
  createData(1, 'Initialization takes', 'O(V)'),
  createData(3, 'Traversal Loop', 'θ(E)'),
  createData(7, 'Tital Time', 'O(V+E)'),
];

const rows3 = [
  createData(1, 'Lines 1-3 (initialization)', 'O(V)'),
  createData(3, 'Line 4 (sorting)', 'O(E log E)'),
  createData(7, 'Lines 6-8 (set-operation)', 'O(E log E)'),
  createData(8, 'Total', 'O(E log E)'),
];

const rows4 = [
  createData(1, 'Extracting the vertex from the queue', 'O(log n)'),
  createData(3, 'For each incident edge', 'O(log V)'),
  createData(8, 'Total', 'O((n + e) log n)'),
];

const rows5 = [
  createData(1, 'using linear array for priority queue', 'O(V\u00b2)'),
  createData(3, 'using binary heap', 'O((V + E) log V)'),
];

export default function OtherComp() {
  const classes = useStyles();
  return (
    <Container component="main">
      <div className={classes.whiteSpace} />
      <Typography variant="subtitle1" gutterBottom>
        Analysis of Adjacency Matrix
      </Typography>
      <HelperTable rows={rows} />

      <div className={classes.whiteSpace} />
      <Typography variant="subtitle1" gutterBottom>
        Analysis of BFS
      </Typography>
      <HelperTable rows={rows2} />

      <div className={classes.whiteSpace} />
      <Typography variant="subtitle1" gutterBottom>
        Analysis of Kruskal’s Algorithm
      </Typography>
      <HelperTable rows={rows3} />

      <div className={classes.whiteSpace} />
      <Typography variant="subtitle1" gutterBottom>
        Analysis of Prim ’s Algorithm
      </Typography>
      <HelperTable rows={rows4} />

      <div className={classes.whiteSpace} />
      <Typography variant="subtitle1" gutterBottom>
        Analysis of Dijkstra’s Algorithm
      </Typography>
      <HelperTable rows={rows5} />
    </Container>
  );
}
