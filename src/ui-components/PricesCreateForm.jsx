/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Prices } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PricesCreateForm(props) {
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
    rentCost: undefined,
    rentCostDetails: undefined,
  };
  const [rentCost, setRentCost] = React.useState(initialValues.rentCost);
  const [rentCostDetails, setRentCostDetails] = React.useState(
    initialValues.rentCostDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRentCost(initialValues.rentCost);
    setRentCostDetails(initialValues.rentCostDetails);
    setErrors({});
  };
  const validations = {
    rentCost: [],
    rentCostDetails: [],
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
          rentCost,
          rentCostDetails,
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
          await DataStore.save(new Prices(modelFields));
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
      {...getOverrideProps(overrides, "PricesCreateForm")}
    >
      <TextField
        label="Rent cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              rentCost: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              rentCost: value,
              rentCostDetails,
            };
            const result = onChange(modelFields);
            value = result?.rentCost ?? value;
          }
          if (errors.rentCost?.hasError) {
            runValidationTasks("rentCost", value);
          }
          setRentCost(value);
        }}
        onBlur={() => runValidationTasks("rentCost", rentCost)}
        errorMessage={errors.rentCost?.errorMessage}
        hasError={errors.rentCost?.hasError}
        {...getOverrideProps(overrides, "rentCost")}
      ></TextField>
      <TextField
        label="Rent cost details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              rentCost,
              rentCostDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.rentCostDetails ?? value;
          }
          if (errors.rentCostDetails?.hasError) {
            runValidationTasks("rentCostDetails", value);
          }
          setRentCostDetails(value);
        }}
        onBlur={() => runValidationTasks("rentCostDetails", rentCostDetails)}
        errorMessage={errors.rentCostDetails?.errorMessage}
        hasError={errors.rentCostDetails?.hasError}
        {...getOverrideProps(overrides, "rentCostDetails")}
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
