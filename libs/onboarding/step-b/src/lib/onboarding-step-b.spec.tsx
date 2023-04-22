import { render } from '@testing-library/react';

import OnboardingStepB from './onboarding-step-b';

describe('OnboardingStepB', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingStepB />);
    expect(baseElement).toBeTruthy();
  });
});
