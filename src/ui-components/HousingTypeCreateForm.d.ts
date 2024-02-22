/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HousingTypeCreateFormInputValues = {
    house?: boolean;
    apartment?: boolean;
    condo?: boolean;
    townhouse?: boolean;
    housingDetail?: string;
};
export declare type HousingTypeCreateFormValidationValues = {
    house?: ValidationFunction<boolean>;
    apartment?: ValidationFunction<boolean>;
    condo?: ValidationFunction<boolean>;
    townhouse?: ValidationFunction<boolean>;
    housingDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HousingTypeCreateFormOverridesProps = {
    HousingTypeCreateFormGrid?: FormProps<GridProps>;
    house?: FormProps<SwitchFieldProps>;
    apartment?: FormProps<SwitchFieldProps>;
    condo?: FormProps<SwitchFieldProps>;
    townhouse?: FormProps<SwitchFieldProps>;
    housingDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HousingTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: HousingTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HousingTypeCreateFormInputValues) => HousingTypeCreateFormInputValues;
    onSuccess?: (fields: HousingTypeCreateFormInputValues) => void;
    onError?: (fields: HousingTypeCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HousingTypeCreateFormInputValues) => HousingTypeCreateFormInputValues;
    onValidate?: HousingTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function HousingTypeCreateForm(props: HousingTypeCreateFormProps): React.ReactElement;
