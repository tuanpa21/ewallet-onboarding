import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have "E-Wallet Onboarding" as the title', async () => {
    render(<App />);
    const title = await screen.findByRole('heading', {
      name: 'E-Wallet Onboarding',
    });
    expect(title).toBeInTheDocument();
  });
});
