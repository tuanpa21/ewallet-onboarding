import { render } from '@testing-library/react';

import OnboardingLoading from './onboarding-loading';

describe('OnboardingLoading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingLoading />);
    expect(baseElement).toBeTruthy();
  });
});
