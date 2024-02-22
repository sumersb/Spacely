/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Room } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function RoomCreateForm(props) {
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
    roomNum: undefined,
    roomDetails: undefined,
  };
  const [roomNum, setRoomNum] = React.useState(initialValues.roomNum);
  const [roomDetails, setRoomDetails] = React.useState(
    initialValues.roomDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRoomNum(initialValues.roomNum);
    setRoomDetails(initialValues.roomDetails);
    setErrors({});
  };
  const validations = {
    roomNum: [],
    roomDetails: [],
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
          roomNum,
          roomDetails,
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
          await DataStore.save(new Room(modelFields));
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
      {...getOverrideProps(overrides, "RoomCreateForm")}
    >
      <TextField
        label="Room num"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              roomNum: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              roomNum: value,
              roomDetails,
            };
            const result = onChange(modelFields);
            value = result?.roomNum ?? value;
          }
          if (errors.roomNum?.hasError) {
            runValidationTasks("roomNum", value);
          }
          setRoomNum(value);
        }}
        onBlur={() => runValidationTasks("roomNum", roomNum)}
        errorMessage={errors.roomNum?.errorMessage}
        hasError={errors.roomNum?.hasError}
        {...getOverrideProps(overrides, "roomNum")}
      ></TextField>
      <TextField
        label="Room details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              roomNum,
              roomDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.roomDetails ?? value;
          }
          if (errors.roomDetails?.hasError) {
            runValidationTasks("roomDetails", value);
          }
          setRoomDetails(value);
        }}
        onBlur={() => runValidationTasks("roomDetails", roomDetails)}
        errorMessage={errors.roomDetails?.errorMessage}
        hasError={errors.roomDetails?.hasError}
        {...getOverrideProps(overrides, "roomDetails")}
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
