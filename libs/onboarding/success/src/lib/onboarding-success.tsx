import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const CheckCircleIconTestId = 'check-circle-icon';

export function OnboardingSuccess() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#efeff1', padding: '2rem', minHeight: '100vh' }}
    >
      <Card sx={{ minWidth: '60%', padding: '2rem' }}>
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CheckCircleIcon
              sx={{
                fontSize: '5rem',
                color: '#4caf50',
                marginBottom: '1rem',
              }}
              data-testid={CheckCircleIconTestId}
            />
            <Typography variant="h4" align="center">
              Thank you for providing your information!
            </Typography>
            <Typography variant="subtitle1" align="center">
              We will review your information and get back to you shortly.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default OnboardingSuccess;
