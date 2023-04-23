import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import OnboardingContainer from './onboarding-container';
import { steps } from '@ewallet-onboarding/onboarding/config';

describe('OnboardingContainer', () => {
  it('should render successfully', async () => {
    render(<OnboardingContainer />);
    const heading = await screen.findByRole('heading', {
      name: 'E-Wallet Onboarding',
    });
    expect(heading).toBeInTheDocument();
  });

  it('should render the initial step', async () => {
    render(<OnboardingContainer />);
    const stepDescription = await screen.findByText(steps[0].description);
    expect(stepDescription).toBeInTheDocument();
  });

  it('should render the "E-Wallet Onboarding" title', async () => {
    render(<OnboardingContainer />);
    const title = await screen.findByRole('heading', {
      name: 'E-Wallet Onboarding',
    });
    expect(title).toBeInTheDocument();
  });
});
