/*
    # Web Application

    ## About
    @placeholder

    ## Copyright
    Copyright @name, @year. All rights reserved.
*/

/* Deps */
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./app";

/* Main */
const rootElement = document.getElementById("root");
if (!!rootElement) {
  createRoot(rootElement).render(<App.Application />);
} else {
  console.error("[ERROR] in index.js: rootElement was undefined.");
}
