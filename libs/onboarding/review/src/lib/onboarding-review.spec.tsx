import { render } from '@testing-library/react';

import OnboardingReview from './onboarding-review';

describe('OnboardingReview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingReview />);
    expect(baseElement).toBeTruthy();
  });
});
