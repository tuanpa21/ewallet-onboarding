import { useState } from 'react';

import {
  Box,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import {
  steps,
  useOnboardingStore,
} from '@ewallet-onboarding/onboarding/config';

export function OnboardingContainer() {
  const onboardingData = useOnboardingStore((state) => state);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const StepComponent = steps[activeStep].component;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#efeff1', padding: '2rem', minHeight: '100vh' }}
    >
      <Card sx={{ minWidth: '60%', padding: '2rem' }}>
        <CardContent>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ marginBottom: '2rem' }}
          >
            E-Wallet Onboarding
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Typography variant="subtitle1" align="center" gutterBottom>
            {steps[activeStep].label}
          </Typography>
          {/* ... (StepComponent, Suspense, and Buttons) */}
        </CardContent>
      </Card>
    </Box>
  );
}

export default OnboardingContainer;
