import { act } from 'react-dom/test-utils';
import {
  StepAData,
  StepBData,
  StepCData,
  useOnboardingStore,
} from './onboarding-store';

describe('Onboarding Store', () => {
  afterEach(() => {
    // Reset the store to its initial state after each test
    act(() => {
      useOnboardingStore.setState({
        activeStep: 0,
        isFormDone: false,
        showConfirm: false,
        showSuccess: false,
        stepA: { fullName: '', idNumber: '' },
        stepB: { email: '', phoneNumber: '', dateOfBirth: '' },
        stepC: { purposes: [] },
      });
    });
  });

  it('should update stepA data', () => {
    const newData: Partial<StepAData> = {
      fullName: 'John Doe',
      idNumber: '123456',
    };

    act(() => {
      useOnboardingStore.getState().setData('stepA', newData);
    });

    expect(useOnboardingStore.getState().stepA).toEqual(newData);
  });

  it('should update stepB data', () => {
    const newData: Partial<StepBData> = {
      email: 'john@example.com',
      phoneNumber: '1234567890',
      dateOfBirth: '2000-01-01',
    };

    act(() => {
      useOnboardingStore.getState().setData('stepB', newData);
    });

    expect(useOnboardingStore.getState().stepB).toEqual(newData);
  });

  it('should update stepC data', () => {
    const newData: Partial<StepCData> = { purposes: ['purpose1', 'purpose2'] };

    act(() => {
      useOnboardingStore.getState().setData('stepC', newData);
    });

    expect(useOnboardingStore.getState().stepC).toEqual(newData);
  });

  it('should move to next step', () => {
    act(() => {
      useOnboardingStore.getState().onNext();
    });

    expect(useOnboardingStore.getState().activeStep).toBe(1);
  });

  it('should move to previous step', () => {
    // Move to the next step first
    console.log(useOnboardingStore.getState().activeStep);
    act(() => {
      useOnboardingStore.getState().onNext();
    });
    console.log(useOnboardingStore.getState().activeStep);
    act(() => {
      useOnboardingStore.getState().onBack();
    });
    console.log(useOnboardingStore.getState().activeStep);
    expect(useOnboardingStore.getState().activeStep).toBe(0);
  });

  it('should show confirm step when reaching the last step', () => {
    // Move to the last step
    act(() => {
      useOnboardingStore.getState().onNext();
      useOnboardingStore.getState().onNext();
    });

    act(() => {
      useOnboardingStore.getState().onNext();
    });

    expect(useOnboardingStore.getState().showConfirm).toBe(true);
  });

  it('should move back to the last step from review screen', () => {
    // Move to the review screen
    act(() => {
      useOnboardingStore.getState().onNext();
      useOnboardingStore.getState().onNext();
      useOnboardingStore.getState().onNext();
    });

    act(() => {
      useOnboardingStore.getState().onBackToForm();
    });

    expect(useOnboardingStore.getState().activeStep).toBe(2);
    expect(useOnboardingStore.getState().showConfirm).toBe(false);
  });

  it('should show success step when completed', () => {
    act(() => {
      useOnboardingStore.getState().onComplete();
    });

    expect(useOnboardingStore.getState().showSuccess).toBe(true);
  });
});
