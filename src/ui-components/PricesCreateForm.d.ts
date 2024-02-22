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
export declare type PricesCreateFormInputValues = {
    rentCost?: number;
    rentCostDetails?: string;
};
export declare type PricesCreateFormValidationValues = {
    rentCost?: ValidationFunction<number>;
    rentCostDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PricesCreateFormOverridesProps = {
    PricesCreateFormGrid?: FormProps<GridProps>;
    rentCost?: FormProps<TextFieldProps>;
    rentCostDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PricesCreateFormProps = React.PropsWithChildren<{
    overrides?: PricesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PricesCreateFormInputValues) => PricesCreateFormInputValues;
    onSuccess?: (fields: PricesCreateFormInputValues) => void;
    onError?: (fields: PricesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PricesCreateFormInputValues) => PricesCreateFormInputValues;
    onValidate?: PricesCreateFormValidationValues;
} & React.CSSProperties>;
export default function PricesCreateForm(props: PricesCreateFormProps): React.ReactElement;
