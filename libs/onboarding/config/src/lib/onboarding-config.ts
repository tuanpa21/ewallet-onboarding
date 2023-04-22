import { lazy } from 'react';

const StepA = lazy(() => import('@ewallet-onboarding/onboarding/step-a'));
const StepB = lazy(() => import('@ewallet-onboarding/onboarding/step-b'));
const StepC = lazy(() => import('@ewallet-onboarding/onboarding/step-c'));

export const steps = [
  { label: 'Basic Information', component: StepA },
  { label: 'Additional Information', component: StepB },
  { label: 'Purpose', component: StepC },
];
