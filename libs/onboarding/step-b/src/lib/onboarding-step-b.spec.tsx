import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OnboardingStepB from './onboarding-step-b';
import '@testing-library/jest-dom';

describe('OnboardingStepB', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingStepB />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render the email field', () => {
    render(<OnboardingStepB />);
    const emailField = screen.getByLabelText('Email');
    expect(emailField).toBeInTheDocument();
  });

  it('should render the phone number field', () => {
    render(<OnboardingStepB />);
    const phoneNumberField = screen.getByLabelText('Phone Number');
    expect(phoneNumberField).toBeInTheDocument();
  });

  it('should render the date of birth field', () => {
    render(<OnboardingStepB />);
    const dateOfBirthField = screen.getByLabelText('Date of Birth');
    expect(dateOfBirthField).toBeInTheDocument();
  });

  it('should render the next and back buttons', () => {
    render(<OnboardingStepB />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeInTheDocument();
    const backButton = screen.getByRole('button', { name: 'Back' });
    expect(backButton).toBeInTheDocument();
  });

  it('should show errors when submitting the form with empty fields', async () => {
    render(<OnboardingStepB />);
    const nextButton = screen.getByRole('button', { name: 'Next' });

    fireEvent.click(nextButton);

    const emailError = await screen.findByText('Email is required');
    expect(emailError).toBeInTheDocument();

    const phoneNumberError = await screen.findByText(
      'Phone number is required'
    );
    expect(phoneNumberError).toBeInTheDocument();

    const dateOfBirthError = await screen.findByText(
      'Date of birth is required'
    );
    expect(dateOfBirthError).toBeInTheDocument();
  });

  it('should submit the form with valid data', async () => {
    render(<OnboardingStepB />);
    const emailField = screen.getByLabelText('Email');
    const phoneNumberField = screen.getByLabelText('Phone Number');
    const dateOfBirthField = screen.getByLabelText('Date of Birth');
    const nextButton = screen.getByRole('button', { name: 'Next' });

    userEvent.type(emailField, 'john.doe@example.com');
    userEvent.type(phoneNumberField, '1234567890');
    userEvent.type(dateOfBirthField, '1990-01-01');
    fireEvent.click(nextButton);

    // Replace the following line with a test that checks if the form submission was successful
    // For example, check if the next step is rendered, or if the store has been updated with the submitted data
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for a second before checking the result
  });
});
