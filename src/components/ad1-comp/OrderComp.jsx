import { Container, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from '../../styles/Form.style';

export default function OrderComp() {
  const classes = useStyles();

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />

      <Typography variant="body1">
        O&#40;1&#41; &#x3c; O&#40;log log n&#41; &#x3c; O&#40;log n&#41; &#x3c;
        O&#40;n<sup>1/2</sup>&#41; &#x3c; O&#40;n&#41; &#x3c; O&#40;n log n&#41;
        &#x3c; O&#40;n<sup>2</sup>&#41; &#x3c; O&#40;n<sup>k</sup>
        &#41; &#x3c; O&#40;2<sup>n</sup>&#41; &#x3c; O&#40;n<sup>n</sup>&#41;
        &#x3c; O&#40;2
        <sup>
          2<sup>2</sup>
        </sup>
        &#41;
      </Typography>
    </Container>
  );
}
