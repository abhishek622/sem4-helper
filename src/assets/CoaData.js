import React, { Suspense, lazy } from 'react';
import { Loading } from '../components/general/Loading';

const SpeedUp = lazy(() => import('../components/coa-comp/SpeedUp'));
const Mips = lazy(() => import('../components/coa-comp/Mips'));
const LittleLaw = lazy(() => import('../components/coa-comp/LittleLaw'));
const TtoE = lazy(() => import('../components/coa-comp/TtoE'));
const TtoT = lazy(() => import('../components/coa-comp/TtoT'));
const Converter = lazy(() => import('../components/coa-comp/Converter'));
const PhyAddress = lazy(() => import('../components/coa-comp/PhyAddress'));

export const data = [
  {
    id: 0,
    title: 'Physical Address',
    formSection: (
      <Suspense fallback={<Loading />}>
        <PhyAddress />
      </Suspense>
    ),
  },
  {
    id: 1,
    title: "Amdhal's Law",
    formSection: (
      <Suspense fallback={<Loading />}>
        <SpeedUp />
      </Suspense>
    ),
  },
  {
    id: 2,
    title: "Little's Law",
    formSection: (
      <Suspense fallback={<Loading />}>
        <LittleLaw />
      </Suspense>
    ),
  },
  {
    id: 3,
    title: 'The time T needed to transfer a given program',
    formSection: (
      <Suspense fallback={<Loading />}>
        <TtoT />
      </Suspense>
    ),
  },
  {
    id: 4,
    title: 'The processor time T needed to execute a given program',
    formSection: (
      <Suspense fallback={<Loading />}>
        <TtoE />
      </Suspense>
    ),
  },
  {
    id: 5,
    title: 'Millions of Instructions per Second (MIPS) rate',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Mips />
      </Suspense>
    ),
  },
  {
    id: 6,
    title: 'Base Converter',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Converter />
      </Suspense>
    ),
  },
];
