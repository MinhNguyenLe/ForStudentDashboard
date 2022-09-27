import { TextField, TextFieldProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface RTextFieldWithControllerProps extends Omit<TextFieldProps, 'name'> {
  name: string;
}

function RTextFieldWithController({
  name,
  ...props
}: RTextFieldWithControllerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          error={!!error}
          helperText={error['message']}
          // {...props}
        />
      )}
    />
  );
}

export default RTextFieldWithController;
