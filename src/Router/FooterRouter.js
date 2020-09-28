import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Footer from "../Components/Footer";

export default function FooterRouter() {
  return (
    //ROUTE TO ALL MY PAGE COMPONENTS
    <footer>
      <Switch>
        <Route exact path="/" component={Footer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/help" component={FAQ} />
      </Switch>
    </footer>
  );
}
