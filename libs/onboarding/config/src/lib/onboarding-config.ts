import { lazy } from 'react';

const StepA = lazy(() => import('@ewallet-onboarding/onboarding/step-a'));
const StepB = lazy(() => import('@ewallet-onboarding/onboarding/step-b'));
const StepC = lazy(() => import('@ewallet-onboarding/onboarding/step-c'));

export const steps = [
  {
    label: 'Basic Information',
    component: StepA,
    description: 'Fill in your basic information',
  },
  {
    label: 'Additional Information',
    component: StepB,
    description: 'Tell us more about yourself',
  },
  {
    label: 'Purpose',
    component: StepC,
    description: 'Almost there, choose your e-wallet purpose',
  },
];
