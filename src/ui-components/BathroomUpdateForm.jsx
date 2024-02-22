/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Bathroom } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function BathroomUpdateForm(props) {
  const {
    id,
    bathroom,
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
    bathroomNum: undefined,
    bathroomDetails: undefined,
  };
  const [bathroomNum, setBathroomNum] = React.useState(
    initialValues.bathroomNum
  );
  const [bathroomDetails, setBathroomDetails] = React.useState(
    initialValues.bathroomDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...bathroomRecord };
    setBathroomNum(cleanValues.bathroomNum);
    setBathroomDetails(cleanValues.bathroomDetails);
    setErrors({});
  };
  const [bathroomRecord, setBathroomRecord] = React.useState(bathroom);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Bathroom, id) : bathroom;
      setBathroomRecord(record);
    };
    queryData();
  }, [id, bathroom]);
  React.useEffect(resetStateValues, [bathroomRecord]);
  const validations = {
    bathroomNum: [],
    bathroomDetails: [],
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
          bathroomNum,
          bathroomDetails,
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
            Bathroom.copyOf(bathroomRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
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
      {...getOverrideProps(overrides, "BathroomUpdateForm")}
    >
      <TextField
        label="Bathroom num"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={bathroomNum}
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              bathroomNum: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              bathroomNum: value,
              bathroomDetails,
            };
            const result = onChange(modelFields);
            value = result?.bathroomNum ?? value;
          }
          if (errors.bathroomNum?.hasError) {
            runValidationTasks("bathroomNum", value);
          }
          setBathroomNum(value);
        }}
        onBlur={() => runValidationTasks("bathroomNum", bathroomNum)}
        errorMessage={errors.bathroomNum?.errorMessage}
        hasError={errors.bathroomNum?.hasError}
        {...getOverrideProps(overrides, "bathroomNum")}
      ></TextField>
      <TextField
        label="Bathroom details"
        isRequired={false}
        isReadOnly={false}
        defaultValue={bathroomDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bathroomNum,
              bathroomDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.bathroomDetails ?? value;
          }
          if (errors.bathroomDetails?.hasError) {
            runValidationTasks("bathroomDetails", value);
          }
          setBathroomDetails(value);
        }}
        onBlur={() => runValidationTasks("bathroomDetails", bathroomDetails)}
        errorMessage={errors.bathroomDetails?.errorMessage}
        hasError={errors.bathroomDetails?.hasError}
        {...getOverrideProps(overrides, "bathroomDetails")}
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
