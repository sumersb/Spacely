/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LaundryCreateFormInputValues = {
    inUnit?: boolean;
    laundryDetail?: string;
};
export declare type LaundryCreateFormValidationValues = {
    inUnit?: ValidationFunction<boolean>;
    laundryDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LaundryCreateFormOverridesProps = {
    LaundryCreateFormGrid?: FormProps<GridProps>;
    inUnit?: FormProps<SwitchFieldProps>;
    laundryDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LaundryCreateFormProps = React.PropsWithChildren<{
    overrides?: LaundryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LaundryCreateFormInputValues) => LaundryCreateFormInputValues;
    onSuccess?: (fields: LaundryCreateFormInputValues) => void;
    onError?: (fields: LaundryCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LaundryCreateFormInputValues) => LaundryCreateFormInputValues;
    onValidate?: LaundryCreateFormValidationValues;
} & React.CSSProperties>;
export default function LaundryCreateForm(props: LaundryCreateFormProps): React.ReactElement;
