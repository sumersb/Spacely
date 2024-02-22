/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Gym } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GymUpdateFormInputValues = {
    gym?: boolean;
    gymDetail?: string;
};
export declare type GymUpdateFormValidationValues = {
    gym?: ValidationFunction<boolean>;
    gymDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GymUpdateFormOverridesProps = {
    GymUpdateFormGrid?: FormProps<GridProps>;
    gym?: FormProps<SwitchFieldProps>;
    gymDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GymUpdateFormProps = React.PropsWithChildren<{
    overrides?: GymUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    gym?: Gym;
    onSubmit?: (fields: GymUpdateFormInputValues) => GymUpdateFormInputValues;
    onSuccess?: (fields: GymUpdateFormInputValues) => void;
    onError?: (fields: GymUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: GymUpdateFormInputValues) => GymUpdateFormInputValues;
    onValidate?: GymUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GymUpdateForm(props: GymUpdateFormProps): React.ReactElement;
