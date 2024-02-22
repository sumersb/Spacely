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
export declare type FurnishingCreateFormInputValues = {
    furnish?: boolean;
    furnishDetail?: string;
};
export declare type FurnishingCreateFormValidationValues = {
    furnish?: ValidationFunction<boolean>;
    furnishDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FurnishingCreateFormOverridesProps = {
    FurnishingCreateFormGrid?: FormProps<GridProps>;
    furnish?: FormProps<SwitchFieldProps>;
    furnishDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FurnishingCreateFormProps = React.PropsWithChildren<{
    overrides?: FurnishingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FurnishingCreateFormInputValues) => FurnishingCreateFormInputValues;
    onSuccess?: (fields: FurnishingCreateFormInputValues) => void;
    onError?: (fields: FurnishingCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FurnishingCreateFormInputValues) => FurnishingCreateFormInputValues;
    onValidate?: FurnishingCreateFormValidationValues;
} & React.CSSProperties>;
export default function FurnishingCreateForm(props: FurnishingCreateFormProps): React.ReactElement;
