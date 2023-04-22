import { render } from '@testing-library/react';

import OnboardingSuccess from './onboarding-success';

describe('OnboardingSuccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingSuccess />);
    expect(baseElement).toBeTruthy();
  });
});
