/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Furnishing } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function FurnishingUpdateForm(props) {
  const {
    id,
    furnishing,
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
    furnish: false,
    furnishDetail: undefined,
  };
  const [furnish, setFurnish] = React.useState(initialValues.furnish);
  const [furnishDetail, setFurnishDetail] = React.useState(
    initialValues.furnishDetail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...furnishingRecord };
    setFurnish(cleanValues.furnish);
    setFurnishDetail(cleanValues.furnishDetail);
    setErrors({});
  };
  const [furnishingRecord, setFurnishingRecord] = React.useState(furnishing);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Furnishing, id) : furnishing;
      setFurnishingRecord(record);
    };
    queryData();
  }, [id, furnishing]);
  React.useEffect(resetStateValues, [furnishingRecord]);
  const validations = {
    furnish: [],
    furnishDetail: [],
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
          furnish,
          furnishDetail,
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
            Furnishing.copyOf(furnishingRecord, (updated) => {
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
      {...getOverrideProps(overrides, "FurnishingUpdateForm")}
    >
      <SwitchField
        label="Furnish"
        defaultChecked={false}
        isDisabled={false}
        isChecked={furnish}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              furnish: value,
              furnishDetail,
            };
            const result = onChange(modelFields);
            value = result?.furnish ?? value;
          }
          if (errors.furnish?.hasError) {
            runValidationTasks("furnish", value);
          }
          setFurnish(value);
        }}
        onBlur={() => runValidationTasks("furnish", furnish)}
        errorMessage={errors.furnish?.errorMessage}
        hasError={errors.furnish?.hasError}
        {...getOverrideProps(overrides, "furnish")}
      ></SwitchField>
      <TextField
        label="Furnish detail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={furnishDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              furnish,
              furnishDetail: value,
            };
            const result = onChange(modelFields);
            value = result?.furnishDetail ?? value;
          }
          if (errors.furnishDetail?.hasError) {
            runValidationTasks("furnishDetail", value);
          }
          setFurnishDetail(value);
        }}
        onBlur={() => runValidationTasks("furnishDetail", furnishDetail)}
        errorMessage={errors.furnishDetail?.errorMessage}
        hasError={errors.furnishDetail?.hasError}
        {...getOverrideProps(overrides, "furnishDetail")}
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
