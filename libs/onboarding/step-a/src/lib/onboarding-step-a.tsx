import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Box, FormControl, TextField } from '@mui/material';
import { useOnboardingStore } from '@ewallet-onboarding/onboarding/store';

const schema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  idNumber: yup.string().required('ID number is required'),
});

interface StepAFormInputs {
  fullName: string;
  idNumber: string;
}

export function OnboardingStepA() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<StepAFormInputs>({
    resolver: yupResolver(schema),
  });

  const { setData, onNext } = useOnboardingStore();

  const onSubmit = (data: StepAFormInputs) => {
    setData('stepA', data);
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
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Full Name"
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth margin="normal">
        <Controller
          name="idNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="ID Number"
              error={!!errors.idNumber}
              helperText={errors.idNumber?.message}
            />
          )}
        />
      </FormControl>
      {/* Add buttons or other form elements as needed */}
    </Box>
  );
}

export default OnboardingStepA;
