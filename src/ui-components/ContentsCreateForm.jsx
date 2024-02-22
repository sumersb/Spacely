/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Contents } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ContentsCreateForm(props) {
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
    gym: undefined,
    parking: undefined,
    housingType: undefined,
    pets: undefined,
    ac: false,
    heater: false,
    laundry: undefined,
    furnishing: undefined,
    Gym: {},
    Parking: {},
    HousingType: {},
    Pet: {},
    Laundry: {},
    Furnishing: {},
    contentsGymId: undefined,
    contentsParkingId: undefined,
    contentsHousingTypeId: undefined,
    contentsPetId: undefined,
    contentsLaundryId: undefined,
    contentsFurnishingId: undefined,
  };
  const [gym, setGym] = React.useState(initialValues.gym);
  const [parking, setParking] = React.useState(initialValues.parking);
  const [housingType, setHousingType] = React.useState(
    initialValues.housingType
  );
  const [pets, setPets] = React.useState(initialValues.pets);
  const [ac, setAc] = React.useState(initialValues.ac);
  const [heater, setHeater] = React.useState(initialValues.heater);
  const [laundry, setLaundry] = React.useState(initialValues.laundry);
  const [furnishing, setFurnishing] = React.useState(initialValues.furnishing);
  const [Gym1, setGym1] = React.useState(initialValues.Gym);
  const [Parking1, setParking1] = React.useState(initialValues.Parking);
  const [HousingType1, setHousingType1] = React.useState(
    initialValues.HousingType
  );
  const [Pet, setPet] = React.useState(initialValues.Pet);
  const [Laundry1, setLaundry1] = React.useState(initialValues.Laundry);
  const [Furnishing1, setFurnishing1] = React.useState(
    initialValues.Furnishing
  );
  const [contentsGymId, setContentsGymId] = React.useState(
    initialValues.contentsGymId
  );
  const [contentsParkingId, setContentsParkingId] = React.useState(
    initialValues.contentsParkingId
  );
  const [contentsHousingTypeId, setContentsHousingTypeId] = React.useState(
    initialValues.contentsHousingTypeId
  );
  const [contentsPetId, setContentsPetId] = React.useState(
    initialValues.contentsPetId
  );
  const [contentsLaundryId, setContentsLaundryId] = React.useState(
    initialValues.contentsLaundryId
  );
  const [contentsFurnishingId, setContentsFurnishingId] = React.useState(
    initialValues.contentsFurnishingId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setGym(initialValues.gym);
    setParking(initialValues.parking);
    setHousingType(initialValues.housingType);
    setPets(initialValues.pets);
    setAc(initialValues.ac);
    setHeater(initialValues.heater);
    setLaundry(initialValues.laundry);
    setFurnishing(initialValues.furnishing);
    setGym1(initialValues.Gym);
    setParking1(initialValues.Parking);
    setHousingType1(initialValues.HousingType);
    setPet(initialValues.Pet);
    setLaundry1(initialValues.Laundry);
    setFurnishing1(initialValues.Furnishing);
    setContentsGymId(initialValues.contentsGymId);
    setContentsParkingId(initialValues.contentsParkingId);
    setContentsHousingTypeId(initialValues.contentsHousingTypeId);
    setContentsPetId(initialValues.contentsPetId);
    setContentsLaundryId(initialValues.contentsLaundryId);
    setContentsFurnishingId(initialValues.contentsFurnishingId);
    setErrors({});
  };
  const validations = {
    gym: [],
    parking: [],
    housingType: [],
    pets: [],
    ac: [],
    heater: [],
    laundry: [],
    furnishing: [],
    Gym: [],
    Parking: [],
    HousingType: [],
    Pet: [],
    Laundry: [],
    Furnishing: [],
    contentsGymId: [],
    contentsParkingId: [],
    contentsHousingTypeId: [],
    contentsPetId: [],
    contentsLaundryId: [],
    contentsFurnishingId: [],
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
          parking,
          housingType,
          pets,
          ac,
          heater,
          laundry,
          furnishing,
          Gym: Gym1,
          Parking: Parking1,
          HousingType: HousingType1,
          Pet,
          Laundry: Laundry1,
          Furnishing: Furnishing1,
          contentsGymId,
          contentsParkingId,
          contentsHousingTypeId,
          contentsPetId,
          contentsLaundryId,
          contentsFurnishingId,
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
          await DataStore.save(new Contents(modelFields));
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
      {...getOverrideProps(overrides, "ContentsCreateForm")}
    >
      <TextField
        label="Gym"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym: value,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
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
      ></TextField>
      <TextField
        label="Parking"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking: value,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
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
      ></TextField>
      <TextField
        label="Housing type"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType: value,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.housingType ?? value;
          }
          if (errors.housingType?.hasError) {
            runValidationTasks("housingType", value);
          }
          setHousingType(value);
        }}
        onBlur={() => runValidationTasks("housingType", housingType)}
        errorMessage={errors.housingType?.errorMessage}
        hasError={errors.housingType?.hasError}
        {...getOverrideProps(overrides, "housingType")}
      ></TextField>
      <TextField
        label="Pets"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets: value,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.pets ?? value;
          }
          if (errors.pets?.hasError) {
            runValidationTasks("pets", value);
          }
          setPets(value);
        }}
        onBlur={() => runValidationTasks("pets", pets)}
        errorMessage={errors.pets?.errorMessage}
        hasError={errors.pets?.hasError}
        {...getOverrideProps(overrides, "pets")}
      ></TextField>
      <SwitchField
        label="Ac"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ac}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac: value,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.ac ?? value;
          }
          if (errors.ac?.hasError) {
            runValidationTasks("ac", value);
          }
          setAc(value);
        }}
        onBlur={() => runValidationTasks("ac", ac)}
        errorMessage={errors.ac?.errorMessage}
        hasError={errors.ac?.hasError}
        {...getOverrideProps(overrides, "ac")}
      ></SwitchField>
      <SwitchField
        label="Heater"
        defaultChecked={false}
        isDisabled={false}
        isChecked={heater}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater: value,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.heater ?? value;
          }
          if (errors.heater?.hasError) {
            runValidationTasks("heater", value);
          }
          setHeater(value);
        }}
        onBlur={() => runValidationTasks("heater", heater)}
        errorMessage={errors.heater?.errorMessage}
        hasError={errors.heater?.hasError}
        {...getOverrideProps(overrides, "heater")}
      ></SwitchField>
      <TextField
        label="Laundry"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry: value,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.laundry ?? value;
          }
          if (errors.laundry?.hasError) {
            runValidationTasks("laundry", value);
          }
          setLaundry(value);
        }}
        onBlur={() => runValidationTasks("laundry", laundry)}
        errorMessage={errors.laundry?.errorMessage}
        hasError={errors.laundry?.hasError}
        {...getOverrideProps(overrides, "laundry")}
      ></TextField>
      <TextField
        label="Furnishing"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing: value,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.furnishing ?? value;
          }
          if (errors.furnishing?.hasError) {
            runValidationTasks("furnishing", value);
          }
          setFurnishing(value);
        }}
        onBlur={() => runValidationTasks("furnishing", furnishing)}
        errorMessage={errors.furnishing?.errorMessage}
        hasError={errors.furnishing?.hasError}
        {...getOverrideProps(overrides, "furnishing")}
      ></TextField>
      <SelectField
        label="Gym"
        placeholder="Please select an option"
        isDisabled={false}
        value={Gym1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: value,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.Gym ?? value;
          }
          if (errors.Gym?.hasError) {
            runValidationTasks("Gym", value);
          }
          setGym1(value);
        }}
        onBlur={() => runValidationTasks("Gym", Gym1)}
        errorMessage={errors.Gym?.errorMessage}
        hasError={errors.Gym?.hasError}
        {...getOverrideProps(overrides, "Gym")}
      ></SelectField>
      <SelectField
        label="Parking"
        placeholder="Please select an option"
        isDisabled={false}
        value={Parking1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: value,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.Parking ?? value;
          }
          if (errors.Parking?.hasError) {
            runValidationTasks("Parking", value);
          }
          setParking1(value);
        }}
        onBlur={() => runValidationTasks("Parking", Parking1)}
        errorMessage={errors.Parking?.errorMessage}
        hasError={errors.Parking?.hasError}
        {...getOverrideProps(overrides, "Parking")}
      ></SelectField>
      <SelectField
        label="Housing type"
        placeholder="Please select an option"
        isDisabled={false}
        value={HousingType1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: value,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.HousingType ?? value;
          }
          if (errors.HousingType?.hasError) {
            runValidationTasks("HousingType", value);
          }
          setHousingType1(value);
        }}
        onBlur={() => runValidationTasks("HousingType", HousingType1)}
        errorMessage={errors.HousingType?.errorMessage}
        hasError={errors.HousingType?.hasError}
        {...getOverrideProps(overrides, "HousingType")}
      ></SelectField>
      <SelectField
        label="Pet"
        placeholder="Please select an option"
        isDisabled={false}
        value={Pet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet: value,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.Pet ?? value;
          }
          if (errors.Pet?.hasError) {
            runValidationTasks("Pet", value);
          }
          setPet(value);
        }}
        onBlur={() => runValidationTasks("Pet", Pet)}
        errorMessage={errors.Pet?.errorMessage}
        hasError={errors.Pet?.hasError}
        {...getOverrideProps(overrides, "Pet")}
      ></SelectField>
      <SelectField
        label="Laundry"
        placeholder="Please select an option"
        isDisabled={false}
        value={Laundry1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: value,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.Laundry ?? value;
          }
          if (errors.Laundry?.hasError) {
            runValidationTasks("Laundry", value);
          }
          setLaundry1(value);
        }}
        onBlur={() => runValidationTasks("Laundry", Laundry1)}
        errorMessage={errors.Laundry?.errorMessage}
        hasError={errors.Laundry?.hasError}
        {...getOverrideProps(overrides, "Laundry")}
      ></SelectField>
      <SelectField
        label="Furnishing"
        placeholder="Please select an option"
        isDisabled={false}
        value={Furnishing1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: value,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.Furnishing ?? value;
          }
          if (errors.Furnishing?.hasError) {
            runValidationTasks("Furnishing", value);
          }
          setFurnishing1(value);
        }}
        onBlur={() => runValidationTasks("Furnishing", Furnishing1)}
        errorMessage={errors.Furnishing?.errorMessage}
        hasError={errors.Furnishing?.hasError}
        {...getOverrideProps(overrides, "Furnishing")}
      ></SelectField>
      <TextField
        label="Contents gym id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId: value,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.contentsGymId ?? value;
          }
          if (errors.contentsGymId?.hasError) {
            runValidationTasks("contentsGymId", value);
          }
          setContentsGymId(value);
        }}
        onBlur={() => runValidationTasks("contentsGymId", contentsGymId)}
        errorMessage={errors.contentsGymId?.errorMessage}
        hasError={errors.contentsGymId?.hasError}
        {...getOverrideProps(overrides, "contentsGymId")}
      ></TextField>
      <TextField
        label="Contents parking id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId: value,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.contentsParkingId ?? value;
          }
          if (errors.contentsParkingId?.hasError) {
            runValidationTasks("contentsParkingId", value);
          }
          setContentsParkingId(value);
        }}
        onBlur={() =>
          runValidationTasks("contentsParkingId", contentsParkingId)
        }
        errorMessage={errors.contentsParkingId?.errorMessage}
        hasError={errors.contentsParkingId?.hasError}
        {...getOverrideProps(overrides, "contentsParkingId")}
      ></TextField>
      <TextField
        label="Contents housing type id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId: value,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.contentsHousingTypeId ?? value;
          }
          if (errors.contentsHousingTypeId?.hasError) {
            runValidationTasks("contentsHousingTypeId", value);
          }
          setContentsHousingTypeId(value);
        }}
        onBlur={() =>
          runValidationTasks("contentsHousingTypeId", contentsHousingTypeId)
        }
        errorMessage={errors.contentsHousingTypeId?.errorMessage}
        hasError={errors.contentsHousingTypeId?.hasError}
        {...getOverrideProps(overrides, "contentsHousingTypeId")}
      ></TextField>
      <TextField
        label="Contents pet id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId: value,
              contentsLaundryId,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.contentsPetId ?? value;
          }
          if (errors.contentsPetId?.hasError) {
            runValidationTasks("contentsPetId", value);
          }
          setContentsPetId(value);
        }}
        onBlur={() => runValidationTasks("contentsPetId", contentsPetId)}
        errorMessage={errors.contentsPetId?.errorMessage}
        hasError={errors.contentsPetId?.hasError}
        {...getOverrideProps(overrides, "contentsPetId")}
      ></TextField>
      <TextField
        label="Contents laundry id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId: value,
              contentsFurnishingId,
            };
            const result = onChange(modelFields);
            value = result?.contentsLaundryId ?? value;
          }
          if (errors.contentsLaundryId?.hasError) {
            runValidationTasks("contentsLaundryId", value);
          }
          setContentsLaundryId(value);
        }}
        onBlur={() =>
          runValidationTasks("contentsLaundryId", contentsLaundryId)
        }
        errorMessage={errors.contentsLaundryId?.errorMessage}
        hasError={errors.contentsLaundryId?.hasError}
        {...getOverrideProps(overrides, "contentsLaundryId")}
      ></TextField>
      <TextField
        label="Contents furnishing id"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              gym,
              parking,
              housingType,
              pets,
              ac,
              heater,
              laundry,
              furnishing,
              Gym: Gym1,
              Parking: Parking1,
              HousingType: HousingType1,
              Pet,
              Laundry: Laundry1,
              Furnishing: Furnishing1,
              contentsGymId,
              contentsParkingId,
              contentsHousingTypeId,
              contentsPetId,
              contentsLaundryId,
              contentsFurnishingId: value,
            };
            const result = onChange(modelFields);
            value = result?.contentsFurnishingId ?? value;
          }
          if (errors.contentsFurnishingId?.hasError) {
            runValidationTasks("contentsFurnishingId", value);
          }
          setContentsFurnishingId(value);
        }}
        onBlur={() =>
          runValidationTasks("contentsFurnishingId", contentsFurnishingId)
        }
        errorMessage={errors.contentsFurnishingId?.errorMessage}
        hasError={errors.contentsFurnishingId?.hasError}
        {...getOverrideProps(overrides, "contentsFurnishingId")}
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
