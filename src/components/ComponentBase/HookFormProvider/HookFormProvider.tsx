import Box from '@mui/material/Box';
import { FormHTMLAttributes, PropsWithChildren } from 'react';

import {
  FormProvider as Form,
  FieldValues,
  UseFormReturn,
  useForm
} from 'react-hook-form';

interface FormProviderProps<T extends FieldValues> {
  formProps?: FormHTMLAttributes<HTMLFormElement>;
  methods?: UseFormReturn<T>;
  shouldPressKey?: boolean;
}

const HookFormProvider = <T extends FieldValues>({
  children,
  formProps = {},
  methods,
  shouldPressKey
}: PropsWithChildren<FormProviderProps<T>>) => {
  const anotherMethods = useForm<T>();
  const finalMethods = methods ? methods : anotherMethods;

  return (
    <Form {...finalMethods}>
      <form {...formProps}>
        {children}

        {/* Allow enter to submit */}
        {shouldPressKey ? (
          <Box display="none">
            <input type="submit" />
          </Box>
        ) : null}
      </form>
    </Form>
  );
};

export default HookFormProvider;
