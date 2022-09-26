import Box from '@mui/material/Box';
import { FormHTMLAttributes, PropsWithChildren } from 'react';

import {
  FormProvider,
  FieldValues,
  UseFormReturn,
  useForm
} from 'react-hook-form';

interface FormProviderProps<T extends FieldValues> {
  formProps?: FormHTMLAttributes<HTMLFormElement>;
  methods?: UseFormReturn<T>;
  shouldPressKey?: boolean;
  onSubmit?: () => void;
}

const HookFormProvider = <T extends FieldValues>({
  children,
  formProps = {},
  methods,
  shouldPressKey,
  onSubmit
}: PropsWithChildren<FormProviderProps<T>>) => {
  const anotherMethods = useForm<T>();
  const finalMethods = methods ? methods : anotherMethods;

  return (
    <FormProvider {...finalMethods}>
      <form onSubmit={onSubmit} {...formProps}>
        {children}

        {/* Allow enter to submit */}
        {shouldPressKey ? (
          <Box display="none">
            <input type="submit" />
          </Box>
        ) : null}
      </form>
    </FormProvider>
  );
};

export default HookFormProvider;
