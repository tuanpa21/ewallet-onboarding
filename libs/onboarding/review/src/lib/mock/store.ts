export const mockUseOnboardingStore = {
  activeStep: 0,
  showConfirm: false,
  showSuccess: false,
  stepA: { fullName: '', idNumber: '' },
  stepB: { email: '', phoneNumber: '', dateOfBirth: '' },
  stepC: { purposes: [] },
};

export const useOnboardingStore = () => mockUseOnboardingStore;
