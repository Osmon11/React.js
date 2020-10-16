import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Assets/react-redux/store";
import { AuthProvider } from "./Admin/admin-log/auth";

export let rerenderDOM = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};
rerenderDOM();
serviceWorker.unregister();
