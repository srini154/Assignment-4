import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Res from "./components/Res/ResLand";
import Delivery from "./components/Delivery/Delivery";
import Menu from "./components/Delivery/Menu/Menu";
import Country from "./components/Country/Country";
import SuccessBook from "./components/Dinein/MenuDinein/BookTable/SuccessBook";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/Assignment-4" Component={Landing} />
        <Route exact path="/Assignment-4/restaurants/:city" Component={Res} />
        <Route exact path="/Assignment-4/:country" Component={Country} />
        <Route
          exact
          path="/Assignment-4/restaurants/:city/:hotles"
          Component={Menu}
        />

        <Route path="*" element={<p>Invalid Path</p>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
