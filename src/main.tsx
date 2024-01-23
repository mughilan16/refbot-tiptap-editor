import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppRootProviders from "./Components/Providers/AppRootProviders";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRootProviders>
    <App />
  </AppRootProviders>
);
