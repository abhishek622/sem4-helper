import React from 'react';
import { Container, Typography, Divider } from '@material-ui/core';

import { useStyles } from '../../styles/Form.style';
import Formula from '../general/Formula';

export default function Property() {
  const classes = useStyles();

  return (
    <Container component="main">
      <Typography variant="h6" gutterBottom>
        <sup>n</sup>C<sub>r</sub> Properties -
      </Typography>
      <Divider />
      <div className={classes.whiteSpace} />
      <Formula
        tex={`1)\\ \\left(\\begin{array}{c}n\\\\ 0\\end{array}\\right) = \\left(\\begin{array}{c}n\\\\ n\\end{array}\\right)=1,\\ \\left(\\begin{array}{c}n\\\\ 1\\end{array}\\right)=n`}
      />

      <Formula
        tex={`2)\\ \\left(\\begin{array}{c}n\\\\ r\\end{array}\\right) = \\left(\\begin{array}{c}n\\\\ n-r\\end{array}\\right)`}
      />

      <Formula
        tex={`3)\\ \\left(\\begin{array}{c}n\\\\ r\\end{array}\\right) + \\left(\\begin{array}{c}n\\\\ r-1\\end{array}\\right)= \\left(\\begin{array}{c}n+1\\\\ r\\end{array}\\right)`}
      />
      <Formula
        tex={`4)\\ \\left(\\begin{array}{c}n\\\\ x\\end{array}\\right) = \\left(\\begin{array}{c}n\\\\ y\\end{array}\\right)\\Leftrightarrow x=y\\ or\\ x+y=n`}
      />
      <Formula
        tex={`5)\\  n\\times\\left(\\begin{array}{c}n-1\\\\ r-1\\end{array}\\right) =\\left(n-r+1\\right)\\left(\\begin{array}{c}n\\\\ r-1\\end{array}\\right)`}
      />
      <Formula
        tex={`6)\\ \\left(\\begin{array}{c}n\\\\ r\\end{array}\\right) =\\frac{n}{r}\\cdot\\left(\\begin{array}{c}n-1\\\\ r-1\\end{array}\\right)`}
      />
      <Formula
        tex={`7)\\ \\frac{\\left(\\begin{array}{c}n\\\\ r\\end{array}\\right)}{\\left(\\begin{array}{c}n\\\\ r-1\\end{array}\\right)} =\\frac{n-r+1}{r}`}
      />
      <Formula
        tex={`8)\\ \\left(\\begin{array}{c}n\\\\ 0\\end{array}\\right)+\\left(\\begin{array}{c}n\\\\ 1\\end{array}\\right)+\\cdot\\cdot\\cdot+\\left(\\begin{array}{c}n\\\\ n\\end{array}\\right)=2^{n}`}
      />
      <Formula
        tex={`9)\\ \\left(\\begin{array}{c}n\\\\ 0\\end{array}\\right)+\\left(\\begin{array}{c}n\\ 2\\end{array}\\right)+\\cdot\\cdot\\cdot=\\left(\\begin{array}{c}n\\\\ 1\\end{array}\\right)+\\left(\\begin{array}{c}n\\\\ 3\\end{array}\\right)+\\cdot\\cdot\\cdot=2^{n-1}`}
      />
      <Formula
        tex={`10)\\ \\left(\\begin{array}{c}2n+1\\\\ 0\\end{array}\\right)+\\left(\\begin{array}{c}2n+1\\\\ 2\\end{array}\\right)+\\cdot\\cdot\\cdot+\\left(\\begin{array}{c}2n+1\\\\ n\\end{array}\\right)=2^{2n}`}
      />
      <Formula
        tex={`11)\\ \\left(\\begin{array}{c}n\\\\ n\\end{array}\\right)+\\left(\\begin{array}{c}n+1\\\\ n\\end{array}\\right)+\\left(\\begin{array}{c}n+2\\\\ n\\end{array}\\right)+\\cdot\\cdot\\cdot+\\left(\\begin{array}{c}2n-1\\\\ n\\end{array}\\right)=\\left(\\begin{array}{c}2n\\\\ n+1\\end{array}\\right)`}
      />
    </Container>
  );
}
