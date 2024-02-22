/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { User } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function UserUpdateForm(props) {
  const {
    id,
    user,
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
    legalFirstName: undefined,
    email: undefined,
    searchingForRoommate: undefined,
    bio: undefined,
    prfilePic: undefined,
    posting: undefined,
    socials: undefined,
    dateCreated: undefined,
    phone: undefined,
    saveLists: undefined,
    profile: undefined,
    timeCreated: undefined,
    legalLastName: undefined,
    SearchingForRoommate: {},
    Socials: {},
    Profile: {},
    userSearchingForRoommateId: undefined,
    userSocialsId: undefined,
    userProfileId: undefined,
  };
  const [legalFirstName, setLegalFirstName] = React.useState(
    initialValues.legalFirstName
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [searchingForRoommate, setSearchingForRoommate] = React.useState(
    initialValues.searchingForRoommate
  );
  const [bio, setBio] = React.useState(initialValues.bio);
  const [prfilePic, setPrfilePic] = React.useState(initialValues.prfilePic);
  const [posting, setPosting] = React.useState(initialValues.posting);
  const [socials, setSocials] = React.useState(initialValues.socials);
  const [dateCreated, setDateCreated] = React.useState(
    initialValues.dateCreated
  );
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [saveLists, setSaveLists] = React.useState(initialValues.saveLists);
  const [profile, setProfile] = React.useState(initialValues.profile);
  const [timeCreated, setTimeCreated] = React.useState(
    initialValues.timeCreated
  );
  const [legalLastName, setLegalLastName] = React.useState(
    initialValues.legalLastName
  );
  const [SearchingForRoommate1, setSearchingForRoommate1] = React.useState(
    initialValues.SearchingForRoommate
  );
  const [Socials1, setSocials1] = React.useState(initialValues.Socials);
  const [Profile1, setProfile1] = React.useState(initialValues.Profile);
  const [userSearchingForRoommateId, setUserSearchingForRoommateId] =
    React.useState(initialValues.userSearchingForRoommateId);
  const [userSocialsId, setUserSocialsId] = React.useState(
    initialValues.userSocialsId
  );
  const [userProfileId, setUserProfileId] = React.useState(
    initialValues.userProfileId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...userRecord };
    setLegalFirstName(cleanValues.legalFirstName);
    setEmail(cleanValues.email);
    setSearchingForRoommate(cleanValues.searchingForRoommate);
    setBio(cleanValues.bio);
    setPrfilePic(cleanValues.prfilePic);
    setPosting(cleanValues.posting);
    setSocials(cleanValues.socials);
    setDateCreated(cleanValues.dateCreated);
    setPhone(cleanValues.phone);
    setSaveLists(cleanValues.saveLists);
    setProfile(cleanValues.profile);
    setTimeCreated(cleanValues.timeCreated);
    setLegalLastName(cleanValues.legalLastName);
    setSearchingForRoommate1(cleanValues.SearchingForRoommate);
    setSocials1(cleanValues.Socials);
    setProfile1(cleanValues.Profile);
    setUserSearchingForRoommateId(cleanValues.userSearchingForRoommateId);
    setUserSocialsId(cleanValues.userSocialsId);
    setUserProfileId(cleanValues.userProfileId);
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(user);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(User, id) : user;
      setUserRecord(record);
    };
    queryData();
  }, [id, user]);
  React.useEffect(resetStateValues, [userRecord]);
  const validations = {
    legalFirstName: [],
    email: [{ type: "Email" }],
    searchingForRoommate: [],
    bio: [],
    prfilePic: [{ type: "URL" }],
    posting: [],
    socials: [],
    dateCreated: [],
    phone: [{ type: "Phone" }],
    saveLists: [],
    profile: [],
    timeCreated: [],
    legalLastName: [],
    SearchingForRoommate: [],
    Socials: [],
    Profile: [],
    userSearchingForRoommateId: [],
    userSocialsId: [],
    userProfileId: [],
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
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hour12: false,
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          legalFirstName,
          email,
          searchingForRoommate,
          bio,
          prfilePic: prfilePic || undefined,
          posting,
          socials,
          dateCreated,
          phone,
          saveLists,
          profile,
          timeCreated,
          legalLastName,
          SearchingForRoommate: SearchingForRoommate1,
          Socials: Socials1,
          Profile: Profile1,
          userSearchingForRoommateId,
          userSocialsId,
          userProfileId,
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
            User.copyOf(userRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
    >
      <TextField
        label="Legal first name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={legalFirstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName: value,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.legalFirstName ?? value;
          }
          if (errors.legalFirstName?.hasError) {
            runValidationTasks("legalFirstName", value);
          }
          setLegalFirstName(value);
        }}
        onBlur={() => runValidationTasks("legalFirstName", legalFirstName)}
        errorMessage={errors.legalFirstName?.errorMessage}
        hasError={errors.legalFirstName?.hasError}
        {...getOverrideProps(overrides, "legalFirstName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        defaultValue={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email: value,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Searching for roommate"
        isRequired={false}
        isReadOnly={false}
        defaultValue={searchingForRoommate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate: value,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.searchingForRoommate ?? value;
          }
          if (errors.searchingForRoommate?.hasError) {
            runValidationTasks("searchingForRoommate", value);
          }
          setSearchingForRoommate(value);
        }}
        onBlur={() =>
          runValidationTasks("searchingForRoommate", searchingForRoommate)
        }
        errorMessage={errors.searchingForRoommate?.errorMessage}
        hasError={errors.searchingForRoommate?.hasError}
        {...getOverrideProps(overrides, "searchingForRoommate")}
      ></TextField>
      <TextField
        label="Bio"
        isRequired={false}
        isReadOnly={false}
        defaultValue={bio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio: value,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.bio ?? value;
          }
          if (errors.bio?.hasError) {
            runValidationTasks("bio", value);
          }
          setBio(value);
        }}
        onBlur={() => runValidationTasks("bio", bio)}
        errorMessage={errors.bio?.errorMessage}
        hasError={errors.bio?.hasError}
        {...getOverrideProps(overrides, "bio")}
      ></TextField>
      <TextField
        label="Prfile pic"
        isRequired={false}
        isReadOnly={false}
        defaultValue={prfilePic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic: value,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.prfilePic ?? value;
          }
          if (errors.prfilePic?.hasError) {
            runValidationTasks("prfilePic", value);
          }
          setPrfilePic(value);
        }}
        onBlur={() => runValidationTasks("prfilePic", prfilePic)}
        errorMessage={errors.prfilePic?.errorMessage}
        hasError={errors.prfilePic?.hasError}
        {...getOverrideProps(overrides, "prfilePic")}
      ></TextField>
      <TextField
        label="Posting"
        isRequired={false}
        isReadOnly={false}
        defaultValue={posting}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting: value,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.posting ?? value;
          }
          if (errors.posting?.hasError) {
            runValidationTasks("posting", value);
          }
          setPosting(value);
        }}
        onBlur={() => runValidationTasks("posting", posting)}
        errorMessage={errors.posting?.errorMessage}
        hasError={errors.posting?.hasError}
        {...getOverrideProps(overrides, "posting")}
      ></TextField>
      <TextField
        label="Socials"
        isRequired={false}
        isReadOnly={false}
        defaultValue={socials}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials: value,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.socials ?? value;
          }
          if (errors.socials?.hasError) {
            runValidationTasks("socials", value);
          }
          setSocials(value);
        }}
        onBlur={() => runValidationTasks("socials", socials)}
        errorMessage={errors.socials?.errorMessage}
        hasError={errors.socials?.hasError}
        {...getOverrideProps(overrides, "socials")}
      ></TextField>
      <TextField
        label="Date created"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={dateCreated && convertToLocal(new Date(dateCreated))}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated: value,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.dateCreated ?? value;
          }
          if (errors.dateCreated?.hasError) {
            runValidationTasks("dateCreated", value);
          }
          setDateCreated(new Date(value).toISOString());
        }}
        onBlur={() => runValidationTasks("dateCreated", dateCreated)}
        errorMessage={errors.dateCreated?.errorMessage}
        hasError={errors.dateCreated?.hasError}
        {...getOverrideProps(overrides, "dateCreated")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        defaultValue={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone: value,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Save lists"
        isRequired={false}
        isReadOnly={false}
        defaultValue={saveLists}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists: value,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.saveLists ?? value;
          }
          if (errors.saveLists?.hasError) {
            runValidationTasks("saveLists", value);
          }
          setSaveLists(value);
        }}
        onBlur={() => runValidationTasks("saveLists", saveLists)}
        errorMessage={errors.saveLists?.errorMessage}
        hasError={errors.saveLists?.hasError}
        {...getOverrideProps(overrides, "saveLists")}
      ></TextField>
      <TextField
        label="Profile"
        isRequired={false}
        isReadOnly={false}
        defaultValue={profile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile: value,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.profile ?? value;
          }
          if (errors.profile?.hasError) {
            runValidationTasks("profile", value);
          }
          setProfile(value);
        }}
        onBlur={() => runValidationTasks("profile", profile)}
        errorMessage={errors.profile?.errorMessage}
        hasError={errors.profile?.hasError}
        {...getOverrideProps(overrides, "profile")}
      ></TextField>
      <TextField
        label="Time created"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        defaultValue={
          timeCreated && convertToLocal(convertTimeStampToDate(timeCreated))
        }
        onChange={(e) => {
          const date = new Date(e.target.value);
          if (!(date instanceof Date && !isNaN(date))) {
            setErrors((errors) => ({
              ...errors,
              timeCreated: "The value must be a valid date",
            }));
            return;
          }
          let value = Number(date);
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated: value,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.timeCreated ?? value;
          }
          if (errors.timeCreated?.hasError) {
            runValidationTasks("timeCreated", value);
          }
          setTimeCreated(value);
        }}
        onBlur={() => runValidationTasks("timeCreated", timeCreated)}
        errorMessage={errors.timeCreated?.errorMessage}
        hasError={errors.timeCreated?.hasError}
        {...getOverrideProps(overrides, "timeCreated")}
      ></TextField>
      <TextField
        label="Legal last name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={legalLastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName: value,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.legalLastName ?? value;
          }
          if (errors.legalLastName?.hasError) {
            runValidationTasks("legalLastName", value);
          }
          setLegalLastName(value);
        }}
        onBlur={() => runValidationTasks("legalLastName", legalLastName)}
        errorMessage={errors.legalLastName?.errorMessage}
        hasError={errors.legalLastName?.hasError}
        {...getOverrideProps(overrides, "legalLastName")}
      ></TextField>
      <SelectField
        label="Searching for roommate"
        placeholder="Please select an option"
        isDisabled={false}
        value={SearchingForRoommate1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: value,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.SearchingForRoommate ?? value;
          }
          if (errors.SearchingForRoommate?.hasError) {
            runValidationTasks("SearchingForRoommate", value);
          }
          setSearchingForRoommate1(value);
        }}
        onBlur={() =>
          runValidationTasks("SearchingForRoommate", SearchingForRoommate1)
        }
        errorMessage={errors.SearchingForRoommate?.errorMessage}
        hasError={errors.SearchingForRoommate?.hasError}
        {...getOverrideProps(overrides, "SearchingForRoommate")}
      ></SelectField>
      <SelectField
        label="Socials"
        placeholder="Please select an option"
        isDisabled={false}
        value={Socials1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: value,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.Socials ?? value;
          }
          if (errors.Socials?.hasError) {
            runValidationTasks("Socials", value);
          }
          setSocials1(value);
        }}
        onBlur={() => runValidationTasks("Socials", Socials1)}
        errorMessage={errors.Socials?.errorMessage}
        hasError={errors.Socials?.hasError}
        {...getOverrideProps(overrides, "Socials")}
      ></SelectField>
      <SelectField
        label="Profile"
        placeholder="Please select an option"
        isDisabled={false}
        value={Profile1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: value,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.Profile ?? value;
          }
          if (errors.Profile?.hasError) {
            runValidationTasks("Profile", value);
          }
          setProfile1(value);
        }}
        onBlur={() => runValidationTasks("Profile", Profile1)}
        errorMessage={errors.Profile?.errorMessage}
        hasError={errors.Profile?.hasError}
        {...getOverrideProps(overrides, "Profile")}
      ></SelectField>
      <TextField
        label="User searching for roommate id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={userSearchingForRoommateId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId: value,
              userSocialsId,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.userSearchingForRoommateId ?? value;
          }
          if (errors.userSearchingForRoommateId?.hasError) {
            runValidationTasks("userSearchingForRoommateId", value);
          }
          setUserSearchingForRoommateId(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "userSearchingForRoommateId",
            userSearchingForRoommateId
          )
        }
        errorMessage={errors.userSearchingForRoommateId?.errorMessage}
        hasError={errors.userSearchingForRoommateId?.hasError}
        {...getOverrideProps(overrides, "userSearchingForRoommateId")}
      ></TextField>
      <TextField
        label="User socials id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={userSocialsId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId: value,
              userProfileId,
            };
            const result = onChange(modelFields);
            value = result?.userSocialsId ?? value;
          }
          if (errors.userSocialsId?.hasError) {
            runValidationTasks("userSocialsId", value);
          }
          setUserSocialsId(value);
        }}
        onBlur={() => runValidationTasks("userSocialsId", userSocialsId)}
        errorMessage={errors.userSocialsId?.errorMessage}
        hasError={errors.userSocialsId?.hasError}
        {...getOverrideProps(overrides, "userSocialsId")}
      ></TextField>
      <TextField
        label="User profile id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={userProfileId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              legalFirstName,
              email,
              searchingForRoommate,
              bio,
              prfilePic,
              posting,
              socials,
              dateCreated,
              phone,
              saveLists,
              profile,
              timeCreated,
              legalLastName,
              SearchingForRoommate: SearchingForRoommate1,
              Socials: Socials1,
              Profile: Profile1,
              userSearchingForRoommateId,
              userSocialsId,
              userProfileId: value,
            };
            const result = onChange(modelFields);
            value = result?.userProfileId ?? value;
          }
          if (errors.userProfileId?.hasError) {
            runValidationTasks("userProfileId", value);
          }
          setUserProfileId(value);
        }}
        onBlur={() => runValidationTasks("userProfileId", userProfileId)}
        errorMessage={errors.userProfileId?.errorMessage}
        hasError={errors.userProfileId?.hasError}
        {...getOverrideProps(overrides, "userProfileId")}
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
