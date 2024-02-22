/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { HousingType } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function HousingTypeCreateForm(props) {
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
    house: false,
    apartment: false,
    condo: false,
    townhouse: false,
    housingDetail: undefined,
  };
  const [house, setHouse] = React.useState(initialValues.house);
  const [apartment, setApartment] = React.useState(initialValues.apartment);
  const [condo, setCondo] = React.useState(initialValues.condo);
  const [townhouse, setTownhouse] = React.useState(initialValues.townhouse);
  const [housingDetail, setHousingDetail] = React.useState(
    initialValues.housingDetail
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setHouse(initialValues.house);
    setApartment(initialValues.apartment);
    setCondo(initialValues.condo);
    setTownhouse(initialValues.townhouse);
    setHousingDetail(initialValues.housingDetail);
    setErrors({});
  };
  const validations = {
    house: [],
    apartment: [],
    condo: [],
    townhouse: [],
    housingDetail: [],
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
          house,
          apartment,
          condo,
          townhouse,
          housingDetail,
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
          await DataStore.save(new HousingType(modelFields));
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
      {...getOverrideProps(overrides, "HousingTypeCreateForm")}
    >
      <SwitchField
        label="House"
        defaultChecked={false}
        isDisabled={false}
        isChecked={house}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              house: value,
              apartment,
              condo,
              townhouse,
              housingDetail,
            };
            const result = onChange(modelFields);
            value = result?.house ?? value;
          }
          if (errors.house?.hasError) {
            runValidationTasks("house", value);
          }
          setHouse(value);
        }}
        onBlur={() => runValidationTasks("house", house)}
        errorMessage={errors.house?.errorMessage}
        hasError={errors.house?.hasError}
        {...getOverrideProps(overrides, "house")}
      ></SwitchField>
      <SwitchField
        label="Apartment"
        defaultChecked={false}
        isDisabled={false}
        isChecked={apartment}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              house,
              apartment: value,
              condo,
              townhouse,
              housingDetail,
            };
            const result = onChange(modelFields);
            value = result?.apartment ?? value;
          }
          if (errors.apartment?.hasError) {
            runValidationTasks("apartment", value);
          }
          setApartment(value);
        }}
        onBlur={() => runValidationTasks("apartment", apartment)}
        errorMessage={errors.apartment?.errorMessage}
        hasError={errors.apartment?.hasError}
        {...getOverrideProps(overrides, "apartment")}
      ></SwitchField>
      <SwitchField
        label="Condo"
        defaultChecked={false}
        isDisabled={false}
        isChecked={condo}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              house,
              apartment,
              condo: value,
              townhouse,
              housingDetail,
            };
            const result = onChange(modelFields);
            value = result?.condo ?? value;
          }
          if (errors.condo?.hasError) {
            runValidationTasks("condo", value);
          }
          setCondo(value);
        }}
        onBlur={() => runValidationTasks("condo", condo)}
        errorMessage={errors.condo?.errorMessage}
        hasError={errors.condo?.hasError}
        {...getOverrideProps(overrides, "condo")}
      ></SwitchField>
      <SwitchField
        label="Townhouse"
        defaultChecked={false}
        isDisabled={false}
        isChecked={townhouse}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              house,
              apartment,
              condo,
              townhouse: value,
              housingDetail,
            };
            const result = onChange(modelFields);
            value = result?.townhouse ?? value;
          }
          if (errors.townhouse?.hasError) {
            runValidationTasks("townhouse", value);
          }
          setTownhouse(value);
        }}
        onBlur={() => runValidationTasks("townhouse", townhouse)}
        errorMessage={errors.townhouse?.errorMessage}
        hasError={errors.townhouse?.hasError}
        {...getOverrideProps(overrides, "townhouse")}
      ></SwitchField>
      <TextField
        label="Housing detail"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              house,
              apartment,
              condo,
              townhouse,
              housingDetail: value,
            };
            const result = onChange(modelFields);
            value = result?.housingDetail ?? value;
          }
          if (errors.housingDetail?.hasError) {
            runValidationTasks("housingDetail", value);
          }
          setHousingDetail(value);
        }}
        onBlur={() => runValidationTasks("housingDetail", housingDetail)}
        errorMessage={errors.housingDetail?.errorMessage}
        hasError={errors.housingDetail?.hasError}
        {...getOverrideProps(overrides, "housingDetail")}
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
