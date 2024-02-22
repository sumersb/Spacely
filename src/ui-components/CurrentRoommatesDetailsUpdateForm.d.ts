/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CurrentRoommatesDetails } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CurrentRoommatesDetailsUpdateFormInputValues = {
    currentRoomatesNum?: number;
    indivisualRoommateDetail?: string;
};
export declare type CurrentRoommatesDetailsUpdateFormValidationValues = {
    currentRoomatesNum?: ValidationFunction<number>;
    indivisualRoommateDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentRoommatesDetailsUpdateFormOverridesProps = {
    CurrentRoommatesDetailsUpdateFormGrid?: FormProps<GridProps>;
    currentRoomatesNum?: FormProps<TextFieldProps>;
    indivisualRoommateDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentRoommatesDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CurrentRoommatesDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    currentRoommatesDetails?: CurrentRoommatesDetails;
    onSubmit?: (fields: CurrentRoommatesDetailsUpdateFormInputValues) => CurrentRoommatesDetailsUpdateFormInputValues;
    onSuccess?: (fields: CurrentRoommatesDetailsUpdateFormInputValues) => void;
    onError?: (fields: CurrentRoommatesDetailsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CurrentRoommatesDetailsUpdateFormInputValues) => CurrentRoommatesDetailsUpdateFormInputValues;
    onValidate?: CurrentRoommatesDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentRoommatesDetailsUpdateForm(props: CurrentRoommatesDetailsUpdateFormProps): React.ReactElement;
