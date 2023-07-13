import { Provider } from "react-redux";
import store from "./redux/store";

import FormContainer from "./components/formContainer.js";
import FormResultsContainer from "./components/formResultsContainer.js";

import "./App.css";

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <FormContainer />
      <FormResultsContainer />
    </div>
  </Provider>
);

export default App;
