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
export declare type CurrentRoommatesDetailsCreateFormInputValues = {
    currentRoomatesNum?: number;
    indivisualRoommateDetail?: string;
};
export declare type CurrentRoommatesDetailsCreateFormValidationValues = {
    currentRoomatesNum?: ValidationFunction<number>;
    indivisualRoommateDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentRoommatesDetailsCreateFormOverridesProps = {
    CurrentRoommatesDetailsCreateFormGrid?: FormProps<GridProps>;
    currentRoomatesNum?: FormProps<TextFieldProps>;
    indivisualRoommateDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CurrentRoommatesDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: CurrentRoommatesDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CurrentRoommatesDetailsCreateFormInputValues) => CurrentRoommatesDetailsCreateFormInputValues;
    onSuccess?: (fields: CurrentRoommatesDetailsCreateFormInputValues) => void;
    onError?: (fields: CurrentRoommatesDetailsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: CurrentRoommatesDetailsCreateFormInputValues) => CurrentRoommatesDetailsCreateFormInputValues;
    onValidate?: CurrentRoommatesDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CurrentRoommatesDetailsCreateForm(props: CurrentRoommatesDetailsCreateFormProps): React.ReactElement;
