/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Profile } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ProfileUpdateForm(props) {
  const {
    id,
    profile,
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
    hobbies: undefined,
    occupation: undefined,
    interests: undefined,
    lifestyle: undefined,
    preferName: undefined,
    pronouns: undefined,
  };
  const [hobbies, setHobbies] = React.useState(initialValues.hobbies);
  const [occupation, setOccupation] = React.useState(initialValues.occupation);
  const [interests, setInterests] = React.useState(initialValues.interests);
  const [lifestyle, setLifestyle] = React.useState(initialValues.lifestyle);
  const [preferName, setPreferName] = React.useState(initialValues.preferName);
  const [pronouns, setPronouns] = React.useState(initialValues.pronouns);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...profileRecord };
    setHobbies(cleanValues.hobbies);
    setOccupation(cleanValues.occupation);
    setInterests(cleanValues.interests);
    setLifestyle(cleanValues.lifestyle);
    setPreferName(cleanValues.preferName);
    setPronouns(cleanValues.pronouns);
    setErrors({});
  };
  const [profileRecord, setProfileRecord] = React.useState(profile);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Profile, id) : profile;
      setProfileRecord(record);
    };
    queryData();
  }, [id, profile]);
  React.useEffect(resetStateValues, [profileRecord]);
  const validations = {
    hobbies: [],
    occupation: [],
    interests: [],
    lifestyle: [],
    preferName: [],
    pronouns: [],
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
          hobbies,
          occupation,
          interests,
          lifestyle,
          preferName,
          pronouns,
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
            Profile.copyOf(profileRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ProfileUpdateForm")}
    >
      <TextField
        label="Hobbies"
        isRequired={false}
        isReadOnly={false}
        defaultValue={hobbies}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hobbies: value,
              occupation,
              interests,
              lifestyle,
              preferName,
              pronouns,
            };
            const result = onChange(modelFields);
            value = result?.hobbies ?? value;
          }
          if (errors.hobbies?.hasError) {
            runValidationTasks("hobbies", value);
          }
          setHobbies(value);
        }}
        onBlur={() => runValidationTasks("hobbies", hobbies)}
        errorMessage={errors.hobbies?.errorMessage}
        hasError={errors.hobbies?.hasError}
        {...getOverrideProps(overrides, "hobbies")}
      ></TextField>
      <TextField
        label="Occupation"
        isRequired={false}
        isReadOnly={false}
        defaultValue={occupation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hobbies,
              occupation: value,
              interests,
              lifestyle,
              preferName,
              pronouns,
            };
            const result = onChange(modelFields);
            value = result?.occupation ?? value;
          }
          if (errors.occupation?.hasError) {
            runValidationTasks("occupation", value);
          }
          setOccupation(value);
        }}
        onBlur={() => runValidationTasks("occupation", occupation)}
        errorMessage={errors.occupation?.errorMessage}
        hasError={errors.occupation?.hasError}
        {...getOverrideProps(overrides, "occupation")}
      ></TextField>
      <TextField
        label="Interests"
        isRequired={false}
        isReadOnly={false}
        defaultValue={interests}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hobbies,
              occupation,
              interests: value,
              lifestyle,
              preferName,
              pronouns,
            };
            const result = onChange(modelFields);
            value = result?.interests ?? value;
          }
          if (errors.interests?.hasError) {
            runValidationTasks("interests", value);
          }
          setInterests(value);
        }}
        onBlur={() => runValidationTasks("interests", interests)}
        errorMessage={errors.interests?.errorMessage}
        hasError={errors.interests?.hasError}
        {...getOverrideProps(overrides, "interests")}
      ></TextField>
      <TextField
        label="Lifestyle"
        isRequired={false}
        isReadOnly={false}
        defaultValue={lifestyle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hobbies,
              occupation,
              interests,
              lifestyle: value,
              preferName,
              pronouns,
            };
            const result = onChange(modelFields);
            value = result?.lifestyle ?? value;
          }
          if (errors.lifestyle?.hasError) {
            runValidationTasks("lifestyle", value);
          }
          setLifestyle(value);
        }}
        onBlur={() => runValidationTasks("lifestyle", lifestyle)}
        errorMessage={errors.lifestyle?.errorMessage}
        hasError={errors.lifestyle?.hasError}
        {...getOverrideProps(overrides, "lifestyle")}
      ></TextField>
      <TextField
        label="Prefer name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={preferName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hobbies,
              occupation,
              interests,
              lifestyle,
              preferName: value,
              pronouns,
            };
            const result = onChange(modelFields);
            value = result?.preferName ?? value;
          }
          if (errors.preferName?.hasError) {
            runValidationTasks("preferName", value);
          }
          setPreferName(value);
        }}
        onBlur={() => runValidationTasks("preferName", preferName)}
        errorMessage={errors.preferName?.errorMessage}
        hasError={errors.preferName?.hasError}
        {...getOverrideProps(overrides, "preferName")}
      ></TextField>
      <TextField
        label="Pronouns"
        isRequired={false}
        isReadOnly={false}
        defaultValue={pronouns}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              hobbies,
              occupation,
              interests,
              lifestyle,
              preferName,
              pronouns: value,
            };
            const result = onChange(modelFields);
            value = result?.pronouns ?? value;
          }
          if (errors.pronouns?.hasError) {
            runValidationTasks("pronouns", value);
          }
          setPronouns(value);
        }}
        onBlur={() => runValidationTasks("pronouns", pronouns)}
        errorMessage={errors.pronouns?.errorMessage}
        hasError={errors.pronouns?.hasError}
        {...getOverrideProps(overrides, "pronouns")}
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
