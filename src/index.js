import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={configureStore()}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  rootElement
);
