import { Box, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface OnboardingSuccessProps {}

export function OnboardingSuccess(props: OnboardingSuccessProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ background: '#efeff1', padding: '2rem', minHeight: '100vh' }}
    >
      <Typography variant="h4" align="center">
        Thank you for providing your information!
      </Typography>
    </Box>
  );
}

export default OnboardingSuccess;
