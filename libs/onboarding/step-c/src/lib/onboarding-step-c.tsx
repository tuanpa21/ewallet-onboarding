import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { Box, Button } from '@mui/material';
import { useOnboardingStore } from '@ewallet-onboarding/onboarding/store';

interface StepCFormInputs {
  purposes: {
    [key: string]: boolean;
  };
}

const purposes = [
  'Online shopping',
  'Peer-to-peer payments',
  'Investment',
  'Bills payment',
  'Others',
];

export function OnboardingStepC() {
  const { setData, onNext, onBack, stepC } = useOnboardingStore();
  const { control, handleSubmit } = useForm<StepCFormInputs>({
    defaultValues: {
      purposes: Object.fromEntries(
        purposes.map((purpose) => [purpose, stepC.purposes.includes(purpose)])
      ),
    },
  });

  const onSubmit = (data: StepCFormInputs) => {
    const selectedPurposes = Object.entries(data.purposes)
      .filter(([, value]) => value)
      .map(([key]) => key);

    setData('stepC', { purposes: selectedPurposes });
    onNext();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '100%' }}
    >
      <FormControl fullWidth margin="normal">
        <FormLabel component="legend">Select E-Wallet purposes</FormLabel>
        <FormGroup>
          {purposes.map((purpose, index) => (
            <FormControlLabel
              key={index}
              control={
                <Controller
                  name={`purposes.${purpose}`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox {...field} color="primary" />
                  )}
                />
              }
              label={purpose}
            />
          ))}
        </FormGroup>
      </FormControl>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={onBack} fullWidth>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Finish
        </Button>
      </Box>
    </Box>
  );
}

export default OnboardingStepC;
