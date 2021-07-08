import React, { Suspense, lazy } from 'react';
import { Loading } from '../components/general/Loading';

const WeightOrParity = lazy(() =>
  import('../components/csw2-comp/WeightOrParity')
);
const NextOrPrev = lazy(() => import('../components/csw2-comp/NextOrPrev'));
const Stock = lazy(() => import('../components/csw2-comp/Stock'));
const BitShifting = lazy(() => import('../components/csw2-comp/BitShifting'));
const SwapBit = lazy(() => import('../components/csw2-comp/SwapBit'));
const BitReversal = lazy(() => import('../components/csw2-comp/BitReversal'));

export const data = [
  {
    id: 1,
    title: 'Weight and Parity',
    formSection: (
      <Suspense fallback={<Loading />}>
        <WeightOrParity />
      </Suspense>
    ),
  },
  {
    id: 2,
    title: 'Next and Previous Permutation',
    formSection: (
      <Suspense fallback={<Loading />}>
        <NextOrPrev />
      </Suspense>
    ),
  },
  {
    id: 3,
    title: 'Bit Shifting',
    formSection: (
      <Suspense fallback={<Loading />}>
        <BitShifting />
      </Suspense>
    ),
  },
  {
    id: 4,
    title: 'Buy and sell a stock',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Stock />
      </Suspense>
    ),
  },
  {
    id: 5,
    title: 'Bit Reversal',
    formSection: (
      <Suspense fallback={<Loading />}>
        <BitReversal />
      </Suspense>
    ),
  },
  {
    id: 6,
    title: 'Swap ith and jth bits',
    formSection: (
      <Suspense fallback={<Loading />}>
        <SwapBit />
      </Suspense>
    ),
  },
];
