import React from "react";
import { Navbar } from "../Components/Navbar";
import { Route, Switch } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Electronics } from "../Pages/Electronics";
import { Mens } from "../Pages/Mens";
import { Women } from "../Pages/Women";
import { Jewelry } from "../Pages/Jewelry";
import { Footer } from "../Components/Footer";
import { ContactUsPage } from "../Pages/ContactUsPage";
import { AboutUsPage } from "../Pages/AboutUsPage";
import {FaqPage} from "../Pages/FaqPage";


export const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/electronics">
          <Electronics />
        </Route>
        <Route path="/men's">
          <Mens />
        </Route>
        <Route path="/women's">
          <Women />
        </Route>
        <Route path="/jewelry">
          <Jewelry />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contact_us">
          <ContactUsPage />
        </Route>
        <Route path="/about_us">
          <AboutUsPage />
        </Route>
        <Route path="/FAQ">
          <FaqPage />
        </Route>
        <Route>404 Page Not Found</Route>
      </Switch>
      <Footer />
    </div>
  );
};
