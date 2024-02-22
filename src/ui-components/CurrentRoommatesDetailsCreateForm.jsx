/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { CurrentRoommatesDetails } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function CurrentRoommatesDetailsCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    currentRoomatesNum: undefined,
    indivisualRoommateDetail: undefined,
  };
  const [currentRoomatesNum, setCurrentRoomatesNum] = React.useState(
    initialValues.currentRoomatesNum
  );
  const [indivisualRoommateDetail, setIndivisualRoommateDetail] =
    React.useState(initialValues.indivisualRoommateDetail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCurrentRoomatesNum(initialValues.currentRoomatesNum);
    setIndivisualRoommateDetail(initialValues.indivisualRoommateDetail);
    setErrors({});
  };
  const validations = {
    currentRoomatesNum: [],
    indivisualRoommateDetail: [],
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
          currentRoomatesNum,
          indivisualRoommateDetail,
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
          await DataStore.save(new CurrentRoommatesDetails(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "CurrentRoommatesDetailsCreateForm")}
    >
      <TextField
        label="Current roomates num"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              currentRoomatesNum: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              currentRoomatesNum: value,
              indivisualRoommateDetail,
            };
            const result = onChange(modelFields);
            value = result?.currentRoomatesNum ?? value;
          }
          if (errors.currentRoomatesNum?.hasError) {
            runValidationTasks("currentRoomatesNum", value);
          }
          setCurrentRoomatesNum(value);
        }}
        onBlur={() =>
          runValidationTasks("currentRoomatesNum", currentRoomatesNum)
        }
        errorMessage={errors.currentRoomatesNum?.errorMessage}
        hasError={errors.currentRoomatesNum?.hasError}
        {...getOverrideProps(overrides, "currentRoomatesNum")}
      ></TextField>
      <TextField
        label="Indivisual roommate detail"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              currentRoomatesNum,
              indivisualRoommateDetail: value,
            };
            const result = onChange(modelFields);
            value = result?.indivisualRoommateDetail ?? value;
          }
          if (errors.indivisualRoommateDetail?.hasError) {
            runValidationTasks("indivisualRoommateDetail", value);
          }
          setIndivisualRoommateDetail(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "indivisualRoommateDetail",
            indivisualRoommateDetail
          )
        }
        errorMessage={errors.indivisualRoommateDetail?.errorMessage}
        hasError={errors.indivisualRoommateDetail?.hasError}
        {...getOverrideProps(overrides, "indivisualRoommateDetail")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
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
