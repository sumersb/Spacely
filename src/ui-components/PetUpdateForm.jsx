/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Pet } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function PetUpdateForm(props) {
  const {
    id,
    pet,
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
    pet: false,
    petDetail: undefined,
  };
  const [pet, setPet] = React.useState(initialValues.pet);
  const [petDetail, setPetDetail] = React.useState(initialValues.petDetail);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...petRecord };
    setPet(cleanValues.pet);
    setPetDetail(cleanValues.petDetail);
    setErrors({});
  };
  const [petRecord, setPetRecord] = React.useState(pet);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Pet, id) : pet;
      setPetRecord(record);
    };
    queryData();
  }, [id, pet]);
  React.useEffect(resetStateValues, [petRecord]);
  const validations = {
    pet: [],
    petDetail: [],
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
          pet,
          petDetail,
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
            Pet.copyOf(petRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PetUpdateForm")}
    >
      <SwitchField
        label="Pet"
        defaultChecked={false}
        isDisabled={false}
        isChecked={pet}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              pet: value,
              petDetail,
            };
            const result = onChange(modelFields);
            value = result?.pet ?? value;
          }
          if (errors.pet?.hasError) {
            runValidationTasks("pet", value);
          }
          setPet(value);
        }}
        onBlur={() => runValidationTasks("pet", pet)}
        errorMessage={errors.pet?.errorMessage}
        hasError={errors.pet?.hasError}
        {...getOverrideProps(overrides, "pet")}
      ></SwitchField>
      <TextField
        label="Pet detail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={petDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pet,
              petDetail: value,
            };
            const result = onChange(modelFields);
            value = result?.petDetail ?? value;
          }
          if (errors.petDetail?.hasError) {
            runValidationTasks("petDetail", value);
          }
          setPetDetail(value);
        }}
        onBlur={() => runValidationTasks("petDetail", petDetail)}
        errorMessage={errors.petDetail?.errorMessage}
        hasError={errors.petDetail?.hasError}
        {...getOverrideProps(overrides, "petDetail")}
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
