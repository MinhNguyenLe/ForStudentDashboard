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
    onFormSubmit?: () => void;
    methods?: UseFormReturn<T>;
    shouldPressKey?: boolean;
}

const RHookFormProvider = <T extends FieldValues>({
    children,
    onFormSubmit,
    methods,
    formProps = {},
    shouldPressKey
}: PropsWithChildren<FormProviderProps<T>>) => {
    const anotherMethods = useForm<T>();
    const finalMethods = methods ? methods : anotherMethods;

    return (
        <FormProvider {...finalMethods}>
            <form
                id="form1"
                onSubmit={(e) => {
                    console.log(1);
                    onFormSubmit();

                    e.preventDefault();
                }}
                {...formProps}
            >
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

export default RHookFormProvider;
