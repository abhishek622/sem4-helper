import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  withStyles,
} from '@material-ui/core';
import React from 'react';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function createData(id, algo, time) {
  return { id, algo, time };
}

const rows = [
  createData(1, 'Selection', 'Ω(n\u00b2) \u003c θ(n\u00b2) \u003c O(n\u00b2)'),
  createData(2, 'Bubble', 'Ω(n) \u003c θ(n\u00b2) \u003c O(n\u00b2)'),
  createData(3, 'Insertion', 'Ω(n) \u003c θ(n\u00b2) \u003c O(n\u00b2)'),
  createData(4, 'Heap', 'Ω(n log(n)) \u003c θ(n log(n)) \u003c O(n log(n))'),
  createData(5, 'Quick', 'Ω(n log(n)) \u003c θ(n log(n)) \u003c O(n\u00b2)'),
  createData(6, 'Merge', 'Ω(n log(n)) \u003c θ(n log(n)) \u003c O(n log(n))'),
];

function TimeComplexity() {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sorting Algo</StyledTableCell>
            <StyledTableCell>Time Complexity</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.algo}
              </TableCell>
              <TableCell>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TimeComplexity;
