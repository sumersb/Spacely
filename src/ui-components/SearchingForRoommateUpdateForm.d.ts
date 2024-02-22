/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SearchingForRoommate } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SearchingForRoommateUpdateFormInputValues = {
    searching?: boolean;
    searchingFor?: string;
    notSearchingFor?: string;
    searchingExtraDetails?: string;
};
export declare type SearchingForRoommateUpdateFormValidationValues = {
    searching?: ValidationFunction<boolean>;
    searchingFor?: ValidationFunction<string>;
    notSearchingFor?: ValidationFunction<string>;
    searchingExtraDetails?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SearchingForRoommateUpdateFormOverridesProps = {
    SearchingForRoommateUpdateFormGrid?: FormProps<GridProps>;
    searching?: FormProps<SwitchFieldProps>;
    searchingFor?: FormProps<TextFieldProps>;
    notSearchingFor?: FormProps<TextFieldProps>;
    searchingExtraDetails?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SearchingForRoommateUpdateFormProps = React.PropsWithChildren<{
    overrides?: SearchingForRoommateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    searchingForRoommate?: SearchingForRoommate;
    onSubmit?: (fields: SearchingForRoommateUpdateFormInputValues) => SearchingForRoommateUpdateFormInputValues;
    onSuccess?: (fields: SearchingForRoommateUpdateFormInputValues) => void;
    onError?: (fields: SearchingForRoommateUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: SearchingForRoommateUpdateFormInputValues) => SearchingForRoommateUpdateFormInputValues;
    onValidate?: SearchingForRoommateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SearchingForRoommateUpdateForm(props: SearchingForRoommateUpdateFormProps): React.ReactElement;
