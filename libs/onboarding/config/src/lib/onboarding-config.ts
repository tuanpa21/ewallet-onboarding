import { lazy } from 'react';

const StepA = lazy(() => import('@ewallet-onboarding/onboarding/step-a'));
const StepB = lazy(() => import('@ewallet-onboarding/onboarding/step-b'));
const StepC = lazy(() => import('@ewallet-onboarding/onboarding/step-c'));

export const steps = [
  { label: 'Fill in your basic information', component: StepA },
  { label: 'Tell us more about yourself', component: StepB },
  { label: 'Almost there, choose your e-wallet purpose', component: StepC },
];
