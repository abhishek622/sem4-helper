import React from 'react'
import { Typography } from '@material-ui/core';

export const Err404 = () => {
    return (
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
         paddingTop:'20vh',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <Typography align="center" variant="h4" gutterBottom>
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" variant="subtitle1" gutterBottom>
          You either tried some shady route or you came here by mistake. Whichever
          it is, try using the navigation
        </Typography>
        <img src='https://i.imgur.com/Q2BAOd2.png'
        style={{width: '250px', height:'300px'}}
        alt="404 not found" />
      </div>
    )
}
