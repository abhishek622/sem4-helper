import React, { Suspense,lazy } from 'react';
import {Loading} from '../components/general/Loading'

// import MasterTheorem from '../components/ad1-comp/MasterTheorem';
import Test from '../components/ad1-comp/Test';
const MasterTheorem = lazy(() => import('../components/ad1-comp/MasterTheorem'));

export const data = [
  {
    id: 1,
    title: 'Master Theorem',
    formSection: <Suspense fallback={<Loading />}><MasterTheorem /></Suspense>,
    // <MasterTheorem />,
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    formSection: <Test />,
  },
];
