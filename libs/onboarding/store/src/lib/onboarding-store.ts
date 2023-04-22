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

type StepDataKeys = 'stepA' | 'stepB' | 'stepC';

export interface OnboardingData {
  activeStep: number;
  isCompleted: boolean;
  stepA: StepAData;
  stepB: StepBData;
  stepC: StepCData;
}

const initialState: OnboardingData = {
  activeStep: 0,
  isCompleted: false,
  stepA: { fullName: '', idNumber: '' },
  stepB: { email: '', phoneNumber: '', dateOfBirth: '' },
  stepC: { purposes: [] },
};

export const useOnboardingStore = create<
  OnboardingData & {
    setData: (
      step: StepDataKeys,
      data: Partial<StepAData | StepBData | StepCData>
    ) => void;
    onNext: () => void;
    onBack: () => void;
    onComplete: () => void;
  }
>((set, get) => ({
  ...initialState,
  setData: (
    step: StepDataKeys,
    data: Partial<StepAData | StepBData | StepCData>
  ) => set((state) => ({ ...state, [step]: { ...state[step], ...data } })),
  onNext: () => {
    const nextStep = get().activeStep + 1;
    if (nextStep < 3) {
      // TODO: Hardcoded length to avoid circular dependency
      set({ activeStep: nextStep });
    } else {
      get().onComplete();
    }
  },
  onBack: () => {
    const prevStep = get().activeStep - 1;
    if (prevStep >= 0) {
      set({ activeStep: prevStep });
    }
  },
  onComplete: () => {
    // Handle the completion logic here, e.g., navigate to a different page
    set({ isCompleted: true });
  },
}));
