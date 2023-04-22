import { OnboardingContainer } from '@ewallet-onboarding/onboarding/container';
import { Box, Card, CardContent, CssBaseline } from '@mui/material';

export function App() {
  return (
    <>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        padding="2rem"
        sx={{ background: '#efeff1' }}
      >
        <Card>
          <CardContent>
            <OnboardingContainer />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
