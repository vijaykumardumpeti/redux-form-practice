import { combineReducers } from "redux";

import { reducer as formReducer } from "redux-form";
import formDetailsReducer from "./form/formReducers";

const rootReducer = combineReducers({
  form: formReducer,
  formDetails: formDetailsReducer,
});

export default rootReducer;
