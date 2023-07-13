import SUBMIT_FORM_DETAILS from "./formTypes";

const submitFormDetails = (formDetails) => ({
  type: SUBMIT_FORM_DETAILS,
  payload: formDetails,
});

export default submitFormDetails;
