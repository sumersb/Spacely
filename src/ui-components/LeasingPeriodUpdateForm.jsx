/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { LeasingPeriod } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function LeasingPeriodUpdateForm(props) {
  const {
    id,
    leasingPeriod,
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
    starting: undefined,
    ending: undefined,
    extention: false,
    availabilityDetails: undefined,
    shortTerm: false,
    longTerm: false,
  };
  const [starting, setStarting] = React.useState(initialValues.starting);
  const [ending, setEnding] = React.useState(initialValues.ending);
  const [extention, setExtention] = React.useState(initialValues.extention);
  const [availabilityDetails, setAvailabilityDetails] = React.useState(
    initialValues.availabilityDetails
  );
  const [shortTerm, setShortTerm] = React.useState(initialValues.shortTerm);
  const [longTerm, setLongTerm] = React.useState(initialValues.longTerm);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...leasingPeriodRecord };
    setStarting(cleanValues.starting);
    setEnding(cleanValues.ending);
    setExtention(cleanValues.extention);
    setAvailabilityDetails(cleanValues.availabilityDetails);
    setShortTerm(cleanValues.shortTerm);
    setLongTerm(cleanValues.longTerm);
    setErrors({});
  };
  const [leasingPeriodRecord, setLeasingPeriodRecord] =
    React.useState(leasingPeriod);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id
        ? await DataStore.query(LeasingPeriod, id)
        : leasingPeriod;
      setLeasingPeriodRecord(record);
    };
    queryData();
  }, [id, leasingPeriod]);
  React.useEffect(resetStateValues, [leasingPeriodRecord]);
  const validations = {
    starting: [],
    ending: [],
    extention: [],
    availabilityDetails: [],
    shortTerm: [],
    longTerm: [],
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
          starting,
          ending,
          extention,
          availabilityDetails,
          shortTerm,
          longTerm,
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
            LeasingPeriod.copyOf(leasingPeriodRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LeasingPeriodUpdateForm")}
    >
      <TextField
        label="Starting"
        isRequired={false}
        isReadOnly={false}
        defaultValue={starting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              starting: value,
              ending,
              extention,
              availabilityDetails,
              shortTerm,
              longTerm,
            };
            const result = onChange(modelFields);
            value = result?.starting ?? value;
          }
          if (errors.starting?.hasError) {
            runValidationTasks("starting", value);
          }
          setStarting(value);
        }}
        onBlur={() => runValidationTasks("starting", starting)}
        errorMessage={errors.starting?.errorMessage}
        hasError={errors.starting?.hasError}
        {...getOverrideProps(overrides, "starting")}
      ></TextField>
      <TextField
        label="Ending"
        isRequired={false}
        isReadOnly={false}
        defaultValue={ending}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              starting,
              ending: value,
              extention,
              availabilityDetails,
              shortTerm,
              longTerm,
            };
            const result = onChange(modelFields);
            value = result?.ending ?? value;
          }
          if (errors.ending?.hasError) {
            runValidationTasks("ending", value);
          }
          setEnding(value);
        }}
        onBlur={() => runValidationTasks("ending", ending)}
        errorMessage={errors.ending?.errorMessage}
        hasError={errors.ending?.hasError}
        {...getOverrideProps(overrides, "ending")}
      ></TextField>
      <SwitchField
        label="Extention"
        defaultChecked={false}
        isDisabled={false}
        isChecked={extention}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              starting,
              ending,
              extention: value,
              availabilityDetails,
              shortTerm,
              longTerm,
            };
            const result = onChange(modelFields);
            value = result?.extention ?? value;
          }
          if (errors.extention?.hasError) {
            runValidationTasks("extention", value);
          }
          setExtention(value);
        }}
        onBlur={() => runValidationTasks("extention", extention)}
        errorMessage={errors.extention?.errorMessage}
        hasError={errors.extention?.hasError}
        {...getOverrideProps(overrides, "extention")}
      ></SwitchField>
      <TextField
        label="Availability details"
        isRequired={false}
        isReadOnly={false}
        defaultValue={availabilityDetails}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              starting,
              ending,
              extention,
              availabilityDetails: value,
              shortTerm,
              longTerm,
            };
            const result = onChange(modelFields);
            value = result?.availabilityDetails ?? value;
          }
          if (errors.availabilityDetails?.hasError) {
            runValidationTasks("availabilityDetails", value);
          }
          setAvailabilityDetails(value);
        }}
        onBlur={() =>
          runValidationTasks("availabilityDetails", availabilityDetails)
        }
        errorMessage={errors.availabilityDetails?.errorMessage}
        hasError={errors.availabilityDetails?.hasError}
        {...getOverrideProps(overrides, "availabilityDetails")}
      ></TextField>
      <SwitchField
        label="Short term"
        defaultChecked={false}
        isDisabled={false}
        isChecked={shortTerm}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              starting,
              ending,
              extention,
              availabilityDetails,
              shortTerm: value,
              longTerm,
            };
            const result = onChange(modelFields);
            value = result?.shortTerm ?? value;
          }
          if (errors.shortTerm?.hasError) {
            runValidationTasks("shortTerm", value);
          }
          setShortTerm(value);
        }}
        onBlur={() => runValidationTasks("shortTerm", shortTerm)}
        errorMessage={errors.shortTerm?.errorMessage}
        hasError={errors.shortTerm?.hasError}
        {...getOverrideProps(overrides, "shortTerm")}
      ></SwitchField>
      <SwitchField
        label="Long term"
        defaultChecked={false}
        isDisabled={false}
        isChecked={longTerm}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              starting,
              ending,
              extention,
              availabilityDetails,
              shortTerm,
              longTerm: value,
            };
            const result = onChange(modelFields);
            value = result?.longTerm ?? value;
          }
          if (errors.longTerm?.hasError) {
            runValidationTasks("longTerm", value);
          }
          setLongTerm(value);
        }}
        onBlur={() => runValidationTasks("longTerm", longTerm)}
        errorMessage={errors.longTerm?.errorMessage}
        hasError={errors.longTerm?.hasError}
        {...getOverrideProps(overrides, "longTerm")}
      ></SwitchField>
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
