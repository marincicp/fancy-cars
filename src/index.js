import "./scss/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { RootStoreContexProvider } from "./context/RootStoreContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <BrowserRouter>
    <RootStoreContexProvider>
      <App />
    </RootStoreContexProvider>
  </BrowserRouter>
);
