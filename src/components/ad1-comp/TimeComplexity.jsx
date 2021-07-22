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
  createData(
    1,
    'Selection sort',
    'Ω(n\u00b2) \u003c θ(n\u00b2) \u003c O(n\u00b2)'
  ),
  createData(2, 'Bubble sort', 'Ω(n) \u003c θ(n\u00b2) \u003c O(n\u00b2)'),
  createData(3, 'Insertion sort', 'Ω(n) \u003c θ(n\u00b2) \u003c O(n\u00b2)'),
  createData(
    4,
    'Heap sort',
    'Ω(n log(n)) \u003c θ(n log(n)) \u003c O(n log(n))'
  ),
  createData(
    5,
    'Quick sort',
    'Ω(n log(n)) \u003c θ(n log(n)) \u003c O(n\u00b2)'
  ),
  createData(
    6,
    'Merge sort',
    'Ω(n log(n)) \u003c θ(n log(n)) \u003c O(n log(n))'
  ),
  createData(7, 'Binary Search', 'O(log n)'),
  createData(8, 'Height of CBT', 'O(log n)'),
  createData(9, 'Insertion in heap', 'O(log n)'),
  createData(10, 'Constuct Heap', 'O(n log n)'),
  createData(11, 'Delete from heap', 'O(log n)'),
  createData(12, 'Huffman coding', 'O(log n)'),
  createData(13, 'DFS, BFS', 'O(V+E)'),
  createData(14, 'All pair Shortest', 'O(n\u00b3)'),
  createData(15, 'Karatsuba algorithm', `O(n^(log_2\u00b3))`),
  // createData(6, '', ''),
  // createData(6, '', ''),
  // createData(6, '', ''),
];

function TimeComplexity() {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Algorithm</StyledTableCell>
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
