/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Gym } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function GymUpdateForm(props) {
  const {
    id,
    gym,
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
    gym: false,
    gymDetail: undefined,
  };
  const [gym, setGym] = React.useState(initialValues.gym);
  const [gymDetail, setGymDetail] = React.useState(initialValues.gymDetail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...gymRecord };
    setGym(cleanValues.gym);
    setGymDetail(cleanValues.gymDetail);
    setErrors({});
  };
  const [gymRecord, setGymRecord] = React.useState(gym);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Gym, id) : gym;
      setGymRecord(record);
    };
    queryData();
  }, [id, gym]);
  React.useEffect(resetStateValues, [gymRecord]);
  const validations = {
    gym: [],
    gymDetail: [],
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
          gym,
          gymDetail,
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
            Gym.copyOf(gymRecord, (updated) => {
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
      {...getOverrideProps(overrides, "GymUpdateForm")}
    >
      <SwitchField
        label="Gym"
        defaultChecked={false}
        isDisabled={false}
        isChecked={gym}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              gym: value,
              gymDetail,
            };
            const result = onChange(modelFields);
            value = result?.gym ?? value;
          }
          if (errors.gym?.hasError) {
            runValidationTasks("gym", value);
          }
          setGym(value);
        }}
        onBlur={() => runValidationTasks("gym", gym)}
        errorMessage={errors.gym?.errorMessage}
        hasError={errors.gym?.hasError}
        {...getOverrideProps(overrides, "gym")}
      ></SwitchField>
      <TextField
        label="Gym detail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={gymDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              gymDetail: value,
            };
            const result = onChange(modelFields);
            value = result?.gymDetail ?? value;
          }
          if (errors.gymDetail?.hasError) {
            runValidationTasks("gymDetail", value);
          }
          setGymDetail(value);
        }}
        onBlur={() => runValidationTasks("gymDetail", gymDetail)}
        errorMessage={errors.gymDetail?.errorMessage}
        hasError={errors.gymDetail?.hasError}
        {...getOverrideProps(overrides, "gymDetail")}
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
