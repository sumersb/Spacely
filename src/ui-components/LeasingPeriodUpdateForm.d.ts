/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LeasingPeriod } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LeasingPeriodUpdateFormInputValues = {
    starting?: string;
    ending?: string;
    extention?: boolean;
    availabilityDetails?: string;
    shortTerm?: boolean;
    longTerm?: boolean;
};
export declare type LeasingPeriodUpdateFormValidationValues = {
    starting?: ValidationFunction<string>;
    ending?: ValidationFunction<string>;
    extention?: ValidationFunction<boolean>;
    availabilityDetails?: ValidationFunction<string>;
    shortTerm?: ValidationFunction<boolean>;
    longTerm?: ValidationFunction<boolean>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LeasingPeriodUpdateFormOverridesProps = {
    LeasingPeriodUpdateFormGrid?: FormProps<GridProps>;
    starting?: FormProps<TextFieldProps>;
    ending?: FormProps<TextFieldProps>;
    extention?: FormProps<SwitchFieldProps>;
    availabilityDetails?: FormProps<TextFieldProps>;
    shortTerm?: FormProps<SwitchFieldProps>;
    longTerm?: FormProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type LeasingPeriodUpdateFormProps = React.PropsWithChildren<{
    overrides?: LeasingPeriodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    leasingPeriod?: LeasingPeriod;
    onSubmit?: (fields: LeasingPeriodUpdateFormInputValues) => LeasingPeriodUpdateFormInputValues;
    onSuccess?: (fields: LeasingPeriodUpdateFormInputValues) => void;
    onError?: (fields: LeasingPeriodUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: LeasingPeriodUpdateFormInputValues) => LeasingPeriodUpdateFormInputValues;
    onValidate?: LeasingPeriodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LeasingPeriodUpdateForm(props: LeasingPeriodUpdateFormProps): React.ReactElement;
