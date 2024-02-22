/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Prices } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PricesUpdateFormInputValues = {
    rentCost?: number;
    rentCostDetails?: string;
};
export declare type PricesUpdateFormValidationValues = {
    rentCost?: ValidationFunction<number>;
    rentCostDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PricesUpdateFormOverridesProps = {
    PricesUpdateFormGrid?: FormProps<GridProps>;
    rentCost?: FormProps<TextFieldProps>;
    rentCostDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PricesUpdateFormProps = React.PropsWithChildren<{
    overrides?: PricesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    prices?: Prices;
    onSubmit?: (fields: PricesUpdateFormInputValues) => PricesUpdateFormInputValues;
    onSuccess?: (fields: PricesUpdateFormInputValues) => void;
    onError?: (fields: PricesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PricesUpdateFormInputValues) => PricesUpdateFormInputValues;
    onValidate?: PricesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PricesUpdateForm(props: PricesUpdateFormProps): React.ReactElement;
