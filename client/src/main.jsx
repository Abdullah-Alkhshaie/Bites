import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { app } from "./firebase.config.js";
import "./index.css";
import { store } from "./RTK/Store.jsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} app={app}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </Provider>
);
