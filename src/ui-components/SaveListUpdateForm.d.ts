/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SaveList } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SaveListUpdateFormInputValues = {
    postID?: string;
    saveListTitle?: string;
    userID?: string;
};
export declare type SaveListUpdateFormValidationValues = {
    postID?: ValidationFunction<string>;
    saveListTitle?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SaveListUpdateFormOverridesProps = {
    SaveListUpdateFormGrid?: FormProps<GridProps>;
    postID?: FormProps<TextFieldProps>;
    saveListTitle?: FormProps<TextFieldProps>;
    userID?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SaveListUpdateFormProps = React.PropsWithChildren<{
    overrides?: SaveListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    saveList?: SaveList;
    onSubmit?: (fields: SaveListUpdateFormInputValues) => SaveListUpdateFormInputValues;
    onSuccess?: (fields: SaveListUpdateFormInputValues) => void;
    onError?: (fields: SaveListUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SaveListUpdateFormInputValues) => SaveListUpdateFormInputValues;
    onValidate?: SaveListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SaveListUpdateForm(props: SaveListUpdateFormProps): React.ReactElement;
