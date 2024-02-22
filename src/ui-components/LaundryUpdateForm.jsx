/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Laundry } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function LaundryUpdateForm(props) {
  const {
    id,
    laundry,
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
    inUnit: false,
    laundryDetail: undefined,
  };
  const [inUnit, setInUnit] = React.useState(initialValues.inUnit);
  const [laundryDetail, setLaundryDetail] = React.useState(
    initialValues.laundryDetail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...laundryRecord };
    setInUnit(cleanValues.inUnit);
    setLaundryDetail(cleanValues.laundryDetail);
    setErrors({});
  };
  const [laundryRecord, setLaundryRecord] = React.useState(laundry);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Laundry, id) : laundry;
      setLaundryRecord(record);
    };
    queryData();
  }, [id, laundry]);
  React.useEffect(resetStateValues, [laundryRecord]);
  const validations = {
    inUnit: [],
    laundryDetail: [],
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
          inUnit,
          laundryDetail,
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
            Laundry.copyOf(laundryRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LaundryUpdateForm")}
    >
      <SwitchField
        label="In unit"
        defaultChecked={false}
        isDisabled={false}
        isChecked={inUnit}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              inUnit: value,
              laundryDetail,
            };
            const result = onChange(modelFields);
            value = result?.inUnit ?? value;
          }
          if (errors.inUnit?.hasError) {
            runValidationTasks("inUnit", value);
          }
          setInUnit(value);
        }}
        onBlur={() => runValidationTasks("inUnit", inUnit)}
        errorMessage={errors.inUnit?.errorMessage}
        hasError={errors.inUnit?.hasError}
        {...getOverrideProps(overrides, "inUnit")}
      ></SwitchField>
      <TextField
        label="Laundry detail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={laundryDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              inUnit,
              laundryDetail: value,
            };
            const result = onChange(modelFields);
            value = result?.laundryDetail ?? value;
          }
          if (errors.laundryDetail?.hasError) {
            runValidationTasks("laundryDetail", value);
          }
          setLaundryDetail(value);
        }}
        onBlur={() => runValidationTasks("laundryDetail", laundryDetail)}
        errorMessage={errors.laundryDetail?.errorMessage}
        hasError={errors.laundryDetail?.hasError}
        {...getOverrideProps(overrides, "laundryDetail")}
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
