/* Deps */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "../Pages/pages";

/* Components */
const Router = () => {
  /*
        # Router (component)

        ## Description
        Handles routing within the web application. Used primarily as a wrapper 
        around a given routing framework to allow swapping with a consistent 
        interface.
    */

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Errors.NotFound />} />
        <Route path="*" element={<Pages.Errors.NotFound />} />
        <Route path="/test" element={<h1>AAAAA</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

/* Exports */
export default Router;
