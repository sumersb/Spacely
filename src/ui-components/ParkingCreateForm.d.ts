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
export declare type ParkingCreateFormInputValues = {
    parking?: boolean;
    parkingDetail?: string;
    cost?: number;
};
export declare type ParkingCreateFormValidationValues = {
    parking?: ValidationFunction<boolean>;
    parkingDetail?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParkingCreateFormOverridesProps = {
    ParkingCreateFormGrid?: FormProps<GridProps>;
    parking?: FormProps<SwitchFieldProps>;
    parkingDetail?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParkingCreateFormProps = React.PropsWithChildren<{
    overrides?: ParkingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ParkingCreateFormInputValues) => ParkingCreateFormInputValues;
    onSuccess?: (fields: ParkingCreateFormInputValues) => void;
    onError?: (fields: ParkingCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ParkingCreateFormInputValues) => ParkingCreateFormInputValues;
    onValidate?: ParkingCreateFormValidationValues;
} & React.CSSProperties>;
export default function ParkingCreateForm(props: ParkingCreateFormProps): React.ReactElement;
