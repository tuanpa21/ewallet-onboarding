import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useOnboardingStore } from '@ewallet-onboarding/onboarding/store';

export function OnboardingReview() {
  const { stepA, stepB, stepC, onBack, onComplete } = useOnboardingStore();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#efeff1', padding: '2rem', minHeight: '100vh' }}
    >
      <Typography variant="h4" align="center">
        Review Your Information
      </Typography>
      <Box>
        <Typography variant="h6">Step A</Typography>
        <Typography>Full Name: {stepA.fullName}</Typography>
        <Typography>ID Number: {stepA.idNumber}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Step B</Typography>
        <Typography>Email: {stepB.email}</Typography>
        <Typography>Phone Number: {stepB.phoneNumber}</Typography>
        <Typography>Date of Birth: {stepB.dateOfBirth}</Typography>
      </Box>
      <Box>
        <Typography variant="h6">Step C</Typography>
        <Typography>Purposes:</Typography>
        <ul>
          {stepC.purposes.map((purpose, index) => (
            <li key={index}>{purpose}</li>
          ))}
        </ul>
      </Box>
      <Box>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={onComplete}>
          Confirm
        </Button>
      </Box>
    </Box>
  );
}

export default OnboardingReview;
