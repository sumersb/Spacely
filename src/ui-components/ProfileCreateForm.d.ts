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
export declare type ProfileCreateFormInputValues = {
    hobbies?: string;
    occupation?: string;
    interests?: string;
    lifestyle?: string;
    preferName?: string;
    pronouns?: string;
};
export declare type ProfileCreateFormValidationValues = {
    hobbies?: ValidationFunction<string>;
    occupation?: ValidationFunction<string>;
    interests?: ValidationFunction<string>;
    lifestyle?: ValidationFunction<string>;
    preferName?: ValidationFunction<string>;
    pronouns?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCreateFormOverridesProps = {
    ProfileCreateFormGrid?: FormProps<GridProps>;
    hobbies?: FormProps<TextFieldProps>;
    occupation?: FormProps<TextFieldProps>;
    interests?: FormProps<TextFieldProps>;
    lifestyle?: FormProps<TextFieldProps>;
    preferName?: FormProps<TextFieldProps>;
    pronouns?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProfileCreateFormProps = React.PropsWithChildren<{
    overrides?: ProfileCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onSuccess?: (fields: ProfileCreateFormInputValues) => void;
    onError?: (fields: ProfileCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ProfileCreateFormInputValues) => ProfileCreateFormInputValues;
    onValidate?: ProfileCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProfileCreateForm(props: ProfileCreateFormProps): React.ReactElement;
