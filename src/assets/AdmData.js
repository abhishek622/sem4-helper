import React, { Suspense, lazy } from 'react';
import { Loading } from '../components/general/Loading';

const Division = lazy(() => import('../components/adm-comp/Division'));

export const data = [
  {
    id: 1,
    title: 'Division',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Division />
      </Suspense>
    ),
  },
];
