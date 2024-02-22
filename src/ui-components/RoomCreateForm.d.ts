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
export declare type RoomCreateFormInputValues = {
    roomNum?: number;
    roomDetails?: string;
};
export declare type RoomCreateFormValidationValues = {
    roomNum?: ValidationFunction<number>;
    roomDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoomCreateFormOverridesProps = {
    RoomCreateFormGrid?: FormProps<GridProps>;
    roomNum?: FormProps<TextFieldProps>;
    roomDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoomCreateFormProps = React.PropsWithChildren<{
    overrides?: RoomCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RoomCreateFormInputValues) => RoomCreateFormInputValues;
    onSuccess?: (fields: RoomCreateFormInputValues) => void;
    onError?: (fields: RoomCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RoomCreateFormInputValues) => RoomCreateFormInputValues;
    onValidate?: RoomCreateFormValidationValues;
} & React.CSSProperties>;
export default function RoomCreateForm(props: RoomCreateFormProps): React.ReactElement;
