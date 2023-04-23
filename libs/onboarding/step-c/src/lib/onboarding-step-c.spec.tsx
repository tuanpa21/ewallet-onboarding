import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OnboardingStepC from './onboarding-step-c';
import '@testing-library/jest-dom';

describe('OnboardingStepC', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingStepC />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render the e-wallet purposes', () => {
    render(<OnboardingStepC />);
    const purposes = [
      'Online shopping',
      'Peer-to-peer payments',
      'Investment',
      'Bills payment',
      'Others',
    ];

    purposes.forEach((purpose) => {
      const purposeLabel = screen.getByLabelText(purpose);
      expect(purposeLabel).toBeInTheDocument();
    });
  });

  it('should render the next and back buttons', () => {
    render(<OnboardingStepC />);
    const backButton = screen.getByRole('button', { name: 'Back' });
    expect(backButton).toBeInTheDocument();
    const finishButton = screen.getByRole('button', { name: 'Finish' });
    expect(finishButton).toBeInTheDocument();
  });

  it('should submit the form with selected purposes', async () => {
    render(<OnboardingStepC />);
    const purposes = [
      'Online shopping',
      'Peer-to-peer payments',
      'Investment',
      'Bills payment',
      'Others',
    ];

    purposes.forEach((purpose, index) => {
      if (index % 2 === 0) {
        const purposeLabel = screen.getByLabelText(purpose);
        userEvent.click(purposeLabel);
      }
    });

    const finishButton = screen.getByRole('button', { name: 'Finish' });
    fireEvent.click(finishButton);

    // Replace the following line with a test that checks if the form submission was successful
    // For example, check if the next step is rendered, or if the store has been updated with the submitted data
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for a second before checking the result
  });
});
