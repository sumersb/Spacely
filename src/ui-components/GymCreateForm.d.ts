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
export declare type GymCreateFormInputValues = {
    gym?: boolean;
    gymDetail?: string;
};
export declare type GymCreateFormValidationValues = {
    gym?: ValidationFunction<boolean>;
    gymDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GymCreateFormOverridesProps = {
    GymCreateFormGrid?: FormProps<GridProps>;
    gym?: FormProps<SwitchFieldProps>;
    gymDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GymCreateFormProps = React.PropsWithChildren<{
    overrides?: GymCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GymCreateFormInputValues) => GymCreateFormInputValues;
    onSuccess?: (fields: GymCreateFormInputValues) => void;
    onError?: (fields: GymCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GymCreateFormInputValues) => GymCreateFormInputValues;
    onValidate?: GymCreateFormValidationValues;
} & React.CSSProperties>;
export default function GymCreateForm(props: GymCreateFormProps): React.ReactElement;
