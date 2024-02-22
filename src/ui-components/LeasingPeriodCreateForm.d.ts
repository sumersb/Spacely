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
export declare type LeasingPeriodCreateFormInputValues = {
    starting?: string;
    ending?: string;
    extention?: boolean;
    availabilityDetails?: string;
    shortTerm?: boolean;
    longTerm?: boolean;
};
export declare type LeasingPeriodCreateFormValidationValues = {
    starting?: ValidationFunction<string>;
    ending?: ValidationFunction<string>;
    extention?: ValidationFunction<boolean>;
    availabilityDetails?: ValidationFunction<string>;
    shortTerm?: ValidationFunction<boolean>;
    longTerm?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeasingPeriodCreateFormOverridesProps = {
    LeasingPeriodCreateFormGrid?: FormProps<GridProps>;
    starting?: FormProps<TextFieldProps>;
    ending?: FormProps<TextFieldProps>;
    extention?: FormProps<SwitchFieldProps>;
    availabilityDetails?: FormProps<TextFieldProps>;
    shortTerm?: FormProps<SwitchFieldProps>;
    longTerm?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type LeasingPeriodCreateFormProps = React.PropsWithChildren<{
    overrides?: LeasingPeriodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LeasingPeriodCreateFormInputValues) => LeasingPeriodCreateFormInputValues;
    onSuccess?: (fields: LeasingPeriodCreateFormInputValues) => void;
    onError?: (fields: LeasingPeriodCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LeasingPeriodCreateFormInputValues) => LeasingPeriodCreateFormInputValues;
    onValidate?: LeasingPeriodCreateFormValidationValues;
} & React.CSSProperties>;
export default function LeasingPeriodCreateForm(props: LeasingPeriodCreateFormProps): React.ReactElement;
