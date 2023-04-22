import create from 'zustand';

export interface StepAData {
  fullName: string;
  idNumber: string;
}

export interface StepBData {
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

export interface StepCData {
  purposes: string[];
}

export interface OnboardingData {
  stepA: StepAData;
  stepB: StepBData;
  stepC: StepCData;
}

const initialState: OnboardingData = {
  stepA: { fullName: '', idNumber: '' },
  stepB: { email: '', phoneNumber: '', dateOfBirth: '' },
  stepC: { purposes: [] },
};

export const useOnboardingStore = create<OnboardingData>((set) => ({
  ...initialState,
  setData: (
    step: keyof OnboardingData,
    data: Partial<StepAData | StepBData | StepCData>
  ) => set((state) => ({ ...state, [step]: { ...state[step], ...data } })),
}));
