/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Room } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RoomUpdateFormInputValues = {
    roomNum?: number;
    roomDetails?: string;
};
export declare type RoomUpdateFormValidationValues = {
    roomNum?: ValidationFunction<number>;
    roomDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RoomUpdateFormOverridesProps = {
    RoomUpdateFormGrid?: FormProps<GridProps>;
    roomNum?: FormProps<TextFieldProps>;
    roomDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RoomUpdateFormProps = React.PropsWithChildren<{
    overrides?: RoomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    room?: Room;
    onSubmit?: (fields: RoomUpdateFormInputValues) => RoomUpdateFormInputValues;
    onSuccess?: (fields: RoomUpdateFormInputValues) => void;
    onError?: (fields: RoomUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: RoomUpdateFormInputValues) => RoomUpdateFormInputValues;
    onValidate?: RoomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RoomUpdateForm(props: RoomUpdateFormProps): React.ReactElement;
