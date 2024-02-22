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
export declare type SaveListCreateFormInputValues = {
    postID?: string;
    saveListTitle?: string;
    userID?: string;
};
export declare type SaveListCreateFormValidationValues = {
    postID?: ValidationFunction<string>;
    saveListTitle?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaveListCreateFormOverridesProps = {
    SaveListCreateFormGrid?: FormProps<GridProps>;
    postID?: FormProps<TextFieldProps>;
    saveListTitle?: FormProps<TextFieldProps>;
    userID?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SaveListCreateFormProps = React.PropsWithChildren<{
    overrides?: SaveListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SaveListCreateFormInputValues) => SaveListCreateFormInputValues;
    onSuccess?: (fields: SaveListCreateFormInputValues) => void;
    onError?: (fields: SaveListCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SaveListCreateFormInputValues) => SaveListCreateFormInputValues;
    onValidate?: SaveListCreateFormValidationValues;
} & React.CSSProperties>;
export default function SaveListCreateForm(props: SaveListCreateFormProps): React.ReactElement;
