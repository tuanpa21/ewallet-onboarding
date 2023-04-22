import { render } from '@testing-library/react';

import OnboardingStepC from './onboarding-step-c';

describe('OnboardingStepC', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingStepC />);
    expect(baseElement).toBeTruthy();
  });
});
