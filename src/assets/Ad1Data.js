import React, { Suspense, lazy } from 'react';
import { Loading } from '../components/general/Loading';

const MasterTheorem = lazy(() =>
  import('../components/ad1-comp/MasterTheorem')
);

const TimeComplexity = lazy(() =>
  import('../components/ad1-comp/TimeComplexity')
);
const SelecSort = lazy(() => import('../components/ad1-comp/SelecSort'));
const MinHeap = lazy(() => import('../components/ad1-comp/MinHeap'));
const OtherComp = lazy(() => import('../components/ad1-comp/OtherComp'));
const OrderComp = lazy(() => import('../components/ad1-comp/OrderComp'));

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
  {
    id: 0,
    title: 'Order of Time Complexity',
    formSection: (
      <Suspense fallback={<Loading />}>
        <OrderComp />
      </Suspense>
    ),
  },
  {
    id: 2,
    title: 'Time Complexity table',
    formSection: (
      <Suspense fallback={<Loading />}>
        <TimeComplexity />
      </Suspense>
    ),
  },
  {
    id: 3,
    title: 'Selection Sort',
    formSection: (
      <Suspense fallback={<Loading />}>
        <SelecSort />
      </Suspense>
    ),
  },
  {
    id: 4,
    title: 'Heap Sort',
    formSection: (
      <Suspense fallback={<Loading />}>
        <MinHeap />
      </Suspense>
    ),
  },
  {
    id: 5,
    title: 'Complexity Analysis',
    formSection: (
      <Suspense fallback={<Loading />}>
        <OtherComp />
      </Suspense>
    ),
  },
];
