import React from "react";
import { Field, reduxForm } from "redux-form";

const required = value =>
  value || typeof value === "number" ? undefined : "Required";
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;
const minValue13 = minValue(13);
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 10 digits"
    : undefined;

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let UserCreationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Paramètres de connexion</legend>
        <Field
          name="pseudo"
          type="text"
          component={renderField}
          label="Pseudo"
          validate={[required, minLength2]}
        />
        <Field
          name="password"
          type="text"
          component={renderField}
          label="Mot de passe"
          validate={[required, minLength2, alphaNumeric]}
        />
      </fieldset>
      <fieldset>
        <legend>Description</legend>
        <Field
          name="nom"
          type="text"
          component={renderField}
          label="Nom"
          validate={[required, minLength2]}
        />
        <Field
          name="prenom"
          type="text"
          component={renderField}
          label="Prénom"
          validate={[required, minLength2]}
        />
        <Field
          name="age"
          type="text"
          component={renderField}
          label="Âge"
          validate={[required, minLength2, number]}
        />
        <Field
          name="genre"
          type="select"
          component="select"
          label="Genre"
          validate={[required]}
        >
          <option>Genre</option>
          <option value="1">Homme</option>
          <option value="2">Femme</option>
          <option value="3">Autre</option>
        </Field>

        <Field
          name="city"
          type="text"
          component={renderField}
          label="Ville"
          validate={[required, minLength2]}
        />
        <Field
          name="about"
          type="textarea"
          component={renderField}
          label="A propos"
          validate={[required, minLength2]}
        />
      </fieldset>
      <div>
        <button type="submit" disabled={submitting}>
          Envoyer
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Reset
        </button>
      </div>
    </form>
  );
};

UserCreationForm = reduxForm({
  form: "usercreation"
})(UserCreationForm);

export default UserCreationForm;
