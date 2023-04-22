// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { OnboardingContainer } from '@ewallet-onboarding/onboarding/container';
import { CssBaseline } from '@mui/material';

export function App() {
  return (
    <>
      <CssBaseline />
      <OnboardingContainer />
    </>
  );
}

export default App;
