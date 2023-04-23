import { steps } from './onboarding-config';

describe('onboardingConfig', () => {
  it('should have the correct number of steps', () => {
    expect(steps.length).toBe(3);
  });

  it('should have the required properties for each step', () => {
    steps.forEach((step) => {
      expect(step).toHaveProperty('label');
      expect(step).toHaveProperty('component');
      expect(step).toHaveProperty('description');
    });
  });
});
