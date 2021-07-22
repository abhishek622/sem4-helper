import { Container, Typography } from '@material-ui/core';
import React from 'react';

import { useStyles } from '../../styles/Form.style';

export default function OrderComp() {
  const classes = useStyles();

  return (
    <Container component="main">
      <div className={classes.whiteSpace} />

      <Typography variant="body1">
        O&lpar;1&#41; &#x3c; O&lpar;log log n&#41; &#x3c; O&lpar;log n&#41;
        &#x3c; O&lpar;n<sup>1/2</sup>&#41; &#x3c; O&lpar;n&#41; &#x3c; O&lpar;n
        log n&#41; &#x3c; O&lpar;n<sup>2</sup>&#41; &#x3c; O&lpar;n<sup>k</sup>
        &#41; &#x3c; O&lpar;2<sup>n</sup>&#41; &#x3c; O&lpar;n<sup>n</sup>&#41;
        &#x3c; O&lpar;2
        <sup>
          2<sup>2</sup>
        </sup>
        &#41;
      </Typography>
    </Container>
  );
}
