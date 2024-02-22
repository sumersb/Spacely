/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Parking } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ParkingUpdateForm(props) {
  const {
    id,
    parking,
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
    parking: false,
    parkingDetail: undefined,
    cost: undefined,
  };
  const [parking, setParking] = React.useState(initialValues.parking);
  const [parkingDetail, setParkingDetail] = React.useState(
    initialValues.parkingDetail
  );
  const [cost, setCost] = React.useState(initialValues.cost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...parkingRecord };
    setParking(cleanValues.parking);
    setParkingDetail(cleanValues.parkingDetail);
    setCost(cleanValues.cost);
    setErrors({});
  };
  const [parkingRecord, setParkingRecord] = React.useState(parking);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Parking, id) : parking;
      setParkingRecord(record);
    };
    queryData();
  }, [id, parking]);
  React.useEffect(resetStateValues, [parkingRecord]);
  const validations = {
    parking: [],
    parkingDetail: [],
    cost: [],
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
          parking,
          parkingDetail,
          cost,
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
            Parking.copyOf(parkingRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ParkingUpdateForm")}
    >
      <SwitchField
        label="Parking"
        defaultChecked={false}
        isDisabled={false}
        isChecked={parking}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              parking: value,
              parkingDetail,
              cost,
            };
            const result = onChange(modelFields);
            value = result?.parking ?? value;
          }
          if (errors.parking?.hasError) {
            runValidationTasks("parking", value);
          }
          setParking(value);
        }}
        onBlur={() => runValidationTasks("parking", parking)}
        errorMessage={errors.parking?.errorMessage}
        hasError={errors.parking?.hasError}
        {...getOverrideProps(overrides, "parking")}
      ></SwitchField>
      <TextField
        label="Parking detail"
        isRequired={false}
        isReadOnly={false}
        defaultValue={parkingDetail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              parking,
              parkingDetail: value,
              cost,
            };
            const result = onChange(modelFields);
            value = result?.parkingDetail ?? value;
          }
          if (errors.parkingDetail?.hasError) {
            runValidationTasks("parkingDetail", value);
          }
          setParkingDetail(value);
        }}
        onBlur={() => runValidationTasks("parkingDetail", parkingDetail)}
        errorMessage={errors.parkingDetail?.errorMessage}
        hasError={errors.parkingDetail?.hasError}
        {...getOverrideProps(overrides, "parkingDetail")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        defaultValue={cost}
        onChange={(e) => {
          let value = Number(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              cost: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              parking,
              parkingDetail,
              cost: value,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
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
