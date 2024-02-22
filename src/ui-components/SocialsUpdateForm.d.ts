/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Socials } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SocialsUpdateFormInputValues = {
    instaLink?: string;
    facebookLink?: string;
    otherLink?: string;
    instahandler?: string;
    socialDetails?: string;
};
export declare type SocialsUpdateFormValidationValues = {
    instaLink?: ValidationFunction<string>;
    facebookLink?: ValidationFunction<string>;
    otherLink?: ValidationFunction<string>;
    instahandler?: ValidationFunction<string>;
    socialDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialsUpdateFormOverridesProps = {
    SocialsUpdateFormGrid?: FormProps<GridProps>;
    instaLink?: FormProps<TextFieldProps>;
    facebookLink?: FormProps<TextFieldProps>;
    otherLink?: FormProps<TextFieldProps>;
    instahandler?: FormProps<TextFieldProps>;
    socialDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SocialsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SocialsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    socials?: Socials;
    onSubmit?: (fields: SocialsUpdateFormInputValues) => SocialsUpdateFormInputValues;
    onSuccess?: (fields: SocialsUpdateFormInputValues) => void;
    onError?: (fields: SocialsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SocialsUpdateFormInputValues) => SocialsUpdateFormInputValues;
    onValidate?: SocialsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SocialsUpdateForm(props: SocialsUpdateFormProps): React.ReactElement;
