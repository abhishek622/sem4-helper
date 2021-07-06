import React, { Suspense,lazy } from 'react';
import {Loading} from '../components/general/Loading'

const Gdp = lazy(() => import('../components/pme-comp/Gdp'));
const GdpDeflator = lazy(() => import('../components/pme-comp/GdpDeflator'));
const ForA = lazy(() => import('../components/pme-comp/ForA'));
const ForP = lazy(() => import('../components/pme-comp/ForP'));
const PorA = lazy(() => import('../components/pme-comp/PorA'));
const InflationRate = lazy(() => import('../components/pme-comp/InflationRate'));
const Cpi = lazy(() => import('../components/pme-comp/Cpi'));
const ProdFun = lazy(() => import('../components/pme-comp/ProdFun'));
const PublicSave = lazy(() => import('../components/pme-comp/PublicSave'));
const Taxes = lazy(() => import('../components/pme-comp/Taxes'));
const PrivateSave = lazy(() => import('../components/pme-comp/PrivateSave'));
const NationalSave = lazy(() => import('../components/pme-comp/NationalSave'));
const OppCost = lazy(() => import('../components/pme-comp/OppCost'));


export const pmeCh = [
  {
    id: 1,
    title: 'Opportunity Cost',
    formSection: <Suspense fallback={<Loading />}><OppCost /></Suspense>,
  },
  {
    id: 2,
    title: 'Gross Domestic Product (GDP)',
    formSection: <Suspense fallback={<Loading />}><Gdp /></Suspense>,
  },
  {
    id: 3,
    title: 'GDP deflator',
    formSection: <Suspense fallback={<Loading />}><GdpDeflator /></Suspense>,
  },
  {
    id: 4,
    title: 'Consumer Price Index (CPI)',
    formSection: <Suspense fallback={<Loading />}><Cpi /></Suspense>,
  },
  {
    id: 5,
    title: 'Inflation Rate',
    formSection: <Suspense fallback={<Loading />}><InflationRate /></Suspense>,
  },
  {
    id: 6,
    title: 'Production Function',
    formSection: <Suspense fallback={<Loading />}><ProdFun /></Suspense>,
  },
  {
    id: 7,
    title: 'Public Saving',
    formSection: <Suspense fallback={<Loading />}><PublicSave /></Suspense>,
  },
  {
    id: 8,
    title: 'Taxes',
    formSection: <Suspense fallback={<Loading />}><Taxes /></Suspense>,
  },
  {
    id: 9,
    title: 'Private Saving',
    formSection: <Suspense fallback={<Loading />}><PrivateSave /></Suspense>,
  },
  {
    id: 10,
    title: 'National Saving or Investment',
    formSection: <Suspense fallback={<Loading />}><NationalSave /></Suspense>,
  },
  {
    id: 11,
    title: 'Find Future Value or Present Value',
    formSection: <Suspense fallback={<Loading />}><ForP /></Suspense>,
  },
  {
    id: 12,
    title: 'Find Annual Value or Future Value',
    formSection: <Suspense fallback={<Loading />}><ForA /></Suspense>,
  },
  {
    id: 13,
    title: 'Find Present Value or Annual Value',
    formSection: <Suspense fallback={<Loading />}><PorA /></Suspense>,
  },
];
