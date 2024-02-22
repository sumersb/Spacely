/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Laundry } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LaundryUpdateFormInputValues = {
    inUnit?: boolean;
    laundryDetail?: string;
};
export declare type LaundryUpdateFormValidationValues = {
    inUnit?: ValidationFunction<boolean>;
    laundryDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LaundryUpdateFormOverridesProps = {
    LaundryUpdateFormGrid?: FormProps<GridProps>;
    inUnit?: FormProps<SwitchFieldProps>;
    laundryDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LaundryUpdateFormProps = React.PropsWithChildren<{
    overrides?: LaundryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    laundry?: Laundry;
    onSubmit?: (fields: LaundryUpdateFormInputValues) => LaundryUpdateFormInputValues;
    onSuccess?: (fields: LaundryUpdateFormInputValues) => void;
    onError?: (fields: LaundryUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LaundryUpdateFormInputValues) => LaundryUpdateFormInputValues;
    onValidate?: LaundryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LaundryUpdateForm(props: LaundryUpdateFormProps): React.ReactElement;
