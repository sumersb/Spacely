/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserUpdateFormInputValues = {
    legalFirstName?: string;
    email?: string;
    searchingForRoommate?: string;
    bio?: string;
    prfilePic?: string;
    posting?: string;
    socials?: string;
    dateCreated?: string;
    phone?: string;
    saveLists?: string;
    profile?: string;
    timeCreated?: number;
    legalLastName?: string;
    SearchingForRoommate?: string;
    Socials?: string;
    Profile?: string;
    userSearchingForRoommateId?: string;
    userSocialsId?: string;
    userProfileId?: string;
};
export declare type UserUpdateFormValidationValues = {
    legalFirstName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    searchingForRoommate?: ValidationFunction<string>;
    bio?: ValidationFunction<string>;
    prfilePic?: ValidationFunction<string>;
    posting?: ValidationFunction<string>;
    socials?: ValidationFunction<string>;
    dateCreated?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    saveLists?: ValidationFunction<string>;
    profile?: ValidationFunction<string>;
    timeCreated?: ValidationFunction<number>;
    legalLastName?: ValidationFunction<string>;
    SearchingForRoommate?: ValidationFunction<string>;
    Socials?: ValidationFunction<string>;
    Profile?: ValidationFunction<string>;
    userSearchingForRoommateId?: ValidationFunction<string>;
    userSocialsId?: ValidationFunction<string>;
    userProfileId?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserUpdateFormOverridesProps = {
    UserUpdateFormGrid?: FormProps<GridProps>;
    legalFirstName?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    searchingForRoommate?: FormProps<TextFieldProps>;
    bio?: FormProps<TextFieldProps>;
    prfilePic?: FormProps<TextFieldProps>;
    posting?: FormProps<TextFieldProps>;
    socials?: FormProps<TextFieldProps>;
    dateCreated?: FormProps<TextFieldProps>;
    phone?: FormProps<TextFieldProps>;
    saveLists?: FormProps<TextFieldProps>;
    profile?: FormProps<TextFieldProps>;
    timeCreated?: FormProps<TextFieldProps>;
    legalLastName?: FormProps<TextFieldProps>;
    SearchingForRoommate?: FormProps<SelectFieldProps>;
    Socials?: FormProps<SelectFieldProps>;
    Profile?: FormProps<SelectFieldProps>;
    userSearchingForRoommateId?: FormProps<TextFieldProps>;
    userSocialsId?: FormProps<TextFieldProps>;
    userProfileId?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    user?: User;
    onSubmit?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onSuccess?: (fields: UserUpdateFormInputValues) => void;
    onError?: (fields: UserUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserUpdateFormInputValues) => UserUpdateFormInputValues;
    onValidate?: UserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserUpdateForm(props: UserUpdateFormProps): React.ReactElement;
