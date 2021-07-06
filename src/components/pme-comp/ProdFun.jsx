import { Typography } from '@material-ui/core';
import { Grid, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

export default function ProdFun() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="subtitle2" gutterBottom>
          Y/L = A F(1, K/L, H/L, N/L)
        </Typography>
        <Typography variant="caption" display="block" gutterBottom>
          A = available production technology
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <List dense>
          <ListItem>
            <ListItemText
              primary="Y/L = output per worker"
              secondary="Y = quantity of output"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="K/L = physical capital per worker"
              secondary="K = quantity of physical capital"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="H/L = human capital per worker"
              secondary="H = quantity of human capital"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="N/L = natural resources per worker"
              secondary="N = quantity of natural resources"
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
