import SUBMIT_FORM_DETAILS from "./formTypes";

const initialState = {
  formDetails: {},
};

const formDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_FORM_DETAILS:
      return {
        ...state,
        formDetails: action.payload,
      };

    default:
      return state;
  }
};

export default formDetailsReducer;
