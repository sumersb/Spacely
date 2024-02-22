/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Socials } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SocialsCreateForm(props) {
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
    instaLink: undefined,
    facebookLink: undefined,
    otherLink: undefined,
    instahandler: undefined,
    socialDetails: undefined,
  };
  const [instaLink, setInstaLink] = React.useState(initialValues.instaLink);
  const [facebookLink, setFacebookLink] = React.useState(
    initialValues.facebookLink
  );
  const [otherLink, setOtherLink] = React.useState(initialValues.otherLink);
  const [instahandler, setInstahandler] = React.useState(
    initialValues.instahandler
  );
  const [socialDetails, setSocialDetails] = React.useState(
    initialValues.socialDetails
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setInstaLink(initialValues.instaLink);
    setFacebookLink(initialValues.facebookLink);
    setOtherLink(initialValues.otherLink);
    setInstahandler(initialValues.instahandler);
    setSocialDetails(initialValues.socialDetails);
    setErrors({});
  };
  const validations = {
    instaLink: [{ type: "URL" }],
    facebookLink: [{ type: "URL" }],
    otherLink: [{ type: "URL" }],
    instahandler: [],
    socialDetails: [],
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
          instaLink: instaLink || undefined,
          facebookLink: facebookLink || undefined,
          otherLink: otherLink || undefined,
          instahandler,
          socialDetails,
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
          await DataStore.save(new Socials(modelFields));
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
      {...getOverrideProps(overrides, "SocialsCreateForm")}
    >
      <TextField
        label="Insta link"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instaLink: value,
              facebookLink,
              otherLink,
              instahandler,
              socialDetails,
            };
            const result = onChange(modelFields);
            value = result?.instaLink ?? value;
          }
          if (errors.instaLink?.hasError) {
            runValidationTasks("instaLink", value);
          }
          setInstaLink(value);
        }}
        onBlur={() => runValidationTasks("instaLink", instaLink)}
        errorMessage={errors.instaLink?.errorMessage}
        hasError={errors.instaLink?.hasError}
        {...getOverrideProps(overrides, "instaLink")}
      ></TextField>
      <TextField
        label="Facebook link"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instaLink,
              facebookLink: value,
              otherLink,
              instahandler,
              socialDetails,
            };
            const result = onChange(modelFields);
            value = result?.facebookLink ?? value;
          }
          if (errors.facebookLink?.hasError) {
            runValidationTasks("facebookLink", value);
          }
          setFacebookLink(value);
        }}
        onBlur={() => runValidationTasks("facebookLink", facebookLink)}
        errorMessage={errors.facebookLink?.errorMessage}
        hasError={errors.facebookLink?.hasError}
        {...getOverrideProps(overrides, "facebookLink")}
      ></TextField>
      <TextField
        label="Other link"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instaLink,
              facebookLink,
              otherLink: value,
              instahandler,
              socialDetails,
            };
            const result = onChange(modelFields);
            value = result?.otherLink ?? value;
          }
          if (errors.otherLink?.hasError) {
            runValidationTasks("otherLink", value);
          }
          setOtherLink(value);
        }}
        onBlur={() => runValidationTasks("otherLink", otherLink)}
        errorMessage={errors.otherLink?.errorMessage}
        hasError={errors.otherLink?.hasError}
        {...getOverrideProps(overrides, "otherLink")}
      ></TextField>
      <TextField
        label="Instahandler"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instaLink,
              facebookLink,
              otherLink,
              instahandler: value,
              socialDetails,
            };
            const result = onChange(modelFields);
            value = result?.instahandler ?? value;
          }
          if (errors.instahandler?.hasError) {
            runValidationTasks("instahandler", value);
          }
          setInstahandler(value);
        }}
        onBlur={() => runValidationTasks("instahandler", instahandler)}
        errorMessage={errors.instahandler?.errorMessage}
        hasError={errors.instahandler?.hasError}
        {...getOverrideProps(overrides, "instahandler")}
      ></TextField>
      <TextField
        label="Social details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              instaLink,
              facebookLink,
              otherLink,
              instahandler,
              socialDetails: value,
            };
            const result = onChange(modelFields);
            value = result?.socialDetails ?? value;
          }
          if (errors.socialDetails?.hasError) {
            runValidationTasks("socialDetails", value);
          }
          setSocialDetails(value);
        }}
        onBlur={() => runValidationTasks("socialDetails", socialDetails)}
        errorMessage={errors.socialDetails?.errorMessage}
        hasError={errors.socialDetails?.hasError}
        {...getOverrideProps(overrides, "socialDetails")}
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
