/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { SaveList } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function SaveListUpdateForm(props) {
  const {
    id,
    saveList,
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
    postID: undefined,
    saveListTitle: undefined,
    userID: undefined,
  };
  const [postID, setPostID] = React.useState(initialValues.postID);
  const [saveListTitle, setSaveListTitle] = React.useState(
    initialValues.saveListTitle
  );
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...saveListRecord };
    setPostID(cleanValues.postID);
    setSaveListTitle(cleanValues.saveListTitle);
    setUserID(cleanValues.userID);
    setErrors({});
  };
  const [saveListRecord, setSaveListRecord] = React.useState(saveList);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(SaveList, id) : saveList;
      setSaveListRecord(record);
    };
    queryData();
  }, [id, saveList]);
  React.useEffect(resetStateValues, [saveListRecord]);
  const validations = {
    postID: [],
    saveListTitle: [],
    userID: [{ type: "Required" }],
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
          postID,
          saveListTitle,
          userID,
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
            SaveList.copyOf(saveListRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SaveListUpdateForm")}
    >
      <TextField
        label="Post id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={postID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postID: value,
              saveListTitle,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.postID ?? value;
          }
          if (errors.postID?.hasError) {
            runValidationTasks("postID", value);
          }
          setPostID(value);
        }}
        onBlur={() => runValidationTasks("postID", postID)}
        errorMessage={errors.postID?.errorMessage}
        hasError={errors.postID?.hasError}
        {...getOverrideProps(overrides, "postID")}
      ></TextField>
      <TextField
        label="Save list title"
        isRequired={false}
        isReadOnly={false}
        defaultValue={saveListTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postID,
              saveListTitle: value,
              userID,
            };
            const result = onChange(modelFields);
            value = result?.saveListTitle ?? value;
          }
          if (errors.saveListTitle?.hasError) {
            runValidationTasks("saveListTitle", value);
          }
          setSaveListTitle(value);
        }}
        onBlur={() => runValidationTasks("saveListTitle", saveListTitle)}
        errorMessage={errors.saveListTitle?.errorMessage}
        hasError={errors.saveListTitle?.hasError}
        {...getOverrideProps(overrides, "saveListTitle")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        defaultValue={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              postID,
              saveListTitle,
              userID: value,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
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
