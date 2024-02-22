/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LocationCreateFormInputValues = {
    address?: string;
    city?: string;
    link?: string;
    state?: string;
};
export declare type LocationCreateFormValidationValues = {
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    link?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LocationCreateFormOverridesProps = {
    LocationCreateFormGrid?: FormProps<GridProps>;
    address?: FormProps<TextFieldProps>;
    city?: FormProps<TextFieldProps>;
    link?: FormProps<TextFieldProps>;
    state?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LocationCreateFormProps = React.PropsWithChildren<{
    overrides?: LocationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onSuccess?: (fields: LocationCreateFormInputValues) => void;
    onError?: (fields: LocationCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LocationCreateFormInputValues) => LocationCreateFormInputValues;
    onValidate?: LocationCreateFormValidationValues;
} & React.CSSProperties>;
export default function LocationCreateForm(props: LocationCreateFormProps): React.ReactElement;
