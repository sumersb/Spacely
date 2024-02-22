/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { SearchingForRoommate } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SearchingForRoommateUpdateForm(props) {
  const {
    id,
    searchingForRoommate,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    searching: false,
    searchingFor: undefined,
    notSearchingFor: undefined,
    searchingExtraDetails: undefined,
  };
  const [searching, setSearching] = React.useState(initialValues.searching);
  const [searchingFor, setSearchingFor] = React.useState(
    initialValues.searchingFor
  );
  const [notSearchingFor, setNotSearchingFor] = React.useState(
    initialValues.notSearchingFor
  );
  const [searchingExtraDetails, setSearchingExtraDetails] = React.useState(
    initialValues.searchingExtraDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...searchingForRoommateRecord };
    setSearching(cleanValues.searching);
    setSearchingFor(cleanValues.searchingFor);
    setNotSearchingFor(cleanValues.notSearchingFor);
    setSearchingExtraDetails(cleanValues.searchingExtraDetails);
    setErrors({});
  };
  const [searchingForRoommateRecord, setSearchingForRoommateRecord] =
    React.useState(searchingForRoommate);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(SearchingForRoommate, id)
        : searchingForRoommate;
      setSearchingForRoommateRecord(record);
    };
    queryData();
  }, [id, searchingForRoommate]);
  React.useEffect(resetStateValues, [searchingForRoommateRecord]);
  const validations = {
    searching: [],
    searchingFor: [],
    notSearchingFor: [],
    searchingExtraDetails: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          searching,
          searchingFor,
          notSearchingFor,
          searchingExtraDetails,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            SearchingForRoommate.copyOf(
              searchingForRoommateRecord,
              (updated) => {
                Object.assign(updated, modelFields);
              }
            )
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "SearchingForRoommateUpdateForm")}
    >
      <SwitchField
        label="Searching"
        defaultChecked={false}
        isDisabled={false}
        isChecked={searching}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              searching: value,
              searchingFor,
              notSearchingFor,
              searchingExtraDetails,
            };
            const result = onChange(modelFields);
            value = result?.searching ?? value;
          }
          if (errors.searching?.hasError) {
            runValidationTasks("searching", value);
          }
          setSearching(value);
        }}
        onBlur={() => runValidationTasks("searching", searching)}
        errorMessage={errors.searching?.errorMessage}
        hasError={errors.searching?.hasError}
        {...getOverrideProps(overrides, "searching")}
      ></SwitchField>
      <TextField
        label="Searching for"
        isRequired={false}
        isReadOnly={false}
        defaultValue={searchingFor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searching,
              searchingFor: value,
              notSearchingFor,
              searchingExtraDetails,
            };
            const result = onChange(modelFields);
            value = result?.searchingFor ?? value;
          }
          if (errors.searchingFor?.hasError) {
            runValidationTasks("searchingFor", value);
          }
          setSearchingFor(value);
        }}
        onBlur={() => runValidationTasks("searchingFor", searchingFor)}
        errorMessage={errors.searchingFor?.errorMessage}
        hasError={errors.searchingFor?.hasError}
        {...getOverrideProps(overrides, "searchingFor")}
      ></TextField>
      <TextField
        label="Not searching for"
        isRequired={false}
        isReadOnly={false}
        defaultValue={notSearchingFor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searching,
              searchingFor,
              notSearchingFor: value,
              searchingExtraDetails,
            };
            const result = onChange(modelFields);
            value = result?.notSearchingFor ?? value;
          }
          if (errors.notSearchingFor?.hasError) {
            runValidationTasks("notSearchingFor", value);
          }
          setNotSearchingFor(value);
        }}
        onBlur={() => runValidationTasks("notSearchingFor", notSearchingFor)}
        errorMessage={errors.notSearchingFor?.errorMessage}
        hasError={errors.notSearchingFor?.hasError}
        {...getOverrideProps(overrides, "notSearchingFor")}
      ></TextField>
      <TextField
        label="Searching extra details"
        isRequired={false}
        isReadOnly={false}
        defaultValue={searchingExtraDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              searching,
              searchingFor,
              notSearchingFor,
              searchingExtraDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.searchingExtraDetails ?? value;
          }
          if (errors.searchingExtraDetails?.hasError) {
            runValidationTasks("searchingExtraDetails", value);
          }
          setSearchingExtraDetails(value);
        }}
        onBlur={() =>
          runValidationTasks("searchingExtraDetails", searchingExtraDetails)
        }
        errorMessage={errors.searchingExtraDetails?.errorMessage}
        hasError={errors.searchingExtraDetails?.hasError}
        {...getOverrideProps(overrides, "searchingExtraDetails")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
