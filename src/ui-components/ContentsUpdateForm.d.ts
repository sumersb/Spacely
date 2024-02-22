/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Contents } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContentsUpdateFormInputValues = {
    gym?: string;
    parking?: string;
    housingType?: string;
    pets?: string;
    ac?: boolean;
    heater?: boolean;
    laundry?: string;
    furnishing?: string;
    Gym?: string;
    Parking?: string;
    HousingType?: string;
    Pet?: string;
    Laundry?: string;
    Furnishing?: string;
    contentsGymId?: string;
    contentsParkingId?: string;
    contentsHousingTypeId?: string;
    contentsPetId?: string;
    contentsLaundryId?: string;
    contentsFurnishingId?: string;
};
export declare type ContentsUpdateFormValidationValues = {
    gym?: ValidationFunction<string>;
    parking?: ValidationFunction<string>;
    housingType?: ValidationFunction<string>;
    pets?: ValidationFunction<string>;
    ac?: ValidationFunction<boolean>;
    heater?: ValidationFunction<boolean>;
    laundry?: ValidationFunction<string>;
    furnishing?: ValidationFunction<string>;
    Gym?: ValidationFunction<string>;
    Parking?: ValidationFunction<string>;
    HousingType?: ValidationFunction<string>;
    Pet?: ValidationFunction<string>;
    Laundry?: ValidationFunction<string>;
    Furnishing?: ValidationFunction<string>;
    contentsGymId?: ValidationFunction<string>;
    contentsParkingId?: ValidationFunction<string>;
    contentsHousingTypeId?: ValidationFunction<string>;
    contentsPetId?: ValidationFunction<string>;
    contentsLaundryId?: ValidationFunction<string>;
    contentsFurnishingId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentsUpdateFormOverridesProps = {
    ContentsUpdateFormGrid?: FormProps<GridProps>;
    gym?: FormProps<TextFieldProps>;
    parking?: FormProps<TextFieldProps>;
    housingType?: FormProps<TextFieldProps>;
    pets?: FormProps<TextFieldProps>;
    ac?: FormProps<SwitchFieldProps>;
    heater?: FormProps<SwitchFieldProps>;
    laundry?: FormProps<TextFieldProps>;
    furnishing?: FormProps<TextFieldProps>;
    Gym?: FormProps<SelectFieldProps>;
    Parking?: FormProps<SelectFieldProps>;
    HousingType?: FormProps<SelectFieldProps>;
    Pet?: FormProps<SelectFieldProps>;
    Laundry?: FormProps<SelectFieldProps>;
    Furnishing?: FormProps<SelectFieldProps>;
    contentsGymId?: FormProps<TextFieldProps>;
    contentsParkingId?: FormProps<TextFieldProps>;
    contentsHousingTypeId?: FormProps<TextFieldProps>;
    contentsPetId?: FormProps<TextFieldProps>;
    contentsLaundryId?: FormProps<TextFieldProps>;
    contentsFurnishingId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContentsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContentsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contents?: Contents;
    onSubmit?: (fields: ContentsUpdateFormInputValues) => ContentsUpdateFormInputValues;
    onSuccess?: (fields: ContentsUpdateFormInputValues) => void;
    onError?: (fields: ContentsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: ContentsUpdateFormInputValues) => ContentsUpdateFormInputValues;
    onValidate?: ContentsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContentsUpdateForm(props: ContentsUpdateFormProps): React.ReactElement;
