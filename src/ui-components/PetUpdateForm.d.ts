/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetUpdateFormInputValues = {
    pet?: boolean;
    petDetail?: string;
};
export declare type PetUpdateFormValidationValues = {
    pet?: ValidationFunction<boolean>;
    petDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetUpdateFormOverridesProps = {
    PetUpdateFormGrid?: FormProps<GridProps>;
    pet?: FormProps<SwitchFieldProps>;
    petDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetUpdateFormProps = React.PropsWithChildren<{
    overrides?: PetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pet?: Pet;
    onSubmit?: (fields: PetUpdateFormInputValues) => PetUpdateFormInputValues;
    onSuccess?: (fields: PetUpdateFormInputValues) => void;
    onError?: (fields: PetUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PetUpdateFormInputValues) => PetUpdateFormInputValues;
    onValidate?: PetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PetUpdateForm(props: PetUpdateFormProps): React.ReactElement;
