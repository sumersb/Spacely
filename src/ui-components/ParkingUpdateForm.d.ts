/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Parking } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ParkingUpdateFormInputValues = {
    parking?: boolean;
    parkingDetail?: string;
    cost?: number;
};
export declare type ParkingUpdateFormValidationValues = {
    parking?: ValidationFunction<boolean>;
    parkingDetail?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ParkingUpdateFormOverridesProps = {
    ParkingUpdateFormGrid?: FormProps<GridProps>;
    parking?: FormProps<SwitchFieldProps>;
    parkingDetail?: FormProps<TextFieldProps>;
    cost?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ParkingUpdateFormProps = React.PropsWithChildren<{
    overrides?: ParkingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    parking?: Parking;
    onSubmit?: (fields: ParkingUpdateFormInputValues) => ParkingUpdateFormInputValues;
    onSuccess?: (fields: ParkingUpdateFormInputValues) => void;
    onError?: (fields: ParkingUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ParkingUpdateFormInputValues) => ParkingUpdateFormInputValues;
    onValidate?: ParkingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ParkingUpdateForm(props: ParkingUpdateFormProps): React.ReactElement;
