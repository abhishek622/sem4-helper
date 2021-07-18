import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//pages
import { Ad1 } from './pages/Ad1';
import { Adm } from './pages/Adm';
import { Coa } from './pages/Coa';
import { Csw2 } from './pages/Csw2';
import { Pme } from './pages/Pme';
import { Home } from './pages/Home';
import { Err404 } from './pages/Err404';

import { LayoutRoute } from './components/general/LayoutRoute';

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#2196f3',
        contrastText: '#fff',
      },
      secondary: {
        main: '#fc2f5f',
        contrastText: '#000',
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Home} />

          <LayoutRoute path="/adm">
            <Adm />
          </LayoutRoute>
          <LayoutRoute path="/coa">
            <Coa />
          </LayoutRoute>
          <LayoutRoute path="/ad1">
            <Ad1 />
          </LayoutRoute>
          <LayoutRoute path="/pme">
            <Pme />
          </LayoutRoute>
          <LayoutRoute path="/csw2">
            <Csw2 />
          </LayoutRoute>

          <Route exact path="*" component={Err404} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
