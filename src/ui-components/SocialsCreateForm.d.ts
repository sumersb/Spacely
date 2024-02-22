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
export declare type SocialsCreateFormInputValues = {
    instaLink?: string;
    facebookLink?: string;
    otherLink?: string;
    instahandler?: string;
    socialDetails?: string;
};
export declare type SocialsCreateFormValidationValues = {
    instaLink?: ValidationFunction<string>;
    facebookLink?: ValidationFunction<string>;
    otherLink?: ValidationFunction<string>;
    instahandler?: ValidationFunction<string>;
    socialDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialsCreateFormOverridesProps = {
    SocialsCreateFormGrid?: FormProps<GridProps>;
    instaLink?: FormProps<TextFieldProps>;
    facebookLink?: FormProps<TextFieldProps>;
    otherLink?: FormProps<TextFieldProps>;
    instahandler?: FormProps<TextFieldProps>;
    socialDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SocialsCreateFormProps = React.PropsWithChildren<{
    overrides?: SocialsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SocialsCreateFormInputValues) => SocialsCreateFormInputValues;
    onSuccess?: (fields: SocialsCreateFormInputValues) => void;
    onError?: (fields: SocialsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SocialsCreateFormInputValues) => SocialsCreateFormInputValues;
    onValidate?: SocialsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SocialsCreateForm(props: SocialsCreateFormProps): React.ReactElement;
