import React from 'react';
import { Route } from 'react-router';
import { Layout } from '../../layout/Layout';

export const LayoutRoute = ({ children, ...rest }) => {
  return <Route {...rest} render={() => <Layout>{children}</Layout>} />;
};
