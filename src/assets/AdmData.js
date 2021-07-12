import React, { Suspense, lazy } from 'react';
import { Loading } from '../components/general/Loading';

const Division = lazy(() => import('../components/adm-comp/Division'));
const PfromInv = lazy(() => import('../components/adm-comp/PfromInv'));
const InversionSeq = lazy(() => import('../components/adm-comp/InversionSeq'));
const NandC = lazy(() => import('../components/adm-comp/NandC'));
const Coeff = lazy(() => import('../components/adm-comp/Coeff'));
const BinomialTheorem = lazy(() =>
  import('../components/adm-comp/BinomialTheorem')
);

export const data = [
  {
    id: 1,
    title: 'Find Inversion Sequence',
    formSection: (
      <Suspense fallback={<Loading />}>
        <InversionSeq />
      </Suspense>
    ),
  },
  {
    id: 2,
    title: 'Generate Permutation from Inversion Sequence',
    formSection: (
      <Suspense fallback={<Loading />}>
        <PfromInv />
      </Suspense>
    ),
  },
  {
    id: 3,
    title: 'Division',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Division />
      </Suspense>
    ),
  },
  {
    id: 4,
    title: 'Find nPr and nCr',
    formSection: (
      <Suspense fallback={<Loading />}>
        <NandC />
      </Suspense>
    ),
  },
  {
    id: 5,
    title: 'Binomial Expansion',
    formSection: (
      <Suspense fallback={<Loading />}>
        <BinomialTheorem />
      </Suspense>
    ),
  },
  {
    id: 6,
    title: 'Find Coefficient Value',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Coeff />
      </Suspense>
    ),
  },
];
