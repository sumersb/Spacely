/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HousingType } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HousingTypeUpdateFormInputValues = {
    house?: boolean;
    apartment?: boolean;
    condo?: boolean;
    townhouse?: boolean;
    housingDetail?: string;
};
export declare type HousingTypeUpdateFormValidationValues = {
    house?: ValidationFunction<boolean>;
    apartment?: ValidationFunction<boolean>;
    condo?: ValidationFunction<boolean>;
    townhouse?: ValidationFunction<boolean>;
    housingDetail?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HousingTypeUpdateFormOverridesProps = {
    HousingTypeUpdateFormGrid?: FormProps<GridProps>;
    house?: FormProps<SwitchFieldProps>;
    apartment?: FormProps<SwitchFieldProps>;
    condo?: FormProps<SwitchFieldProps>;
    townhouse?: FormProps<SwitchFieldProps>;
    housingDetail?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HousingTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: HousingTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    housingType?: HousingType;
    onSubmit?: (fields: HousingTypeUpdateFormInputValues) => HousingTypeUpdateFormInputValues;
    onSuccess?: (fields: HousingTypeUpdateFormInputValues) => void;
    onError?: (fields: HousingTypeUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HousingTypeUpdateFormInputValues) => HousingTypeUpdateFormInputValues;
    onValidate?: HousingTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HousingTypeUpdateForm(props: HousingTypeUpdateFormProps): React.ReactElement;
