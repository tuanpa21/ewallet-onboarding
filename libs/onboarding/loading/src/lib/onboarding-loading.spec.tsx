import { render, screen } from '@testing-library/react';
import OnboardingLoading from './onboarding-loading';
import '@testing-library/jest-dom';

describe('OnboardingLoading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingLoading />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render the CircularProgress component', () => {
    render(<OnboardingLoading />);
    const circularProgressElement = screen.getByRole('progressbar');
    expect(circularProgressElement).toBeInTheDocument();
  });
});
