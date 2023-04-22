import { render } from '@testing-library/react';

import OnboardingContainer from './onboarding-container';

describe('OnboardingContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingContainer />);
    expect(baseElement).toBeTruthy();
  });
});
