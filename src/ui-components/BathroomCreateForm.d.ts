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
export declare type BathroomCreateFormInputValues = {
    bathroomNum?: number;
    bathroomDetails?: string;
};
export declare type BathroomCreateFormValidationValues = {
    bathroomNum?: ValidationFunction<number>;
    bathroomDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BathroomCreateFormOverridesProps = {
    BathroomCreateFormGrid?: FormProps<GridProps>;
    bathroomNum?: FormProps<TextFieldProps>;
    bathroomDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BathroomCreateFormProps = React.PropsWithChildren<{
    overrides?: BathroomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BathroomCreateFormInputValues) => BathroomCreateFormInputValues;
    onSuccess?: (fields: BathroomCreateFormInputValues) => void;
    onError?: (fields: BathroomCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BathroomCreateFormInputValues) => BathroomCreateFormInputValues;
    onValidate?: BathroomCreateFormValidationValues;
} & React.CSSProperties>;
export default function BathroomCreateForm(props: BathroomCreateFormProps): React.ReactElement;
