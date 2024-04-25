import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import reportWebVitals from "./report-web-vitals";

// This sample uses mock service worker rather than a real API for development.
// You can remove this if a real API is available.
if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
}

const container = document.getElementById("root");

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
