import React, { Suspense } from 'react';

import {
  Box,
  Card,
  CardContent,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import { steps } from '@ewallet-onboarding/onboarding/config';
import { useOnboardingStore } from '@ewallet-onboarding/onboarding/store';
import LoadingScreen from '@ewallet-onboarding/onboarding/loading';

const ReviewScreen = React.lazy(
  () => import('@ewallet-onboarding/onboarding/review')
);
const SuccessScreen = React.lazy(
  () => import('@ewallet-onboarding/onboarding/success')
);

export function OnboardingContainer() {
  const { activeStep, showConfirm, showSuccess } = useOnboardingStore();

  const renderContent = () => {
    if (showSuccess) {
      return <SuccessScreen />;
    }
    if (showConfirm) {
      return <ReviewScreen />;
    }
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ background: '#efeff1', padding: '2rem', minHeight: '100vh' }}
      >
        <Card sx={{ minWidth: '60%', padding: '2rem' }}>
          <CardContent>
            <Typography variant="h4" align="center">
              E-Wallet Onboarding
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              sx={{ marginBottom: '1rem' }}
            >
              Thank you for registering! Let's get started with the onboarding
              process.
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel>{step.label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Typography
              variant="subtitle1"
              align="center"
              gutterBottom
              sx={{ marginTop: '1rem' }}
            >
              {steps[activeStep].description}
            </Typography>
            <StepComponent />
          </CardContent>
        </Card>
      </Box>
    );
  };

  const StepComponent = steps[activeStep].component;

  return <Suspense fallback={<LoadingScreen />}>{renderContent()}</Suspense>;
}

export default OnboardingContainer;
