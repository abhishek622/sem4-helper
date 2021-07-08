import React, { Suspense, lazy } from 'react';
import { Loading } from '../components/general/Loading';

const MasterTheorem = lazy(() =>
  import('../components/ad1-comp/MasterTheorem')
);

export const data = [
  {
    id: 1,
    title: 'Master Theorem',
    formSection: (
      <Suspense fallback={<Loading />}>
        <MasterTheorem />
      </Suspense>
    ),
  },
];
