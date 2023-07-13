import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import { useState } from "react";
import submitFormDetails from "../../redux/form/formActions";

import { FormContentContainer, Button } from "./styledComponents";

const FormContainer = () => {
  const [formObject, updateFormObject] = useState({
    firstName: "",
    lastName: "",
  });
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={() => {
          dispatch(submitFormDetails(formObject));
        }}
      >
        <FormContentContainer>
          <label htmlFor="firstName">firstName</label>
          <Field
            onChange={(e) => {
              updateFormObject((prevObject) => ({
                ...prevObject,
                firstName: e.target.value,
              }));
            }}
            name="firstName"
            type="text"
            component="input"
          />
        </FormContentContainer>
        <FormContentContainer>
          <label htmlFor="lastName">lastName</label>
          <Field
            onChange={(e) => {
              updateFormObject((prevState) => ({
                ...prevState,
                lastName: e.target.value,
              }));
            }}
            name="lastName"
            type="text"
            component="input"
          />
        </FormContentContainer>
        <Button type="submit">submit</Button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "FormContainer",
})(FormContainer);
