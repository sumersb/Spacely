/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Bathroom } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BathroomUpdateFormInputValues = {
    bathroomNum?: number;
    bathroomDetails?: string;
};
export declare type BathroomUpdateFormValidationValues = {
    bathroomNum?: ValidationFunction<number>;
    bathroomDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BathroomUpdateFormOverridesProps = {
    BathroomUpdateFormGrid?: FormProps<GridProps>;
    bathroomNum?: FormProps<TextFieldProps>;
    bathroomDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BathroomUpdateFormProps = React.PropsWithChildren<{
    overrides?: BathroomUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bathroom?: Bathroom;
    onSubmit?: (fields: BathroomUpdateFormInputValues) => BathroomUpdateFormInputValues;
    onSuccess?: (fields: BathroomUpdateFormInputValues) => void;
    onError?: (fields: BathroomUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BathroomUpdateFormInputValues) => BathroomUpdateFormInputValues;
    onValidate?: BathroomUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BathroomUpdateForm(props: BathroomUpdateFormProps): React.ReactElement;
