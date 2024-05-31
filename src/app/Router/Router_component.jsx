/* Deps */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "../Pages/pages.jsx";

/* Components */
const Router = () => {
    /*
        # Router (component)

        ## Description
        Handles routing within the web application. Used primarily as a wrapper 
        around a given routing framework to allow swapping with a consistent 
        interface.
    */

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pages.Errors.NotFound/>}/>
                <Route path="*" element={<Pages.Errors.NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
};

/* Exports */
export default Router;