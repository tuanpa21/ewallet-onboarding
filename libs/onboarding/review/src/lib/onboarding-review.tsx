import React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { useOnboardingStore } from '@ewallet-onboarding/onboarding/store';

export function OnboardingReview() {
  const { stepA, stepB, stepC, onBackToForm, onComplete } =
    useOnboardingStore();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: '#efeff1',
        padding: '2rem',
        minHeight: '100vh',
        minWidth: '60%',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Review Your Information
      </Typography>
      <Box sx={{ width: '50%', margin: '0 auto' }}>
        <Card sx={{ width: '100%', marginBottom: '2rem' }}>
          <CardContent>
            <Typography variant="h6">Basic Information</Typography>
            <Typography>Full Name: {stepA.fullName}</Typography>
            <Typography>ID Number: {stepA.idNumber}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', marginBottom: '2rem' }}>
          <CardContent>
            <Typography variant="h6">Additional Information</Typography>
            <Typography>Email: {stepB.email}</Typography>
            <Typography>Phone Number: {stepB.phoneNumber}</Typography>
            <Typography>Date of Birth: {stepB.dateOfBirth}</Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: '100%', marginBottom: '2rem' }}>
          <CardContent>
            <Typography variant="h6">Purposes:</Typography>
            <ul style={{ margin: 0 }}>
              {stepC.purposes.map((purpose, index) => (
                <li key={index}>{purpose}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Box display="flex">
          <Button
            variant="outlined"
            onClick={onBackToForm}
            sx={{ marginRight: '1rem' }}
            fullWidth
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={onComplete}
            sx={{ backgroundColor: '#1976d2', color: '#ffffff' }}
            fullWidth
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default OnboardingReview;
