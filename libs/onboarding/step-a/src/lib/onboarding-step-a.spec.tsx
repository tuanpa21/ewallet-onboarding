import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OnboardingStepA from './onboarding-step-a';
import '@testing-library/jest-dom';

describe('OnboardingStepA', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OnboardingStepA />);
    expect(baseElement).toBeInTheDocument();
  });

  it('should render the full name field', () => {
    render(<OnboardingStepA />);
    const fullNameField = screen.getByLabelText('Full Name');
    expect(fullNameField).toBeInTheDocument();
  });

  it('should render the ID number field', () => {
    render(<OnboardingStepA />);
    const idNumberField = screen.getByLabelText('ID Number');
    expect(idNumberField).toBeInTheDocument();
  });

  it('should render the next button', () => {
    render(<OnboardingStepA />);
    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeInTheDocument();
  });

  it('should show errors when submitting the form with empty fields', async () => {
    render(<OnboardingStepA />);
    const nextButton = screen.getByRole('button', { name: 'Next' });

    fireEvent.click(nextButton);

    const fullNameError = await screen.findByText('Full name is required');
    expect(fullNameError).toBeInTheDocument();

    const idNumberError = await screen.findByText('ID number is required');
    expect(idNumberError).toBeInTheDocument();
  });

  it('should submit the form with valid data', async () => {
    render(<OnboardingStepA />);
    const fullNameField = screen.getByLabelText('Full Name');
    const idNumberField = screen.getByLabelText('ID Number');
    const nextButton = screen.getByRole('button', { name: 'Next' });

    userEvent.type(fullNameField, 'John Doe');
    userEvent.type(idNumberField, '123456789');
    fireEvent.click(nextButton);

    // Replace the following line with a test that checks if the form submission was successful
    // For example, check if the next step is rendered, or if the store has been updated with the submitted data
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for a second before checking the result
  });
});
