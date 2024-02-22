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
export declare type SearchingForRoommateCreateFormInputValues = {
    searching?: boolean;
    searchingFor?: string;
    notSearchingFor?: string;
    searchingExtraDetails?: string;
};
export declare type SearchingForRoommateCreateFormValidationValues = {
    searching?: ValidationFunction<boolean>;
    searchingFor?: ValidationFunction<string>;
    notSearchingFor?: ValidationFunction<string>;
    searchingExtraDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchingForRoommateCreateFormOverridesProps = {
    SearchingForRoommateCreateFormGrid?: FormProps<GridProps>;
    searching?: FormProps<SwitchFieldProps>;
    searchingFor?: FormProps<TextFieldProps>;
    notSearchingFor?: FormProps<TextFieldProps>;
    searchingExtraDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SearchingForRoommateCreateFormProps = React.PropsWithChildren<{
    overrides?: SearchingForRoommateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SearchingForRoommateCreateFormInputValues) => SearchingForRoommateCreateFormInputValues;
    onSuccess?: (fields: SearchingForRoommateCreateFormInputValues) => void;
    onError?: (fields: SearchingForRoommateCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SearchingForRoommateCreateFormInputValues) => SearchingForRoommateCreateFormInputValues;
    onValidate?: SearchingForRoommateCreateFormValidationValues;
} & React.CSSProperties>;
export default function SearchingForRoommateCreateForm(props: SearchingForRoommateCreateFormProps): React.ReactElement;
