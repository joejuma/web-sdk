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

import Application from "./app/Application_component.jsx";

/* Main */
const rootElement = document.getElementById("root");
if(rootElement !== undefined){
    createRoot(rootElement).render(<Application/>);
}
else{
    console.error("[ERROR] in index.js: rootElement was undefined.");
};