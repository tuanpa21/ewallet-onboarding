import { render, screen } from '@testing-library/react';
import OnboardingSuccess, { CheckCircleIconTestId } from './onboarding-success';

describe('OnboardingSuccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingSuccess />);
    expect(baseElement).toBeTruthy();
  });

  it('should render the success message', () => {
    render(<OnboardingSuccess />);
    const successMessage = screen.getByText(
      /thank you for providing your information!/i
    );
    expect(successMessage).toBeDefined();
  });

  it('should render the CheckCircleIcon', () => {
    render(<OnboardingSuccess />);
    const checkCircleIcon = screen.getByTestId(CheckCircleIconTestId);
    expect(checkCircleIcon).toBeDefined();
  });
});
