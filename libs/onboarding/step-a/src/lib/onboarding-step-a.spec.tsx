import { render } from '@testing-library/react';

import OnboardingStepA from './onboarding-step-a';

describe('OnboardingStepA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingStepA />);
    expect(baseElement).toBeTruthy();
  });
});
