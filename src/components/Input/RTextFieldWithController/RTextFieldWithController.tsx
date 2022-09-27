import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

function RTextFieldWithController({ name, ...props }: TextFieldProps) {
  const { control ,register} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          error={!!error}
          helperText={!!error ? error['message'] : null}
          {...props}
        />
      )}
    />
  );
}

export default RTextFieldWithController;
