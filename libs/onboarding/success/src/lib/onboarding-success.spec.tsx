import { render, screen } from '@testing-library/react';
import OnboardingSuccess, { CheckCircleIconTestId } from './onboarding-success';
import '@testing-library/jest-dom';

describe('OnboardingSuccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingSuccess />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render the success message', () => {
    render(<OnboardingSuccess />);
    const successMessageElement = screen.getByText(
      'Thank you for providing your information!'
    );
    expect(successMessageElement).toBeInTheDocument();
  });

  it('should render the CheckCircleIcon', () => {
    render(<OnboardingSuccess />);
    const checkCircleIcon = screen.getByTestId(CheckCircleIconTestId);
    expect(checkCircleIcon).toBeInTheDocument();
  });
});
