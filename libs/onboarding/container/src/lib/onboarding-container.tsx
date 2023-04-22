import { Suspense, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { steps } from '@ewallet-onboarding/onboarding/config';

export function OnboardingContainer() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const StepComponent = steps[activeStep].component;

  return (
    <Box>
      {/* ... */}
      {activeStep === steps.length ? (
        <Typography>{/* Display the collected data */}</Typography>
      ) : (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <StepComponent />
          </Suspense>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </>
      )}
    </Box>
  );
}

export default OnboardingContainer;
