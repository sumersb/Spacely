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
export declare type PostingImagesCreateFormInputValues = {
    images?: string[];
    mainImages?: string;
};
export declare type PostingImagesCreateFormValidationValues = {
    images?: ValidationFunction<string>;
    mainImages?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostingImagesCreateFormOverridesProps = {
    PostingImagesCreateFormGrid?: FormProps<GridProps>;
    images?: FormProps<TextFieldProps>;
    mainImages?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostingImagesCreateFormProps = React.PropsWithChildren<{
    overrides?: PostingImagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostingImagesCreateFormInputValues) => PostingImagesCreateFormInputValues;
    onSuccess?: (fields: PostingImagesCreateFormInputValues) => void;
    onError?: (fields: PostingImagesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PostingImagesCreateFormInputValues) => PostingImagesCreateFormInputValues;
    onValidate?: PostingImagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostingImagesCreateForm(props: PostingImagesCreateFormProps): React.ReactElement;
