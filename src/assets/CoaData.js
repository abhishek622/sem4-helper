import React, { Suspense, lazy } from 'react';
import { Loading } from '../components/general/Loading';

const SpeedUp = lazy(() => import('../components/coa-comp/SpeedUp'));
const Mips = lazy(() => import('../components/coa-comp/Mips'));
const LittleLaw = lazy(() => import('../components/coa-comp/LittleLaw'));
const TtoE = lazy(() => import('../components/coa-comp/TtoE'));
const TtoT = lazy(() => import('../components/coa-comp/TtoT'));
const Converter = lazy(() => import('../components/coa-comp/Converter'));
const PhyAddress = lazy(() => import('../components/coa-comp/PhyAddress'));
const DirectMap = lazy(() => import('../components/coa-comp/DirectMap'));
const HammingCode = lazy(() => import('../components/coa-comp/HammingCode'));
const Operations = lazy(() => import('../components/coa-comp/Operations'));

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
    title: 'Direct Mapping Cache Organization',
    formSection: (
      <Suspense fallback={<Loading />}>
        <DirectMap />
      </Suspense>
    ),
  },
  {
    id: 7,
    title: 'Hamming Code (check bits)',
    formSection: (
      <Suspense fallback={<Loading />}>
        <HammingCode />
      </Suspense>
    ),
  },
  {
    id: 8,
    title: 'Base Converter',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Converter />
      </Suspense>
    ),
  },
  {
    id: 9,
    title: 'Arithmetic Operations',
    formSection: (
      <Suspense fallback={<Loading />}>
        <Operations />
      </Suspense>
    ),
  },
];
