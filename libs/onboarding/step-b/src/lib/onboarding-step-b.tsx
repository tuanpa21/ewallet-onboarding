import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useOnboardingStore } from '@ewallet-onboarding/onboarding/store';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
});

interface StepBFormInputs {
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
}

export function OnboardingStepB() {
  const { setData, onNext, onBack, stepB } = useOnboardingStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StepBFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: stepB,
  });

  const onSubmit = (data: StepBFormInputs) => {
    setData('stepB', data);
    onNext();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ width: '100%' }}
    >
      <FormControl fullWidth margin="normal">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Controller
          name="phoneNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone Number"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber?.message}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Controller
          name="dateOfBirth"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Date of Birth"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth?.message}
            />
          )}
        />
      </FormControl>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button onClick={onBack} fullWidth>
          Back
        </Button>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default OnboardingStepB;
