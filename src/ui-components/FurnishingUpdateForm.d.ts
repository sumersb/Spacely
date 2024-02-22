/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Furnishing } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FurnishingUpdateFormInputValues = {
    furnish?: boolean;
    furnishDetail?: string;
};
export declare type FurnishingUpdateFormValidationValues = {
    furnish?: ValidationFunction<boolean>;
    furnishDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FurnishingUpdateFormOverridesProps = {
    FurnishingUpdateFormGrid?: FormProps<GridProps>;
    furnish?: FormProps<SwitchFieldProps>;
    furnishDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FurnishingUpdateFormProps = React.PropsWithChildren<{
    overrides?: FurnishingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    furnishing?: Furnishing;
    onSubmit?: (fields: FurnishingUpdateFormInputValues) => FurnishingUpdateFormInputValues;
    onSuccess?: (fields: FurnishingUpdateFormInputValues) => void;
    onError?: (fields: FurnishingUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FurnishingUpdateFormInputValues) => FurnishingUpdateFormInputValues;
    onValidate?: FurnishingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FurnishingUpdateForm(props: FurnishingUpdateFormProps): React.ReactElement;
